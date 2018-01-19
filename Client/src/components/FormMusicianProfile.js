import React from 'react'
import {Image,Transformation} from 'cloudinary-react';

import Dropzone from 'react-dropzone';
import request from 'superagent';


const FormMusicianProfile = (props) => {
// for file upload example https://codepen.io/hartzis/pen/VvNGZP?editors=0110

  return(
    <div>
      <label>image Upload:
        {/*<input type="file" name="fileUpload" id=""/>*/}
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={props.handleImageUpload}>
          <p>Drop an image or click to select a file to upload... it will take a few seconds to appear!</p>
        </Dropzone>
      </label>
      <br/>
      <label>Name:
        <input
          name="name"
          type="text"
          className="profile"
          onChange={props.handleChange}/>
      </label>
      <br/>
      <label>Bio:
        <textarea
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


//
// const FormMusicianProfile = (handleImageUpload) => {
//
//   const handleChange = (event) => {
//   }
//
//   return (
//     <form onChange={handleChange}>
//       <label>image Upload!:
//         <Image cloudName="aeonknight" publicId="store/cfcf49a984aaa9f0a11938e9777e33e3.png" >
//           <Transformation radius="24" />
//         </Image>
//         <div id="cloudinary-upload"></div>
//       </label>
//       <br/>
//       <label>Name: <input type="text"/> </label>
//       <br/>
//       <label>Bio: <input type="textarea"/> </label>
//       <br/>
//       <input type="submit"/>
//     </form>
//   )
// }

export default FormMusicianProfile





// <Image cloudName="aeonknight" publicId="store/cfcf49a984aaa9f0a11938e9777e33e3.png" >
//   <Transformation radius="24" />
// </Image>


// preview upload
/*
      <div className="image display">

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <p>{this.state.uploadedFileCloudinaryUrl}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>

        <div>
        <p>state preview</p>
          {this.state.uploadedFile &&  <img   src={this.state.uploadedFile.preview} alt=""/>}
        </div>

      </div>
  */
