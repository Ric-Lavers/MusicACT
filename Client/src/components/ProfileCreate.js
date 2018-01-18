import React from 'react'
import MusicianForm from './MusicianForm'
import MusicianProfile from './MusicianProfile'

require('../style/forms.css')

class ProfileCreate extends React.Component {

  state = {
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
        "bio": "",
        "socialMedia": {
          "facebook": "",

          "twitter": "",
          "website": ""
        },
        "multimedia":{
          "soundcloudLink":"",
          "youtubeLink":""
        }
      }
    }
  }

  handleChange = () => {

  }

  render (){
    return(
      <div className='ProfileCreate'>

        <MusicianForm
          className="MusicianForm"
          onChange = {this.handleChange}
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
