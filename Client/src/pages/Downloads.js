import React from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Image,Transformation} from 'cloudinary-react';

const CLOUDINARY_UPLOAD_PRESET = 'downloads'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/aeonknight/upload';



const Downloads = (props) => {

  const handleImageUpload = (file)=>{
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        console.log(response.body.secure_url)
      }
    });
  }




  return (
    <div>
      <a href="https://dl.dropboxusercontent.com/s/deroi5nwm6u7gdf/advice.png" className="dropbox-saver"></a>

      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={handleImageUpload}>
        <p className="drop-message"style={
            {textAlign:"center", padding:"16px",paddingTop:"25%"}
          }></p>
      </Dropzone>
      <input type="file" onChange={handleImageUpload}/>
    </div>
  )
}

export default Downloads
