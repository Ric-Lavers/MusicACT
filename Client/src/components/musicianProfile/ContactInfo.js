import React from 'react'

const ContactInfo = (props) => {
  const { email, phoneNumber, pointOfContact } = props.contactDetails
  return(
    <div className="profile-contact-info">
        <h3>Contact</h3>
        <ul>
          <li className="profile-email">
            <strong>Email:</strong>
            <span>{email}</span>
          </li>
          <li className="profile-phone">
            <strong>Phone:</strong>
            <span>{phoneNumber}</span>
          </li>
          <li className="profile-person">
            <strong>Person:</strong>
            <span>{pointOfContact}</span>
          </li>
        </ul>
    </div>
  )
}

export default ContactInfo
