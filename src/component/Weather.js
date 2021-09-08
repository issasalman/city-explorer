import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Weather extends React.Component {
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
            <Card.Title>
              {" "}
              Display Name :{this.props.locationData.display_name}
            </Card.Title>
            <Card.Text>latitude : {this.props.locationData.lat}</Card.Text>
            <Card.Text>longitude : {this.props.locationData.lon}</Card.Text>
             <Card.Text> locationInfo :</Card.Text>
            {this.props.locationInfo.map((element) => {
              return (
                <Card.Text>
                {element.description} {element.date}
                </Card.Text>
              );
            })}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Weather;
