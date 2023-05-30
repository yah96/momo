import React from 'react';
import './css/menu.css';
import hotImage  from '../images/coffee.png';
import specialtiesImage  from '../images/coffee-bag.png';

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <h1 className="menu-title">Menu</h1>

          <div className="picture-left">
            <img src={hotImage} alt="Hot" className="menu-image" />
            <h2 className="section-title">HOT</h2>
          </div>
          <ul>
            <li>ESPRESSO <span className="price">$2.50</span></li>
            <li>DOUBLE ESPRESSO <span className="price">$3.00</span></li>
            <li>BREWED <span className="price">$2.50/$3.00</span></li>
            <li>AMERICANO <span className="price">$4.00/$4.50</span></li>
            <li>LATTE <span className="price">$4.50/$5.00</span></li>
            <li>CAPPUCCINO <span className="price">$4.50/$5.00</span></li>
            <li>RED EYE <span className="price">$4.50/$5.00</span></li>
          </ul>


      <h2 className="section-title">HOT TEA</h2>
      <ul>
        <li>STRAWBERRY <span className="price">$3.50/$4.00</span></li>
        <li>ROSE CONGOU <span className="price">$3.50/$4.00</span></li>
        <li>JASMINE ROSE <span className="price">$3.50/$4.00</span></li>
        <li>YERBA MATE <span className="price">$3.50/$4.00</span></li>
        <li>CHAI <span className="price">$3.50/$4.00</span></li>
      </ul>

      <h2 className="section-title">ICED</h2>
      <ul>
        <li>ICED COFFEE <span className="price">$2.50/$3.00</span></li>
        <li>ICED AMERICANO <span className="price">$4.00/$4.50</span></li>
        <li>LATTE <span className="price">$4.50/$5.00</span></li>
        <li>COLD BREW <span className="price">$4.50/$5.00</span></li>
        <li>JAPANESE COLD BREW <span className="price">$4.75/$5.25</span></li>
        <li>CARAMEL LATTE <span className="price">$5.00/$5.50</span></li>
      </ul>

      <h2 className="section-title">FOOD</h2>
      <ul>
        <li>COOKIE <span className="price">$2.50</span></li>
        <li>PARFAIT <span className="price">$3.50</span></li>
        <li>CROISSANT <span className="price">$3.00</span></li>
        <li>MUFFIN <span className="price">$3.00</span></li>
        <li>VERY BERRY BAGEL <span className="price">$4.00</span></li>
        <li>EVERYTHING BAGEL <span className="price">$4.50</span></li>
        <li>POMEGRANATE SALAD <span className="price">$5.00</span></li>
      </ul>

      <div className="picture-right">
            <img src={specialtiesImage} alt="Specialties" className="menu-image" />
            <h2 className="section-title">SPECIALTIES</h2>
      </div>
      <ul>
        <li>ICED DIRTY MATCHA LATTE <span className="price">$5.00/$5.50</span></li>
        <li>HONEY LAVENDER LATTE <span className="price">$5.00/$5.50</span></li>
        <li>HONEY ROSE LATTE <span className="price">$5.00/$5.50</span></li>
        <li>COLD BREW W/VANILLA COLD FOAM <span className="price">$5.00/$5.50</span></li>
        <li>FRESA AGUA FRESCA W/ MATCHA COLD FOAM <span className="price">$5.00/$5.50</span></li>
      </ul>

      <h2 className="section-title">OTHERS</h2>
      <ul>
        <li>SODA <span className="price">$2.50</span></li>
        <li>MINERAL WATER <span className="price">$2.50</span></li>
        <li>MATCHA LATTE <span className="price">$4.50/$5.00</span></li>
        <li>CHAI LATTE <span className="price">$4.00/$4.50</span></li>
        <li>AGUA FRESCA <span className="price">$3.50/$4.00</span></li>
        <li>Fresco, Linmonada, Pepino, Mango</li>
      </ul>

      <h2 className="section-title">ADD ONS</h2>
      <ul>
        <li>FLAVOR: Caramel, Lavender, Mocha, Vanilla <span className="price">$0.50</span></li>
        <li>MILK: Oat, Soy, Almond <span className="price">$0.50</span></li>
      </ul>
      </div>
    </section>
  );
};

export default Menu;
