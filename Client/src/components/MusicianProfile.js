import React from 'react'
import ReactPlayer from 'react-player'

class MusicainProfile extends React.Component {
  state = {}


  render (){
    console.log(this.props);
    return(
      <ReactPlayer url="https://soundcloud.com/pixelord/boost"
        controls
        width="50%"
        height="150px" />
    )
}
}

export default MusicainProfile;
