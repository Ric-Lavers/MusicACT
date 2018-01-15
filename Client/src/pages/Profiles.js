import React from 'react'

import MusicianProfile from '../components/MusicianProfile'

const demo = require('../demoData/demo.json');


class Profiles extends React.Component {

  paramsId =  this.props.match.params.id

  render (){
   return(
    <div>
      <div>Your on Profiles the id is {this.paramsId}</div>

      <MusicianProfile
        _id = {this.paramsId}
        data = {demo}
        />

    </div>
   )
  }
}

export default Profiles;
