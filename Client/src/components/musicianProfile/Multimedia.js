import React from 'react'
import ReactPlayer from 'react-player'

const Multimedia = (props) => {
  const multimediaLinks = [];
  Object.values(props.multimedia).map( address => {
    if (address.match('soundcloud')) {
      multimediaLinks.push([address, 150]);
    } else if (address.match('youtube')) {
      //640x360 standard
      multimediaLinks.push([address, 450]);
    } else if (address.match('vimeo')) {
      multimediaLinks.push([address, 400]);
    }
  });
  return (
    <div>
    {props.multimedia && multimediaLinks.map(address => (
      <ReactPlayer
        className="profile-react-player"
        url={address[0]}
        controls
        width="100%"
        height={address[1]}
      />
  ))}
    </div>
  )
}

export default Multimedia
