import React from 'react'

const FormSocials = (props) => {

  const handleSubmit =(event)=>{

  }

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
      <h3>Social Icons</h3>
      <label>soundcloud: <input  name="soundcloud" type="url"/> </label>
      <br/>
      <label>spotify: <input  name="spotify" type="url"/> </label>
      <br/>
      <label>instagram: <input name="instagram" type="url"/> </label>
      <br/>
      <label>youtube: <input name="youtube" type="url"/> </label>
      <br/>
      <label>website: <input name="website" type="url"/> </label>
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
