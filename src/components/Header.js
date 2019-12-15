import React from 'react';

const Header = () => {
  return (
    <div>
      <h3 style={headerStyle}>Weekly Weather Forecast</h3>
    </div>
  );
};

// Style
const headerStyle = {
  backgroundColor: '#2FA4E7',
  color: '#fff',
  padding: '1rem'
};

export default Header;
