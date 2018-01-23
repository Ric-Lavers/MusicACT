import React from 'react'

const FormMultimedia = (props) => {

  const styling=props.errors

  return (
    <div className="form-inputs">
      <h3>Social Embed</h3>
      <label>Soundcloud:
        <input
          style={styling.soundcloudLink}
          name="soundcloudLink"
          type="url"
          className="multimedia"
          onChange={props.handleChange}/>
      </label>
      <br/>
      <label>Youtube:
        <input
          style={styling.youtubeLink}
          name="youtubeLink"
          type="url"
          className="multimedia"
          onChange={props.handleChange}/>
      </label>
      <br/>
      <label>Vimeo:
        <input
          style={styling.vimeoLink}
          name="vimeoLink"
          type="url"
          className="multimedia"
          onChange={props.handleChange}/>
      </label>
    </div>
  )
}

export default FormMultimedia
