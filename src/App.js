import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      error: false,
      locationImg: "",
      locationInfo: {},
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

      const response4 = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/weather?city_name=${location}`
      );
      console.log("our asdadadesponse", response4);
      const response3 = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/weatherInfo?city_name=${location}`
      );

      this.setState({
        locationInfo: response3.data,
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
          <Card
            style={{
              width: "30rem",
              border: "solid",
              background: "white",
              color: "white",
            }}
          >
            <Card.Body
              style={{
                color: "black",
              }}
            >
              <Card.Title>
                {" "}
                Display Name :{this.state.locationData.display_name}
              </Card.Title>
              <Card.Text>latitude : {this.state.locationData.lat}</Card.Text>
              <Card.Text>longitude : {this.state.locationData.lon}</Card.Text>
              <Card.Text>
                locationInfo : {this.state.locationInfo.description}{" "}
                {this.state.locationInfo.date}
              </Card.Text>
              {/* <Card.Img variant="top"  /> */}
            </Card.Body>
          </Card>
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
      </div>
    );
  }
}
export default App;
