import React from 'react';
import './forecast.css';
import { apiKey } from '../api/apiKey';

class WeeklyForecast extends React.Component {
  state = {
    fullDateOne: '',
    minTempOne: '',
    maxTempOne: '',
    iconOne: '',
    fullDateTwo: '',
    minTempTwo: '',
    maxTempTwo: '',
    iconTwo: '',
    fullDateThree: '',
    minTempThree: '',
    maxTempThree: '',
    iconThree: '',
    fullDateFour: '',
    minTempFour: '',
    maxTempFour: '',
    iconFour: '',
    fullDateFive: '',
    minTempFive: '',
    maxTempFive: '',
    iconFive: '',
    fullDateSix: '',
    minTempSix: '',
    maxTempSix: '',
    iconSix: ''
  };

  componentDidMount() {
    // Fetch API Data here (Maybe move this method to App Component and pass as props)
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Valletta,mt&appid=${apiKey}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Update State with Min Max Temp on day
        // Temp calculated at 12:00pm for all days except for Day One
        // Day One
        this.setState({
          minTempOne: (data.list[1].main.temp_min - 273.15).toFixed(2)
        });
        this.setState({
          maxTempOne: (data.list[1].main.temp_max - 273.15).toFixed(2)
        });
        this.setState({
          iconOne: `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`
        });
        // Day Two
        this.setState({
          minTempTwo: (data.list[5].main.temp_min - 273.15).toFixed(2)
        });
        this.setState({
          maxTempTwo: (data.list[5].main.temp_max - 273.15).toFixed(2)
        });
        this.setState({
          iconTwo: `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`
        });
        // Day Three
        this.setState({
          minTempThree: (data.list[13].main.temp_min - 273.15).toFixed(2)
        });
        this.setState({
          maxTempThree: (data.list[13].main.temp_max - 273.15).toFixed(2)
        });
        this.setState({
          iconThree: `http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`
        });
        // Day Four
        this.setState({
          minTempFour: (data.list[21].main.temp_min - 273.15).toFixed(2)
        });
        this.setState({
          maxTempFour: (data.list[21].main.temp_max - 273.15).toFixed(2)
        });
        this.setState({
          iconFour: `http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`
        });
        // Day Five
        this.setState({
          minTempFive: (data.list[29].main.temp_min - 273.15).toFixed(2)
        });
        this.setState({
          maxTempFive: (data.list[29].main.temp_max - 273.15).toFixed(2)
        });
        this.setState({
          iconFive: `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`
        });
        // Day Six
        this.setState({
          minTempSix: (data.list[37].main.temp_min - 273.15).toFixed(2)
        });
        this.setState({
          maxTempSix: (data.list[37].main.temp_max - 273.15).toFixed(2)
        });
        this.setState({
          iconSix: `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`
        });
      })
      .catch(console.log);

    // Get dates
    const dayOne = new Date();
    // Get tomorrow's date
    dayOne.setDate(dayOne.getDate());
    // console.log(dayOne);

    // Get successive dates
    const dayTwo = new Date();
    dayTwo.setDate(dayTwo.getDate() + 1);
    // console.log(dayTwo);

    const dayThree = new Date();
    dayThree.setDate(dayThree.getDate() + 2);
    // console.log(dayThree);

    const dayFour = new Date();
    dayFour.setDate(dayFour.getDate() + 3);
    // console.log(dayFour);

    const dayFive = new Date();
    dayFive.setDate(dayFive.getDate() + 4);
    // console.log(dayFive);

    const daySix = new Date();
    daySix.setDate(daySix.getDate() + 5);
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
                  <img src={this.state.iconOne} alt="icon-img"></img>
                  {/* <i className="fas fa-sun sun"></i> */}
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: {this.state.minTempOne}°С</p>
                <p>Max: {this.state.maxTempOne}°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateTwo}</h1>
                </div>
                <div className="weather-card-icon">
                  <img src={this.state.iconTwo} alt="icon-img"></img>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: {this.state.minTempTwo}°С</p>
                <p>Max: {this.state.maxTempTwo}°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateThree}</h1>
                </div>
                <div className="weather-card-icon">
                  <img src={this.state.iconThree} alt="icon-img"></img>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: {this.state.minTempThree}°С</p>
                <p>Max: {this.state.maxTempThree}°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateFour}</h1>
                </div>
                <div className="weather-card-icon">
                  <img src={this.state.iconFour} alt="icon-img"></img>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: {this.state.minTempFour}°С</p>
                <p>Max: {this.state.maxTempFour}°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateFive}</h1>
                </div>
                <div className="weather-card-icon">
                  <img src={this.state.iconFive} alt="icon-img"></img>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: {this.state.minTempFive}°С</p>
                <p>Max: {this.state.maxTempFive}°С</p>
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-grid-container">
                <div className="weather-card-header">
                  <h1 style={{ color: '#fff' }}>{this.state.fullDateSix}</h1>
                </div>
                <div className="weather-card-icon">
                  <img src={this.state.iconSix} alt="icon-img"></img>
                </div>
              </div>
              <div className="temperature-container">
                <p>Min: {this.state.minTempSix}°С</p>
                <p>Max: {this.state.maxTempSix}°С</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeeklyForecast;
