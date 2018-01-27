import React from 'react'

const ImageMain = (props) => {
  if (props.imageSrc) {
    return (
      <div className="profile-image">
        {props.imageSrc &&
          <img src={props.imageSrc} alt="profile image" />
        }
      </div>
    )
  }else{
    return(
      <div className="profile-image">
        
      </div>
    )
  }

}

export default ImageMain
