import React from 'react'
import MusicianForm from './MusicianForm'
import MusicianProfile from './MusicianProfile'

import validator from 'validator';
import request from 'superagent';
import urlExists from 'url-exists'


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
  youtube:0,
  vimeo:0
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
      const errors = {}
      if(name === "email" && !validator.isEmail(value)){errors.email = "email is not valid"}
      if(name === "phoneNumber"&& value.length <8){errors.phoneNumber = "Phone number too short"}
      if(name === "phoneNumber"&& !validator.isNumeric(value.replace(/\s/g, ''))){errors.phoneNumber = "Phone number must be numbers"}
      // if(name === "pointOfContact" && )
      // if (!value.title) {errors.title = "title is required"}
      // if (!value.yearReleased) {errors.title = "year released is required"}
      // if (!(value.title || value.yearReleased)) errors.base = 'Please fill out the form'
      // //or
      // if (value && isAlphanumeric(value.title)) = "invalid input"
      return errors
    }

  handleChange = (event) => {
    const group = event.target.className
    const name =  event.target.name
    let value = event.target.value
    const profile = this.state.profile
    profile[group][name] = value

    const errors = this.validate(name, value)
    this.setState({ errors })
    if (Object.keys(errors).length > 0 ) {return}

    this.setState({profile})
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
