import React from 'react'
import MusicianForm from './MusicianForm'
import MusicianProfile from './MusicianProfile'

import request from 'superagent';

require('../style/forms.css')


const CLOUDINARY_UPLOAD_PRESET = 'profile_image';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/aeonknight/upload';

class ProfileCreate extends React.Component {

  constructor(props) {
    super(props);
    if (window.localStorage.getItem("newProfile")) {
      let profile = JSON.parse( window.localStorage.getItem("newProfile")
    )
      this.state = {
        profile:profile,
      }
    }else{
      this.state = {
        profile:{
          "type":"DJs",
          "_id":"123",
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


  handleChange = (event) => {
    const group = event.target.className
    const name =  event.target.name
    const value = event.target.value
    console.log(event.target);
    const profile = this.state.profile
    profile[group][name] = value
    this.setState({profile})

    window.localStorage.setItem("newProfile", JSON.stringify(profile) )

    console.log(`%c profile[${group}][${name}] = ${value}`, 'color:green');
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
          />

        <MusicianProfile
          _id = "123"
          data = {this.state.profile}
          />

      </div>
    )
  }
}

export default ProfileCreate;
