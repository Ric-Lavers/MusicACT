import React from 'react'

import FormContactDetails from './FormContactDetails'
import FormMusicianProfile from './FormMusicianProfile'
import FormSocials from './FormSocials'
import FormMultimedia from './FormMultimedia'
import {TweenMax} from 'gsap'
import ReactSVG from 'react-svg';
import PlusSVG from './PlusSVG'
import MinimizeSVG from './MinimizeSVG'

import _ from 'lodash'

require('../library/MorphSVGPlugin')
const tickAnimation =  require('../images/tickAnimation.svg')

require('../style/forms.css')



class MusicianForm extends React.Component {

  state={
    minimized:false,

  }

  handleClick =()=>{
    this.setState({minimized: !this.state.minimized})
  }


  componentDidUpdate() {
  }

  render(){
    let form_cls = null;
    let inputs_cls = null;
    if (this.state.minimized){
      form_cls = "form-musician minimize"
      inputs_cls = "noSuchthing"
    }
    else{
      form_cls = "form-musician"
      inputs_cls = "none"
    }

    const styling={};

    Object.keys(this.props.errors).map( (i) => {
      styling[i] = this.props.errors[i]=== 0? ( {} ) : ( this.props.errors[i]=== 1?{border:"2px solid red",borderRadius:8} : {outline:'green',border:"2px solid green",borderRadius:6} )
    })
    const profileState = this.props.data

    return (
      <form
        onSubmit={this.props.handleSubmit} className={form_cls}>
        <div onClick={this.handleClick} className="minimize-icon">
          {!this.state.minimized?<PlusSVG/>:<MinimizeSVG/>}
        </div>
        <div className={inputs_cls}>
          <FormContactDetails
            placeholders = {profileState.contactDetails}
            errors = {styling}
            handleChange={this.props.handleChange}
            tickAnimation={tickAnimation}
            />
          <FormMusicianProfile
            errors = {styling}
            handleChange={this.props.handleChange}
            handleImageUpload={ this.props.handleImageUpload } />
          <FormSocials
            errors = {styling}
            handleChange={this.props.handleChange} />
          <FormMultimedia
            errors = {styling}
            handleChange={this.props.handleChange} />
          <input type="submit"/>
        </div>
      </form>
    )
  }
}

export default MusicianForm;
