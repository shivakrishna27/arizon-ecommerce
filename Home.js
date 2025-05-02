import React from 'react';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Arizon</h1>
      <p className="text-lg mb-4">Your favorite e-commerce destination</p>
      <Logo width="250px" />
    </div>
  );
};

export default Home;
