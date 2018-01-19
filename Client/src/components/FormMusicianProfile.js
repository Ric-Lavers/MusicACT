import React from 'react'
import {Image,Transformation} from 'cloudinary-react';

import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'profile_image';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/aeonknight/upload';

class FormMusicianProfile extends React.Component {
// for file upload example https://codepen.io/hartzis/pen/VvNGZP?editors=0110
  state = {
      uploadedFileCloudinaryUrl: ''
    };

  handleChange = (event) => {
    console.log("changing..");
  }

  handleImageUpload = (file)=>{
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  onImageDrop = (files) => {
    this.setState({
      uploadedFile: files[0]
    })
    this.handleImageUpload(files[0]);
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    console.log(event.target);
  }

  render (){


    if (this.state.uploadedFileCloudinaryUrl) {
      console.log(this.state.uploadedFileCloudinaryUr);
    }
    return(
      <div>


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

      <form
        onSubmit={(event)=>this.handleSubmit(event)}
        onChange={this.handleChange}>
        <label>image Upload!:
          <input type="file" name="fileUpload" id=""/>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </label>
        <br/>
        <label>Name: <input type="text"/> </label>
        <br/>
        <label>Bio: <textarea placeholder="Write something here" name="textarea"
   rows="10" cols="50"></textarea>
 </label>
        <br/>
        <input type="submit"/>
      </form>
      </div>
    )
  }
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
