import React from 'react';

import ContactInfo from './musicianProfile/ContactInfo'
import ImageMain from './musicianProfile/ImageMain'
import ProfileTags from './musicianProfile/ProfileTags'
import SocialIcons from './musicianProfile/SocialIcons'
import Bio from './musicianProfile/Bio'
import ReactPlayer from 'react-player';
import Multimedia from './musicianProfile/Multimedia'
import '../profile.css';
import { TweenMax, Power2, TimelineLite, SlowMo, TimelineMax } from 'gsap';

import _ from 'lodash';
require('colorize');

const demo = require('../demoData/demo.json');
const readMore = require('../images/readmore.svg');

const youtubeIcon = require('../images/001-youtube.svg');
const twitterIcon = require('../images/008-twitter.svg');
const spotifyIcon = require('../images/012-spotify.svg');
const soundcloudIcon = require('../images/013-soundcloud.svg');
const facebookIcon = require('../images/036-facebook.svg');
const instagramIcon = require('../images/029-instagram.svg');
const websiteIcon = require('../images/website.png');

const socialIcons = [
  youtubeIcon,
  twitterIcon,
  spotifyIcon,
  soundcloudIcon,
  facebookIcon,
  instagramIcon,
  websiteIcon
];

function searchStringInArray(str, strArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) return j;
  }
  return -1;
}

class MusicainProfile extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.data) {
      let demoP = props.data;
      console.log('from props');
      this.state = {
        profile: demoP,
        bioOverflow: null,
      };
    } else {
      let demoP = demo.data.musicians.find(obj => obj._id === props._id);
      console.log('demoJSON');
      this.state = {
        profile: demoP,
        bioOverflow: null,
      };
    }
  }

  componentWillMount() {
    let myProfile = this.state.profile;
    if (window.localStorage.getItem('profile') === null) {
      window.localStorage.setItem('profile', JSON.stringify(myProfile));
    }
  }

  handleContact = () => {
    console.log('handleContact');
    this.setState({
      viewContacts: [this.state.viewContacts[1], this.state.viewContacts[0]]
    });
  };

  render() {
    const { type } = this.state.profile;
    const {contactDetails} = this.state.profile;
    const { imageSrc, name, bio } = this.state.profile.profile;
    const { multimedia } = this.state.profile;
    const {
      facebook,
      instagram,
      twitter,
      soundcloud,
      youtube,
      spotify,
      website
    } = this.state.profile.socialMedia;

// _______________
    const { socialMedia } = this.state.profile;
    const socialIconsLinks = _.values(socialMedia);
    const socialIconsNames = _.keys(socialMedia);
    socialIcons;
    const icons = [];

    if (!!socialIconsLinks && socialIconsLinks.length != 0) {
      socialIconsLinks.forEach((address, index) => {
        if (socialIconsNames[index] !== 'website') {
          let src =
            socialIcons[
              searchStringInArray(socialIconsNames[index], socialIcons)
            ];
          icons.push(
            <a key={index} href={address} target="_blank">
              {' '}
              <img
                key={`img_${index}`}
                className="profile-social"
                src={src}
                alt=""
              />
            </a>
          );
        } else {
          icons.push(
            <a key={index} href={address} target="_blank">
              {' '}
              <img
                key={`img_${index}`}
                className="profile-social"
                src={websiteIcon}
                alt=""
              />
            </a>
          );
        }
      });
    }
// _______________

    return (
      <div style={{ marginLeft: 24 }} className="MusicainProfile">
        <div className="profile-container">
          <div className="profile-left">

            <ImageMain imageSrc= {imageSrc} />

            <div className="profile-social-icons">
              {!!icons &&
                icons.length != 0 &&
                icons.map(i => {
                  return i;
                })}
            </div>

            <ContactInfo contactDetails = {contactDetails} />
          </div>{ /*profile-left*/ }
          <div className="profile-body">
              <Bio
                name = {name}
                bio  = {bio}
                />
              <Multimedia
                multimedia = {multimedia}
                />
              <div className="profile-gallery" />
          </div>{ /*profile-body*/ }
          <div className="profile-right">
            <ProfileTags />
          </div> { /*profile-right*/ }
        </div>
      </div>
    );
  }
}

export default MusicainProfile;
