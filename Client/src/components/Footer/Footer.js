import React, { Component } from 'react';
import classes from "./Footer.css"

const apra = require("../../images/logo-apra.png");
const canbragov = require("../../images/cbrcanbra.jpg");
const nswgov = require("../../images/australian-government.png");
const actgov = require("../../images/actgov.png");

const Footer = () => {
  return (
    <div>
      <div classes="footer">
            <nav>
                <ul>
                <a href="http://apraamcos.com.au/"><img src="http://www.musicnsw.com/wp-content/themes/musicnsw/images/logo-apra.png" /></a>
                <a href="https://canberra.com.au/"><img src={canbragov}/></a>
                <a href="https://www.australia.gov.au/"><img src={nswgov} /></a>
                <a href="https://www.act.gov.au/"><img src={actgov} /></a>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Footer;
