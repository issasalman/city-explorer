import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Movies extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.locationMovie.map((element) => {
          return (
            <Card
              style={{
                width: "30rem",
                border: "solid",
                background: "white",
                color: "white",
                margin: "10px",
              }}
            >
              <Card.Body
                style={{
                  color: "black",
                }}
              >
                <Card.Title>Movie</Card.Title>
                <Card.Text>{element.title}</Card.Text>
                <Card.Text>{element.overview}</Card.Text>
                <Card.Text>{element.vote}</Card.Text>
                <Card.Text>{element.count}</Card.Text>
                <Card.Text>{element.release_date}</Card.Text>
                <Card.Text>{element.popularity}</Card.Text>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${element.img} `} alt={element.title}  />
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}

export default Movies;
