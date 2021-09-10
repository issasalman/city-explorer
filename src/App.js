import React, { Component } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./component/Weather";
import Movies from "./component/Movies";
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

      let locIq = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${location}&format=json`;
      let weathServer = `${process.env.REACT_APP_SERVER_URL}/weather?city=${location}`;
      let movieServer = `${process.env.REACT_APP_SERVER_URL}/movies?query=${location}`;
      console.log("user Input Location: ", location);

      axios.get(locIq).then((locatIQ) => {
        this.setState({
          locationData: locatIQ.data[0],
        });
        console.log(this.state.locationData);
        let locMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&format=jpg `;
        axios.get(locMap).then((LocatMAP) => {
          this.setState({
            locationImg: LocatMAP.config.url,
          });
        });
      });
      axios.get(weathServer).then((weaLOC) => {
        this.setState({
          locationInfo: weaLOC.data,
        });
      });
      axios.get(movieServer).then((movieLOC) => {
        this.setState({
          locationMovie: movieLOC.data,
        });
      });
    } catch (error) {
      console.log("catch error" + error);
      this.setState({
        error: error.message,
      });
    }
  };
  render() {
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
            <p style={{ color: "white" }}>
              {" "}
              {this.state.error} Location not found try again{" "}
            </p>
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
