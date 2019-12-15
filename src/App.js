import React from 'react';
import Header from './components/Header';
import DailyForecast from './components/DailyForecast';
import WeeklyForecast from './components/WeeklyForecast';

const App = () => {
  return (
    <div>
      <Header />
      <DailyForecast />
      <WeeklyForecast />
    </div>
  );
};

export default App;
