import React from 'react';
import './css/about.css'
import coffeeImage from '../images/morales.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img src={coffeeImage} alt="Coffee" className="about-image" />
        </div>
        <div className="about-content-container">
          <h2 className="about-title">Our Story</h2>
          <p className="about-content">
            After years of hard work, dedication, and a shared passion for coffee, the Morales twins, Aileen and Ailette,
            decided to turn their dreams into reality. Born and raised in the small town of Del Rio, they ventured off to college
            and pursued their individual careers, but deep down, they always knew they wanted to return home and create something
            meaningful for their community.
          </p>
          <p>
            Aileen, with a background in IT, and Ailette, a talented food scientist with a love for culinary arts, combined their
            skills and knowledge to establish MoMo's Coffee. They transformed a small, cozy space in the heart of Del Rio into a vibrant
            and welcoming coffee shop.
          </p>
          <p>
            With a focus on sourcing high-quality beans, crafting delicious brews, and delivering exceptional customer service, MoMo's
            Coffee hopes to quickly become a beloved gathering spot for locals and visitors alike. The twins' commitment to their craft
            and their community shines through in every cup served.
          </p>
          <p>
            Today, MoMo's Coffee stands as a testament to the Morales twins' determination, hard work, and their unwavering belief in
            the power of a good cup of coffee. They continue to fuel the community with their passion, providing a place where friends,
            family, and strangers can come together, create memories, and savor the simple joys in life.
          </p>
        </div>
      </div>
    </section>
  );
};


export default About;
