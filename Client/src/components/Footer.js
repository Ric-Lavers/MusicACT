import React, { Component } from 'react';
import classes from './Footer.css';

const apra = require('../images/footer/logo-apra.png');
const canbragov = require('../images/footer/cbrcanbra.jpg');
const nswgov = require('../images/footer/australian-government.png');
const actgov = require('../images/footer/actgov.png');

const Footer = () => {
  return (
    <div>
      <div classes="footer">
        <nav>
          <ul>
            <a href="http://apraamcos.com.au/">
              <img className="footer-img" src="http://www.musicnsw.com/wp-content/themes/musicnsw/images/logo-apra.png" />
            </a>
            <a href="https://canberra.com.au/">
              <img className="footer-img" src={canbragov} />
            </a>
            <a href="https://www.australia.gov.au/">
              <img className="footer-img" src={nswgov} />
            </a>
            <a href="https://www.act.gov.au/">
              <img className="footer-img" src={actgov} />
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
