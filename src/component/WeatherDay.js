import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";


// import Weather from "./Weather";
class WeatherDay extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.info.date} {this.props.info.description}</p>
      </div>
    );
  }
}

export default WeatherDay;

