import React from 'react'
import MusicianForm from './MusicianForm'
import MusicianProfile from './MusicianProfile'

require('colorize')
require('../style/forms.css')

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
    const profile = this.state.profile
    profile[group][name] = value
    this.setState({profile})

    window.localStorage.setItem("newProfile", JSON.stringify(profile) )

    console.log(`%c profile[${group}][${name}] = ${value}`, 'color:green');
  }

  render (){
    return(
      <div className='ProfileCreate'>

        <MusicianForm
          className="MusicianForm"
          handleChange = {this.handleChange}
          />

        <MusicianProfile
          className="MusicianProfile"
          _id = "123"
          data = {this.state.profile}
          />

      </div>
    )
  }
}

export default ProfileCreate;
