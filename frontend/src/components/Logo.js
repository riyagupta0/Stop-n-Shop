import React from 'react';

const Logo = () => {
  return (
    <div>
      <img 
        src={require('../assest/logo-no-background.png')} 
        alt="Logo" 
        style={{ width: '80px', height: '55px' }} 
      />
    </div>
  );
}

export default Logo;

