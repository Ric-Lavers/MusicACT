import React from 'react'

const FormContactDetails = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const {elements} = event.target;
    const {email, phone, person} = elements;
    console.log(email.value,phone.value, person.value);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: <input  name="email" type="email"/> </label>
      <br/>
      <label>Phone Number: <input  name="phone" type="text"/> </label>
      <br/>
      <label>Point of contact: <input name="person" type="text"/> </label>
      <br/>
      <input type="submit"/>
    </form>
  )
}

export default FormContactDetails
