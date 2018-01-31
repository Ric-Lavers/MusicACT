import React from "react";
import ImageSlide from "./ImageSlide";
// import { Timeline } from 'react-twitter-widgets';

import { UncontrolledCarousel } from "reactstrap";
import { Link } from "react-router-dom";
import SponsorReel from "./home/SponsorReel";
import Image1 from "../images/blocks/1.png";
import Image2 from "../images/blocks/2.png";
import Directory from "../images/blocks/3.png";
import Image4 from "../images/blocks/4.png";
import Image5 from "../images/blocks/5.png";
import Image6 from "../images/blocks/6.png";
import Image7 from "../images/blocks/7.png";
import Image8 from "../images/blocks/8.png";

require("../style/home.css");
require("../style/homehome.css");


const Home = () => {
  return (
    <div>

      <ImageSlide />
      <h1> this is Home Page</h1>
      <SponsorReel />

      <div class="wrapper">
        <div class="splash">
          <div class="header-text">
            <h1>Music For Everyone.</h1>
            <h3>Enlivening The Capitals </h3>

          </div>
        </div>

        <div class="grid">
          <div>
            <Link to={`/directory`}>
              <img src={Image8} alt="Sample photo" />
            </Link>
          </div>
          <div>
            <Link to={`/directory`}>
              <img src={Image2} alt="Sample photo" />
            </Link>
          </div>
          <div>
            <Link to={`/directory`}>
              <img src={Directory} alt="Sample photo" />
            </Link>
          </div>
          <div>
            <Link to={`/news`}>
              <img src={Image4} alt="Sample photo" />
            </Link>
          </div>
          <div>
            <Link to={`/directory`}>
              <img src={Image5} alt="Sample photo" />
            </Link>
          </div>
          <div>
            <Link to={`/directory`}>
              <img src={Image6} alt="Sample photo" />
            </Link>
          </div>
          <div>
            <Link to={`/directory`}>
              <img src={Image7} alt="Sample photo" />
            </Link>
          </div>
          <SponsorReel />

        </div>
      </div>
    </div>
  );
};

export default Home;
