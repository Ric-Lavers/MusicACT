import React from 'react';

import ContactInfo from './musicianProfile/ContactInfo'
import ImageMain from './musicianProfile/ImageMain'
import ProfileTags from './musicianProfile/ProfileTags'
import SocialIconsNew from './musicianProfile/SocialIcons'
import Bio from './musicianProfile/Bio'
import Multimedia from './musicianProfile/Multimedia'

import '../profile.css';
import SocialIcons from './show_profile/SocialIcons'

const demo = require('../demoData/demo.json');

class MusicainProfile extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.data) {
      let listing = props.data
      this.state = { profile: listing }
    } else {
      let demoP = demo.data.musicians.find(
        obj => obj._id === props._id
      );
      this.state = { profile: demoP }
    }
  }

  componentWillMount() {
    let myProfile = this.state.profile;
    if (window.localStorage.getItem('profile') === null) {
      window.localStorage.setItem('profile', JSON.stringify(myProfile));
    }
  }

  render() {
    const { type } = this.state.profile || "";
    const {contactDetails} = this.state.profile;
    const { imageSrc, name, bio } = this.state.profile.profile;
    const { socialMediaIcons } = this.state.profile;
    const { multimedia } = this.state.profile;

    return (
      <div style={{ marginLeft: 24 }} className="MusicainProfile">
        <div className="profile-container">
          <div className="profile-left">
            <ImageMain imageSrc= {imageSrc} />
            <SocialIconsNew socialMedia = {socialMediaIcons} />
            <ContactInfo contactDetails = {contactDetails} />
          </div>{ /*profile-left*/ }
          <div className="profile-body">
            <Bio
              name = {name}
              bio  = {bio}
              />
            <Multimedia  multimedia = {multimedia}/>
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
