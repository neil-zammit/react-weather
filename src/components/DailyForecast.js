import React from 'react';
import './forecast.css';

class DailyForecast extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>The Weekly Weather Forecast for Valletta</h2>
        <div className="container mt-5">
          <div className="weather-card">
            <div className="weather-card-grid-container">
              <div className="weather-card-header">
                <h1 style={{ color: '#fff' }}>Sunday 15th December</h1>
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
    );
  }
}

export default DailyForecast;
