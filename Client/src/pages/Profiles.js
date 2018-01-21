import React from 'react'

import MusicianProfile from '../components/MusicianProfile'


class Profiles extends React.Component {

  paramsId =  this.props.match.params.id
  // <div>Your on Profiles the id is {this.paramsId}</div>

  render (){
   return(
    <div>

      <MusicianProfile
        _id = {this.paramsId}
        data = {this.props.demo}
        />

    </div>
   )
  }
}

export default Profiles;
