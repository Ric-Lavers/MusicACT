import React, { Component } from 'react';
import SponsorReel from './home/SponsorReel'
require('../style/home.css');

const Home = () => {
  return (
    <div>
      <h1> this is Home Page</h1>
      <SponsorReel/>
    <div class="wrapper">
        <div class="top">
          <header class="hero">
            <h1>MusicACT</h1>
            <p>Enlivening the capital!</p>
          </header>
          <div class="cta cta1">
            <p class="price">Something</p>
            <p>Something here</p>
          </div>
          <div class="cta cta2">
            <p class="price">Something</p>
            <p>Something here</p>
          </div>

        </div>

        <section class="features">
          <div class="feature">
            <span class="icon">👋</span>
            <h3>BECOME A MEMBER</h3>
          </div>
          <div class="feature">
            <span class="icon">🎹</span>
            <h3>COOL LITTLE CAPITAL</h3>
          </div>
          <div class="feature">
            <span class="icon">🍷</span>
            <h3>MUSICACT ANNUAL MUSIC AWARDS 2017</h3>
          </div>
          <div class="feature">
            <span class="icon">🎵</span>
            <h3>WORKSHOPS</h3>
          </div>
        </section>

        <section class="about">
          <img src="images/queso-taco.png" alt="EarGasm" class="about__mockup"/>
          <div class="about__details">
            <h2>Lastest Blog Entry</h2>
            <p>This is amazing!!!!</p>
            <p>This is the one you have been waiting for</p>
            <button>Learn More →</button>
          </div>
        </section>


        <section class="gallery">
          <h2>Our Past Events</h2>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
          <img src="../assets/images/smiley.jpg" alt=""/>
        </section>
      </div>
    </div>
  );
};

export default Home;
