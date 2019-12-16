import React from 'react';
import './forecast.css';
import { apiKey } from '../api/apiKey';

class DailyForecast extends React.Component {
  state = {
    fullDate: '',
    temp: '',
    minTemp: '',
    maxTemp: ''
  };

  componentDidMount() {
    // Fetch API Data here (Maybe move this method to App Component and pass as props)
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Valletta,mt&appid=${apiKey}`
    )
      .then(res => res.json())
      .then(data => {
        // API returns temperature in Kelvin
        console.log(data);
        // 0K - 273.15 = -273.1°С
        // Mininum temperature to 2dp in °С
        // console.log((data.main.temp_min - 273.15).toFixed(2) + '°С');
        // Maximum temperature to 2dp in °С
        // console.log((data.main.temp_max - 273.15).toFixed(2) + '°С');
        // Update State
        this.setState({ temp: (data.main.temp - 273.15).toFixed(2) });
        this.setState({ minTemp: (data.main.temp_min - 273.15).toFixed(2) });
        this.setState({ maxTemp: (data.main.temp_max - 273.15).toFixed(2) });
      })
      .catch(console.log);

    const dayOne = new Date();
    // // Get tomorrow's date
    dayOne.setDate(dayOne.getDate() + 1);
    // console.log(dayOne);
    // console.log(date.getDate() + 1);

    // Get current date
    const date = new Date();
    // Assign fullDate var to return value of the getFullDate function, passing in current date as param
    const fullDate = this.props.getFullDate(date);
    // Set state
    this.setState({ fullDate: fullDate });
  }

  render() {
    return (
      <div className="container mt-5">
        <h2>The Weekly Weather Forecast for Valletta</h2>
        <div className="container mt-5">
          <div className="weather-card">
            <div className="weather-card-grid-container">
              <div className="weather-card-header">
                <h1 style={{ color: '#fff' }}>{this.state.fullDate}</h1>
              </div>
              <div className="weather-card-icon">
                <i className="fas fa-sun sun"></i>
              </div>
            </div>
            <div className="temperature-container">
              <p style={{ padding: '1rem' }}>
                Current Temperature: {this.state.temp}°С
              </p>
              {/* <p>Min: {this.state.minTemp}°С</p>
              <p>Max: {this.state.maxTemp}°С</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyForecast;
