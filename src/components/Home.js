import React from 'react';
import coffeeShopImage from '../images/logo.jpg';
import './css/home.css';
import CoffeeMachine from './CoffeeMachine';
const Home = () => {
  return (

    <section id="home" className="home-section">
      <div className="home-content">
        <img src={coffeeShopImage} alt="Coffee Shop" className="coffee-shop-image" />
        <div className="welcome-message">
          <h1>Welcome to MoMo's Coffee</h1>
          <p>Experience the finest coffee in town!</p>
        </div>
      </div>
    <CoffeeMachine/>
    </section>
  );
};

export default Home;
