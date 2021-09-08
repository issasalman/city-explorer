import React, { Component } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./component/Weather";
import Movies from "./component/Movies";
import WeatherDay from "./component/WeatherDay"
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      error: false,
      locationImg: "",
      locationInfo: [],
      locationMovie: [],
    };
  }
  submitForm = async (e) => {
    e.preventDefault();
    try {
      const location = e.target.locationName.value;
      console.log("user Input Location: ", location);
      const response = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${location}&format=json`
      );
      this.setState({
        locationData: response.data[0],
      });
      const response2 = await axios.get(
        `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&format=jpg `
      );
      // console.log("our img response", response2.data);
      console.log("our axios response", response.data[0]);
      this.setState({
        locationImg: response2.config.url,
      });

      const response3 = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/weather?city=${location}`
      );

      this.setState({
        locationInfo: response3.data,
      });

      const response4 = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/movies?query=${location}`
      );

      this.setState({
        locationMovie: response4.data,
      });

      console.log("our cs response", this.state.locationInfo);
    } catch (error) {
      console.log("catch error" + error);
      this.setState({
        error: true,
      });
    }
  };
  render() {
    // Solution #2
    // let imgSrc;
    // if (this.state.locationData.lon) {
    //   imgSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&format=jpg `;
    // } else {
    //   imgSrc = "";
    // }

    console.log(this.state.locationInfo);
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label
            style={{
              color: "white",
            }}
          >
            Location Name:{" "}
          </label>
          <input name="locationName" type="text" placeholder="Enter Location" />
          <input type="submit" value="Search Location" />
        </form>
        

        <div>
          <Weather
            locationInfo={this.state.locationInfo}
            locationData={this.state.locationData}
          />
        </div>
        <div>
          {this.state.error && (
            <p style={{ color: "white" }}>Location not found try again </p>
          )}
          {this.state.locationData.lon && (
            <p style={{ color: "white" }}>The Selected Map </p>
          )}
        </div>
        <div>
          <img src={this.state.locationImg} alt={""} />
        </div>
        <div>
          <Movies locationMovie={this.state.locationMovie} />
        </div>
      </div>
    );
  }
}
export default App;
