import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Movies extends React.Component {
  render() {
    console.log(this.props);
    return (
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
            <Card.Title>Moives</Card.Title>
            <Card.Text>{this.props.locationMovie.title}</Card.Text>
            <Card.Text>{this.props.locationMovie.overview}</Card.Text>
            <Card.Text>{this.props.locationMovie.vote}</Card.Text>
            <Card.Text>{this.props.locationMovie.count}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Movies;
