import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

// import Weather from "./Weather";
class WeatherDay extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.movieInfo.title}</p>
        <p> {this.props.movieInfo.overview}</p> 
     
        <p> {this.props.movieInfo.release_date}</p>
        <p> {this.props.movieInfo.popularity}</p>
        <p>  {this.props.movieInfo.vote}</p> 
        <p> {this.props.movieInfo.count} </p>
      </div>
    );
  }
}

export default WeatherDay;
