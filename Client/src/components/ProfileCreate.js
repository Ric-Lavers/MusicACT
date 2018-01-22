import React from 'react'
import MusicianForm from './MusicianForm'
import MusicianProfile from './MusicianProfile'

import validator from 'validator';
import request from 'superagent';
import urlExists from 'url-exists'

import _ from 'lodash'


require('../style/forms.css')


const CLOUDINARY_UPLOAD_PRESET = 'profile_image';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/aeonknight/upload';

const status = [
"NONE",
"PENDING",
"VALID"
]
const errors = {
  email:0,
  phoneNumber:0,
  pointOfContact:0,
  name:0,
  bio:0,
  soundcloud:0,
  spotify:0,
  instagram:0,
  facebook:0,
  youtube:0,
  website:0,
  soundcloudLink:0,
  youtubeLink:0,
  vimeoLink:0
}

class ProfileCreate extends React.Component {

  constructor(props) {
    super(props);
    if (window.localStorage.getItem("newProfile")) {
      let profile = JSON.parse( window.localStorage.getItem("newProfile")
    )
      this.state = {
        errors,
        profile:profile,
      }
    }else{
      this.state = {
        errors,
        profile:{
          "type":"DJs",
          "_id":"1234",
          "contactDetails": {
            "email": "",
            "phoneNumber": "",
            "pointOfContact": ""
          },
          "profile": {
            "imageSrc": "",
            "name": "",
            "bio": ""
          },
          "socialMedia": {

          },
          "multimedia":{
            "soundcloudLink":"",
            "youtubeLink":""
          }
        }
      }
    }
  }
  validate =(name,value) =>{
      const errors = this.state.errors
      if(value.length > 0) errors[name] = 1
      if(name === "email" && validator.isEmail(value)){errors.email = 2}
      if(name === "phoneNumber" &&
                  validator.isNumeric( value.replace(/\s/g, '') ) &&
                  value.length > 7  ) {errors.phoneNumber = 2}
      if(name === "pointOfContact" && validator.isAlpha(value)){errors.pointOfContact = 2}
      if(name === "name" && value.length >2 ){errors.name = 2}
      if(name === "bio" && value.length >2 ){errors.bio = 2}
      if(name === "soundcloud" && validator.contains(value,"soundcloud.com") ){errors.soundcloud = 2}
      if(name === "spotify" && validator.contains(value,"spotify.com") ){errors.spotify = 2}
      if(name === "instagram" && validator.contains(value,"instagram.com") ){errors.instagram = 2}
      if(name === "facebook" && validator.contains(value,"facebook.com") ){errors.facebook = 2}
      if(name === "youtube" && validator.contains(value,"youtube.com") ){errors.youtube = 2}
      if(name === "website" && validator.contains(value,"website.com") ){errors.website = 2}

      if(name === "soundcloudLink" && validator.contains(value,"soundcloud.com") ){errors.soundcloudLink = 2}

      if(name === "youtubeLink" && validator.contains(value,"youtube.com") ){errors.youtubeLink = 2}

      if(value.length === 0) errors[name] = 0
      return errors
    }


  handleChange = (event) => {
    const group = event.target.className
    const name =  event.target.name
    let value = event.target.value

    const profile = this.state.profile
    console.log(name);

    const errors = this.validate(name, value)
    this.setState( {errors} )
    // if (Object.keys(errors).length > 0 ) {return}
    //check if errors validation is 2 before adding to profile
    if(errors[name] === 2){
      console.log(name,errors[name])
      profile[group][name] = value
      this.setState( {profile} )
    }

    window.localStorage.setItem("newProfile", JSON.stringify(profile) )
  }

  handleImageUpload = (file)=>{
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        const profile = this.state.profile
        profile.profile.imageSrc = response.body.secure_url
        this.setState({
          profile: profile
        });
      }
    });
  }
  onImageDrop = (files) => {
    const profile = this.state.profile
    profile.profile.imageSrcBuild = files[0]
    this.setState({
      profile: profile
    });
    this.handleImageUpload(files[0]);
  }
  handleSubmit = (event) =>{
    console.log(event.target);
  }

  render (){
    return(
      <div className='ProfileCreate'>

        <MusicianForm
          className="MusicianForm"
          handleChange = {this.handleChange}
          handleImageUpload = {this.onImageDrop}
          handleSubmit = {this.handleSubmit}
          errors ={this.state.errors}
          />

        <MusicianProfile
          _id = "1234"
          data = {this.state.profile}
          />

      </div>
    )
  }
}

export default ProfileCreate;
