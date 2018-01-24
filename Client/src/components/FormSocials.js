import React from 'react'

const FormSocials = (props) => {

  const names = ["facebook", "instagram","twitter", "soundcloud", "youtube", "spotify", "website"]
  const styling=props.errors

  const socials = []
    names.map( (name, index) =>{
      socials.push(
        <label key={name+index}>{name}:
          <input
            key={`socialMedia_${index}`}
            style={styling[name]}
            name= {name}
            type="url"
            className="socialMedia"
            onChange={props.handleChange}
            />
          <button name={name} onClick={props.handleSocialDelete} style={{position:"absolute",float:"right"}}>X</button>
          <br/>
        </label>
      )
    })

  return (
    <div className="form-inputs">
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
