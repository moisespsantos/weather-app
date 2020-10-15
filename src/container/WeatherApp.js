import React, { Component } from 'react';
import { getWeatherInfo } from './../Api';

export default class WeatherApp extends Component {
       constructor(props){
              super(props);

              this.state = {
                     city: '',
                     weather: {}
              }
       }

       handleChangeInput = async ({ target }) => {
           const { name, value }  = target;

            this.setState({
                 [name]: value
           })
       }


       searchApi = async () => {
           const { city } = this.state;  
           const { data } = await getWeatherInfo(city);
           
           this.setState({ weather: data });
       }

       render(){
              const { city, weather } = this.state;
              return(
                     <div>
                            <input type="text" name="city" onChange={this.handleChangeInput} placeholder="enter city name" value={city} />
                            <button type="submit" onClick={this.searchApi}>Search</button>
                            <hr />
                        
                            { weather && weather.current ? 
                                <div className="weather-info">
                                     <h1>{weather.current.temperature}</h1>
                                     <p>{weather.location.name} - {weather.location.timezone_id} - {weather.location.localtime}</p>
                                     <img src={weather.current.weather_icons} alt=""/>
                                      <h4>{}</h4>
                                 </div>
                                   : <p>Not yet</p>
                            } 

                     </div>
              )
       }
   }
   