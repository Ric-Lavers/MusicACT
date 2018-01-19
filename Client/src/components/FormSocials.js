import React from 'react'

const FormSocials = (props) => {

  const handleSubmit =(event)=>{

  }

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
      <h3>Social Icons</h3>
      <label>soundcloud:
        <input
          name="soundcloud"
          type="url"
          className="socialMedia"
          onChange={props.handleChange}
          />
      </label>
      <br/>
      <label>spotify:
        <input
          name="spotify"
          type="url"
          className="socialMedia"
          onChange={props.handleChange}
          />
      </label>
      <br/>
      <label>instagram:
        <input
          name="instagram"
          type="url"
          className="socialMedia"
          onChange={props.handleChange}
          />
      </label>
      <br/>
      <label>facebook:
        <input
          name="facebook"
          type="url"
          className="socialMedia"
          onChange={props.handleChange}
          />
      </label>
      <br/>
      <label>youtube:
        <input
          name="youtube"
          type="url"
          className="socialMedia"
          onChange={props.handleChange}
          />
      </label>
      <br/>
      <label>website:
        <input
          name="website"
          type="url"
          className="socialMedia"
          onChange={props.handleChange}
          />
      </label>
      <input type="submit"/>
    </form>
  )
}

export default FormSocials

/*
facebook: String,
instagram: String,
soundcloud: String,
youtube: String,
spotify: String,
twitter: String,
website: String
*/
