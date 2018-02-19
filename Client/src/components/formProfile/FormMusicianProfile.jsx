import React from 'react'

import {Image,Transformation} from 'cloudinary-react';

import Dropzone from 'react-dropzone';
import request from 'superagent';


const FormMusicianProfile = (props) => {
// for file upload example https://codepen.io/hartzis/pen/VvNGZP?editors=0110
const styling=props.errors
const drop = props.open?"on":"off"

  return(
    <div className="form-inputs">

      <div className="drop-title">
        <label
          style={{justifyContent:"flex-start"}} for="bio"><h3>Bio</h3></label>
        <input
          onClick={props.drop}
          className="drop-state" id="bio" type="checkbox"/>
      </div>

      <div className= {`body ${drop}`}>
        <label>image Upload:
          {/*<input type="file" name="fileUpload" id=""/>*/}
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={props.handleImageUpload}>
            <p className="drop-message"style={{
                textAlign:"center", padding:"8px"}}
                >Drop an image or click to select a file to upload... it will take a few seconds to appear!</p>
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
    </div>
  )
}

export default FormMusicianProfile
