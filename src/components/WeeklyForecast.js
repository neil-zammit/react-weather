import React from 'react';
import './forecast.css';

class WeeklyForecast extends React.Component {
  state = {
    fullDateOne: '',
    minTempOne: '',
    maxTempOne: '',
    fullDateTwo: '',
    minTempTwo: '',
    maxTempTwo: '',
    fullDateThree: '',
    minTempThree: '',
    maxTempThree: '',
    fullDateFour: '',
    minTempFour: '',
    maxTempFour: '',
    fullDateFive: '',
    minTempFive: '',
    maxTempFive: '',
    fullDateSix: '',
    minTempSix: '',
    maxTempSix: ''
  };

  componentDidMount() {
    // Fetch API Data here (Maybe move this method to App Component and pass as props)
    // fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=Valletta,mt&appid=${apiKey}`
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     // API returns temperature in Kelvin
    //     console.log(data);
    //     // 0K - 273.15 = -273.1°С
    //     // Mininum temperature to 2dp in °С
    //     console.log((data.main.temp_min - 273.15).toFixed(2) + '°С');
    //     // Maximum temperature to 2dp in °С
    //     console.log((data.main.temp_max - 273.15).toFixed(2) + '°С');
    //     // Update State
    //     this.setState({ minTemp: (data.main.temp_min - 273.15).toFixed(2) });
    //     this.setState({ maxTemp: (data.main.temp_max - 273.15).toFixed(2) });
    //   })
    //   .catch(console.log);

    // Get dates
    const dayOne = new Date();
    // Get tomorrow's date
    dayOne.setDate(dayOne.getDate() + 1);
    // console.log(dayOne);

    // Get successive dates
    const dayTwo = new Date();
    dayTwo.setDate(dayTwo.getDate() + 2);
    // console.log(dayTwo);

    const dayThree = new Date();
    dayThree.setDate(dayThree.getDate() + 3);
    // console.log(dayThree);

    const dayFour = new Date();
    dayFour.setDate(dayFour.getDate() + 4);
    // console.log(dayFour);

    const dayFive = new Date();
    dayFive.setDate(dayFive.getDate() + 5);
    // console.log(dayFive);

    const daySix = new Date();
    daySix.setDate(daySix.getDate() + 6);
    // console.log(daySix);

    // Get dates in correct formats and update state properties accordingly
    const fullDateOne = this.props.getFullDate(dayOne);
    const fullDateTwo = this.props.getFullDate(dayTwo);
    const fullDateThree = this.props.getFullDate(dayThree);
    const fullDateFour = this.props.getFullDate(dayFour);
    const fullDateFive = this.props.getFullDate(dayFive);
    const fullDateSix = this.props.getFullDate(daySix);

    // Set state
    this.setState({ fullDateOne: fullDateOne });
    this.setState({ fullDateTwo: fullDateTwo });
    this.setState({ fullDateThree: fullDateThree });
    this.setState({ fullDateFour: fullDateFour });
    this.setState({ fullDateFive: fullDateFive });
    this.setState({ fullDateSix: fullDateSix });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="container mt-5">
          <div className="grid-container">
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateOne}</h1>
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
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateTwo}</h1>
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
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateThree}</h1>
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
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateFour}</h1>
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
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateFive}</h1>
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
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateSix}</h1>
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
