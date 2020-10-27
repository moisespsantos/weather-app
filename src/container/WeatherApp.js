import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Jumbotron } from "react-bootstrap";
import { getWeatherInfo } from "./../Api";

export default class WeatherApp extends Component {
     constructor(props) {
          super(props);

          this.state = {
               city: "",
               weather: {},
          };
     }

     handleChangeInput = async ({ target }) => {
          const { name, value } = target;

          this.setState({
               [name]: value,
          });
     };

     searchApi = async () => {
          const { city } = this.state;
          const { data } = await getWeatherInfo(city);

          this.setState({ weather: data });
     };

     render() {
          const { city, weather } = this.state;
          return (
               <Container>
                    <Row>
                         <Col>
                              <h1>Temperature of the world!</h1>
                              <Form.Group controlId="formBasicEmail">
                                   <Form.Control
                                        type="text"
                                        name="city"
                                        onChange={this.handleChangeInput}
                                        placeholder="enter city name"
                                        value={city}
                                   />
                              </Form.Group>
                              <Button
                                   variant="primary"
                                   type="submit"
                                   onClick={this.searchApi}
                              >
                                   Submit
                              </Button>

                              <hr />

                              {weather && weather.current ? (
                                   <Jumbotron fluid>
                                        <Container>
                                             <h1 className="info-temperature">
                                                 Temperature - {weather.current.temperature}
                                             </h1>
                                             <p>
                                                  {weather.location.name} -{" "}
                                                  {weather.location.timezone_id}{" "}
                                                  - {weather.location.localtime}
                                             </p>
                                             <img
                                                  src={
                                                       weather.current
                                                            .weather_icons
                                                  }
                                                  alt=""
                                             />
                                             <h4>{}</h4>
                                        </Container>
                                   </Jumbotron>
                              ) : (
                              <p>{""}</p>
                              )}
                         </Col>
                    </Row>
               </Container>
          );
     }
}
