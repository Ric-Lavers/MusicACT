import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import ReactSVG from 'react-svg';
// require('../library/MorphSVGPlugin')
// const tickAnimation =  require('../images/tickAnimation.svg')


const FormContactDetails = (props) => {


  const styling=props.errors
  const drop = props.open?"body on":"body off"

  return (
    <div className="form-inputs">
      <div className="drop-title">
        <label

          style={{justifyContent:"flex-start"}} for="contactDetails"><h3>Contact Details</h3>
        </label>
        <input
          onClick={props.drop}
          className="drop-state" id="contactDetails" type="checkbox"
          defaultChecked={props.drop}/>

      </div>

      <div className= {drop}>
      <label className="input-title">Email: <br/>
        <input

          style = {styling.email}
          className="contactDetails"
          onChange={props.handleChange}
          name="email"
          type="email"
          />
      </label>
      &nbsp;
      <label className="input-title">Phone Number:
        <input

          style = {styling.phoneNumber}
          className="contactDetails"
          autoComplete="tel"
          onChange={props.handleChange}
          name="phoneNumber"
          type="text"/>
      </label>
      &nbsp;

      <label className="input-title">Point of contact:
        <input

          style = {styling.pointOfContact}
          className="contactDetails"
          onChange={props.handleChange}
          name="pointOfContact" type="text"/>
      </label>
    </div>
  </div>
  )
}

export default FormContactDetails
