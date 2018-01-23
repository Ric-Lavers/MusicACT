import React from 'react';
import ImageSlide from './ImageSlide';
// import { Timeline } from 'react-twitter-widgets';
import { UncontrolledCarousel } from 'reactstrap';
require('../style/home.css');
require('../style/homehome.css');


const Home = () => {
  return (
    <div>
      <ImageSlide />

      <div class="splash">
        <div class="header-text">
          <h1>Music For Everyone.</h1>
          <h3>Enlivening The Capitals </h3>
        </div>
      </div>

      <div class="wrapper">
        <div class="home-hero">

          <div class="feature">
            <h3>Music ACT</h3>
            <p>You can find all kinds of balloon related things here.</p>
          </div>

          <div class="special">
            <h3>Special Shapes</h3>
            <p>Why are some of them so scary looking?</p>
          </div>

          <div class="amazing">
            <h3>10 things you discover when taking a balloon ride.</h3>
            <p>Number 8 will AMAZE you.</p>
          </div>

          <div class="news">
            <h3>Angry people at balloon fiestas</h3>
            <p>Hot air balloons. A bit weather sensitive. </p>
          </div>

          <div class="photos">
            <h3>Ballooooooooon phoooootos</h3>
            <p>I have quite a few.</p>
          </div>

          <div class="cta">
            <p>Sign up for more information about balloons. </p>
            <a class="spam-button" href="/spam-machine">Sign me up!</a>
          </div>

        </div>
      </div>

    </div>


  )
};

export default Home;



