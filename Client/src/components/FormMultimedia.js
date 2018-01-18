import React from 'react'

const FormMultimedia = (props) => {

  const handleSubmit = (event) => {

  }

  return (
    <form onSubmit={handleSubmit} >
      <h3>Social Embed</h3>
      <label>Soundcloud: <input  name="soundcloudEmbed" type="url"/> </label>
      <br/>
      <label>Youtube: <input name="youtubeEmbed" type="url"/> </label>
      <br/>
      <label>Vimeo: <input name="vimeoEmbed" type="url"/> </label>
      <input type="submit"/>
    </form>
  )
}

export default FormMultimedia
