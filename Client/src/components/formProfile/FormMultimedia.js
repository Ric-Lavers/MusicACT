import React from 'react'

const FormMultimedia = (props) => {

  const styling=props.errors
  const drop = props.open?"on":"off"

  return (
    <div className="form-inputs">

      <div className="drop-title">
        <label
          style={{justifyContent:"flex-start"}} for="Multimedia"><h3>Multimedia Links</h3></label>
        <input
          onClick={props.drop}
          className="drop-state" id="Multimedia" type="checkbox"/>
      </div>

      <div className= {`body ${drop}`}>
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
    </div>
  )
}

export default FormMultimedia
