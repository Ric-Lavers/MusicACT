import React from 'react';
import MusicianForm from './MusicianForm';
import MusicianProfile from './MusicianProfile';

import validator from 'validator';
import request from 'superagent';
import urlExists from 'url-exists';

import _ from 'lodash';
import validate from '../library/validate';
import * as auth from '../api/profile';
import jwt_decode from 'jwt-decode';

require('../style/forms.css');

const tick = require('../images/tick.svg')
const cross = require('../images/cross.svg')

const CLOUDINARY_UPLOAD_PRESET = 'profile_image';
const CLOUDINARY_UPLOAD_URL =
  'https://api.cloudinary.com/v1_1/aeonknight/upload';

const status = ['NONE', 'PENDING', 'VALID'];
const errors = {
  email: 0,
  phoneNumber: 0,
  pointOfContact: 0,
  name: 0,
  bio: 0,
  soundcloud: 0,
  spotify: 0,
  instagram: 0,
  facebook: 0,
  youtube: 0,
  website: 0,
  soundcloudLink: 0,
  youtubeLink: 0,
  vimeoLink: 0
};

class ProfileCreate extends React.Component {
  constructor(props) {
    super(props);
    // console.table(this.props);
    //checks for a profile in passed via props
    if (this.props.myProfile != null) {
console.debug("this.props.myProfile != null");
      this.state = {
        errors,
        profile: this.props.myProfile
      };
    //checks for a unsubmitted profile in the localStorage
    }else if ( window.localStorage.getItem('newProfile') ) {
console.debug("unfinished new profile");
     let profile = JSON.parse(window.localStorage.getItem('newProfile'));
     this.state = {
       errors,
       profile: profile
     };
  }
    //New user sets up a blank profile
    else if(this.props.myProfile === null){
      console.debug("New User");
      this.state = {
        errors,
        profile: {
          type: 'DJs',
          _id: '1234',
          contactDetails: {},
          profile: {},
          socialMediaIcons: {},
          multimedia: {}
        }
      }
    }  //sets profile to "none", check for login token and sends fetch to DB
    else{
      console.debug("Edit profile");
      this.state = {
        errors,
        profile: "edit"
      }
    }
  }
  componentDidMount() {
    if (this.state.profile ===  "edit") {
      const getToken = auth.token();

      if (getToken !== null) {
        const decodeToken = jwt_decode(getToken);
        const tokenId = decodeToken.sub;
        console.log(decodeToken,tokenId);
        auth.fetchProfile(tokenId).then(res =>{
          let profile = {}
          profile._id = tokenId
          profile.multimedia = res.profile.profile.multimedia[0]
          profile.socialMediaIcons = res.profile.profile.socialMediaIcons[0]
          profile.profile = res.profile.profile.profile[0]
          profile.contactDetails = res.profile.profile.contactDetails[0]
          profile.type = decodeToken.type // this is just to make it work for musician!!
          this.setState({
            profile: profile
          })
        })
        .catch(error => {
          console.log(error);
        })
      }else {
        console.log('No token');
      }
    }

    var getToken = localStorage.getItem('token')
    if (getToken !== null) {
      var decodeToken = jwt_decode(getToken);
      var tokenId = decodeToken.sub;
      let profile = this.state.profile
      profile._id = tokenId
      this.setState({profile})
      console.log("got token");
    } else {
      console.log('No token');
    }

  }
  setProfileId = (_id) => {
    let profile = this.state.profile
    profile._id = _id
    this.setState({profile})
  }

  handleChange = event => {
    const group = event.target.className;
    const name = event.target.name;
    let value = event.target.value;

    const profile = this.state.profile;
    console.log(name);

    const errors = validate(name, value, this.state.errors);
    this.setState({ errors });
    if (errors[name] === 2) {
      // console.log("group",group)
      // console.log(name, errors[name]);
      profile[group][name] = value;
      this.setState({ profile });
    }

    window.localStorage.setItem('newProfile', JSON.stringify(profile));
  };

  handleImageUpload = file => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        const profile = this.state.profile;
        profile.profile.imageSrc = response.body.secure_url;

        this.setState( {profile: profile} );
      }
    });
  };

  onImageDrop = files => {
    const profile = this.state.profile;
    profile.profile.imageSrcBuild = files[0];

    this.setState( {profile: profile} );

    this.handleImageUpload(files[0]);
  };

  handleSubmit = event => {
    event.preventDefault();
    const profile = { ...this.state.profile };
    auth.createProfile(profile)
      .then(res => {
        console.log('Done', res);
        setInterval( () => { this.setState( {success:"sucess"} ) }, 1000 )

      })
      .catch(err => {
        console.log('error', err);
        setInterval( () => { this.setState( {success:"failure"} ) }, 1000 )
      });
  };

  handleSocialDelete = (event) => {
    event.preventDefault();
    const target = event.target.name;
    const profile = this.state.profile;
    delete profile.socialMediaIcons[target]

    this.setState( {profile: profile} );
    window.localStorage.setItem('newProfile', JSON.stringify(profile));
  }

  render() {
    if(this.state.success){
     const tick =  this.state.success === "sucess"? <img src={tick} alt=""/>: <img src={cross} alt=""/>
    }
    return (this.state.profile === "none" ?
      (null)
    :
      <div className="ProfileCreate">
        <MusicianForm
          handleId ={this.setProfileId}
          data = {this.state.profile}
          className="MusicianForm"
          handleChange={this.handleChange}
          handleImageUpload={this.onImageDrop}
          handleSubmit={this.handleSubmit}
          handleSocialDelete ={this.handleSocialDelete}
          errors={this.state.errors}
        />
        <MusicianProfile
          _id="1234"
          data={this.state.profile}
          type={this.state.profile.type} />
    </div>
    );
  }
}

export default ProfileCreate;
