import React from 'react'
import {Image,Transformation} from 'cloudinary-react';

import Dropzone from 'react-dropzone';
import request from 'superagent';


const FormMusicianProfile = (props) => {
// for file upload example https://codepen.io/hartzis/pen/VvNGZP?editors=0110
const styling=props.errors

  return(
    <div className="form-inputs">
      <label>image Upload:
        {/*<input type="file" name="fileUpload" id=""/>*/}
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={props.handleImageUpload}>
          <p className="drop-message"style={{textAlign:"center", padding:"16px",paddingTop:"25%"}}>Drop an image or click to select a file to upload... it will take a few seconds to appear!</p>
        </Dropzone>
      </label>
      <br/>
      <label>Name:
        <input
          style = {styling.name}
          name="name"
          type="text"
          className="profile"
          onChange={props.handleChange}/>
      </label>
      <br/>
      <label>Bio:
        <textarea
          style = {styling.bio}
          placeholder="Write something here"
          name="bio"
          rows="10" cols="45"
          className="profile"
          onChange={props.handleChange}>
        </textarea>
      </label>
      <br/>
    </div>
  )
}

export default FormMusicianProfile
