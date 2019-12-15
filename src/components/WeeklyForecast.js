import React from 'react';
import './forecast.css';

class WeeklyForecast extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="container mt-5">
          <div className="grid-container">
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>Monday 16th December</h1>
                </div>
                <div className="weather-card-icon">
                  <i className="fas fa-sun sun"></i>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: 16°С</p>
                <p>Max: 16.7°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>Tuesday 17th December</h1>
                </div>
                <div className="weather-card-icon">
                  <i className="fas fa-cloud-sun-rain"></i>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: 16°С</p>
                <p>Max: 16.7°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>Wednesday 18th December</h1>
                </div>
                <div className="weather-card-icon">
                  <i className="fas fa-cloud cloud"></i>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: 16°С</p>
                <p>Max: 16.7°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>Thursday 19th December</h1>
                </div>
                <div className="weather-card-icon">
                  <i className="fas fa-sun sun"></i>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: 16°С</p>
                <p>Max: 16.7°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>Friday 20th December</h1>
                </div>
                <div className="weather-card-icon">
                  <i className="fas fa-cloud-sun-rain"></i>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: 16°С</p>
                <p>Max: 16.7°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>Saturday 21st December</h1>
                </div>
                <div className="weather-card-icon">
                  <i className="fas fa-sun sun"></i>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: 16°С</p>
                <p>Max: 16.7°С</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyForecast;
