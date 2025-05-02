import React from 'react';
import logo from '../assets/logo.jpg'; 

const Logo = ({ width = "200px" }) => {
  return (
    <img
      src={"https://arizon.digital/wp-content/uploads/2024/11/New_Arizon_-Logo-01-scaled.jpg"}
      alt="Arizon digital logo"
      style={{ width }}
      className="mx-auto"
    />
  );
};

export default Logo;
