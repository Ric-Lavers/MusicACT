import React from 'react'
import _ from 'lodash'

const youtubeIcon = require('../../images/001-youtube.svg');
const twitterIcon = require('../../images/008-twitter.svg');
const spotifyIcon = require('../../images/012-spotify.svg');
const soundcloudIcon = require('../../images/013-soundcloud.svg');
const facebookIcon = require('../../images/036-facebook.svg');
const instagramIcon = require('../../images/029-instagram.svg');
const websiteIcon = require('../../images/website.png');

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

const SocialIcons = (props) => {

  const  socialMediaIcons = props.socialMediaIcons;
  console.log(socialIcons);
  delete socialMediaIcons._id
  delete socialMediaIcons.user

  const socialIconsLinks = _.values(socialMediaIcons);
  const socialIconsNames = _.keys(socialMediaIcons);
  //
  const icons = [];

  console.log("%c |_____|","font-size:1.3em;color:purple",socialMediaIcons);

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


  return (
    <div>
      {icons.map( (j)=>(
        j)
      ) }
    </div>
  )
}

export default SocialIcons
