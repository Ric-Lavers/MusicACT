import React from 'react'

const FormMultimedia = (props) => {

  const handleSubmit = (event) => {

  }

  return (
    <div>
      <h3>Social Embed</h3>
      <label>Soundcloud:
        <input
          name="soundcloudEmbed"
          type="url"
          className="multimedia"
          onChange={props.handleChange}/>
      </label>
      <br/>
      <label>Youtube:
        <input
          name="youtubeEmbed"
          type="url"
          className="multimedia"
          onChange={props.handleChange}/>
      </label>
      <br/>
      <label>Vimeo:
        <input
          name="vimeoEmbed"
          type="url"
          className="multimedia"
          onChange={props.handleChange}/>
      </label>
    </div>
  )
}

export default FormMultimedia
