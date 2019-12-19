import React from 'react';

class Searchbar extends React.Component {
  render() {
    const { onFormSubmit, cityInput, onHandleChange } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>Enter your city's name to get the weather in your location</h3>

        <div className="container" style={{ width: '40%' }}>
          <form className="mt-4" onSubmit={onFormSubmit} autoComplete="off">
            <label style={{ fontSize: '1.1rem' }}>City</label>
            <input
              type="text"
              name="city"
              defaultValue={cityInput}
              onChange={onHandleChange}
              placeholder="Enter City Name Here"
              className="form-control"
            ></input>
            <button type="submit" className="btn btn-primary mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
