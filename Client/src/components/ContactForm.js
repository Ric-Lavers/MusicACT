import React from 'react'

function ContactForm() {

  function handleSubmit() {
    console.log("submited");
  }
  function handleChange() {
    console.log("something changed");
  }

  return(
    <form class="contact-form" onChange={handleChange} onSubmit={handleSubmit} >
      <label for="contact number">Contact Number<br/>
      <input type="text" name="contact number"
      /></label>
    <br/>
    <label for="contact email">Contact Email<br/>
      <input type="text" name="contact email"/></label>
      <input type="submit"/>
    </form>
  )

}
export default ContactForm;
