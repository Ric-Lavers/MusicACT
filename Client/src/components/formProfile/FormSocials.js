import React from 'react'

const FormSocials = (props) => {

  const names = ["facebook", "instagram","twitter", "soundcloud", "youtube", "spotify", "website"]
  const styling = props.errors
  const drop = props.open?"on":"off"

  const socials = []
    names.map( (name, index) =>{
      socials.push(
        <div className="social-icon-inputs">
          <label key={name+index}>{name}:
            <input
              key={`socialMedia_${index}`}
              style={styling[name]}
              name= {name}
              type="url"
              className="socialMediaIcons"
              onChange={props.handleChange}
              />
            <button name={name} onClick={props.handleSocialDelete} style={{position:"absolute",float:"right"}}>X</button>
            <br/>
          </label>
        </div>

      )
    })

  return (
    <div className="form-inputs">

      <div className="drop-title">
        <label
          style={{justifyContent:"flex-start"}} for="socialIcons"><h3>Social Icons</h3></label>
        <input
          onClick={props.drop}
          className="drop-state" id="socialIcons" type="checkbox"/>
      </div>

      <div className= {`body ${drop}`}>
        {socials}
      </div>
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
