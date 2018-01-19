import React from 'react'

const FormContactDetails = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const {elements} = event.target;
    const {email, phone, person} = elements;
    console.log(email.value,phone.value, person.value);

  }


  return (
    <div>
      <label>Email:
        <input
          className="contactDetails"
          onChange={props.handleChange}
          name="email"
          type="email"
          />
      </label>
      <br/>
      <label>Phone Number:
        <input
          className="contactDetails"
          autocomplete="tel"
          onChange={props.handleChange}  name="phoneNumber" type="text"/>
      </label>
      <br/>
      <label>Point of contact:
        <input
          className="contactDetails"
          onChange={props.handleChange} name="pointOfContact" type="text"/>
      </label>
      <br/>
  </div>
  )
}

export default FormContactDetails
