import React from 'react';
import Header from './components/Header';
import DailyForecast from './components/DailyForecast';
import WeeklyForecast from './components/WeeklyForecast';

class App extends React.Component {
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
        <DailyForecast getFullDate={this.getFullDate} />
        <WeeklyForecast getFullDate={this.getFullDate} />
      </div>
    );
  }
}

export default App;
