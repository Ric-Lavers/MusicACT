import React from 'react'
import MusicianForm from './MusicianForm'


class ProfileCreate extends React.Component {



  render (){
    return(
      <div className='ProfileCreate'>
        Profile Create
        <MusicianForm handleImageUpload={this.handleImageUpload}/>
      </div>
    )
  }
}

export default ProfileCreate;
