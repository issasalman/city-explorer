import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDay from "./WeatherDay";
import Row from "react-bootstrap/Row";

class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.locationData.display_name && (
          <>
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
              </Card.Body>
            </Card>

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
                <Card.Text> locationInfo :</Card.Text>
                <Row xs={1} md={3} className="g-4">
                  {this.props.locationInfo.map((element) => {
                    return <WeatherDay info={element} />;
                  })}
                </Row>
              </Card.Body>
            </Card>
          </>
        )}
      </div>
    );
  }
}

export default Weather;
