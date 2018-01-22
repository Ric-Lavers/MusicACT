import React from 'react'

const FormSocials = (props) => {

  const names = ["facebook", "instagram","twitter", "soundcloud", "youtube", "spotify", "website"]

  const socials = []
    names.map( (name, index) =>{
      socials.push(
        <label key={name+index}>{name}:
          <input
            key={`socialMedia_${index}`}
            name= {name}
            type="url"
            className="socialMedia"
            onChange={props.handleChange}
            />
          <br/>
        </label>
      )
    })

  return (
    <div>
      <h3>Social Icons</h3>
      {socials.map( (i) =>
        i
      )}
    </div>
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
