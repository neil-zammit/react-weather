import React from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import DailyForecast from './components/DailyForecast';
import WeeklyForecast from './components/WeeklyForecast';

class App extends React.Component {
  // Create ref to the DailyForecast component
  constructor(props) {
    super(props);
    this.DailyForecastElement = React.createRef();
  }

  state = {
    // Deafault values for state set to 'Valletta'
    cityInput: 'Valletta',
    city: 'Valletta'
  };

  onHandleChange = e => {
    // Update state with form input value
    console.log(e.target.value);
    this.setState({ cityInput: e.target.value });
    console.log(`State: ${this.state.city}`);
  };

  // Async Function to setState
  asyncGetWeather() {
    return new Promise(resolve => {
      // setState of city state property according to user input and resolve promise
      this.setState({ city: this.state.cityInput });
      resolve();
    });
  }

  onFormSubmit = e => {
    // Prevent form submit
    e.preventDefault();
    // Call async function which sets state of city according to user input
    this.asyncGetWeather().then(
      // Add a slight delay before calling function which makes API call and rerenders,
      // as if not this will be carried out before state is updated and component will not
      // render with the correct data.
      setTimeout(() => {
        this.DailyForecastElement.current.getWeather();
      }, 0.1)
    );
  };

  // Get full date function
  getFullDate = date => {
    // Get day name
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    // Get day number
    const dayNum = date.getDate();
    // Get month
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    // Get month and year
    // const monthYear = date.toLocaleDateString('en-US', {
    //   month: 'long',
    //   year: 'numeric'
    // });
    // Full date
    const fullDate = `${dayName} ${dayNum} ${month}`;
    console.log(fullDate);
    return fullDate;
  };

  render() {
    return (
      <div>
        <Header />
        <Searchbar
          cityInput={this.state.cityInput}
          onHandleChange={this.onHandleChange}
          onFormSubmit={this.onFormSubmit}
        />
        <DailyForecast
          ref={this.DailyForecastElement}
          city={this.state.city}
          getFullDate={this.getFullDate}
        />
        <WeeklyForecast getFullDate={this.getFullDate} />
      </div>
    );
  }
}

export default App;
