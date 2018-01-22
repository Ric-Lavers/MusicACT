import React from 'react'

import FormContactDetails from './FormContactDetails'
import FormMusicianProfile from './FormMusicianProfile'
import FormSocials from './FormSocials'
import FormMultimedia from './FormMultimedia'
import {TweenMax} from 'gsap'
import ReactSVG from 'react-svg';

import _ from 'lodash'

require('../library/MorphSVGPlugin')
const tickAnimation =  require('../images/tickAnimation.svg')

require('../style/forms.css')



class MusicianForm extends React.Component {

  state={minimized:false}

  handleClick =()=>{
    this.setState({minimized: !this.state.minimized})
  }

  componentDidUpdate() {
   //  if( document.getElementById('crossSVG') ){
   //    TweenMax.set("#crossSVG", {transformOrigin:"50% 50%"});
   //
   //    if(this.state.minimized){
   //      TweenMax.to('#crossSVG', 0.8, {morphSVG:'#tickSVG',fill:'green'})
   //      console.log( `%c ${this.state.minimized}` , 'color:red; background-color:black; font-size:1.2em' )
   //   }else{
   //     TweenMax.to('#crossSVG', 0.8, {morphSVG:'#crossSVG',fill:'red'})
   //   }
   // }
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
    const errors = this.props.errors
    console.log(this.props.errors);

    // <ReactSVG path={tickAnimation} /> // issue with animation return

    return (
      <form
        onSubmit={this.props.handleSubmit} className={form_cls}>
        <div onClick={this.handleClick} className="minimize-icon">
          {!this.state.minimized?(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 12">
            <rect width="32" height="12" rx="8" ry="8" data-name="Layer 2"/>
          </svg>
        ):
          (<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M28 10h-6V5a4 4 0 0 0-4-5h-3a4 4 0 0 0-5 5v5H4a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6v6a4 4 0 0 0 5 4h3a4 4 0 0 0 4-4v-6h6a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4z" data-name="Layer 2"/>
          </svg>)
        }
        </div>
        <div className={inputs_cls}>
          <FormContactDetails
            handleChange={this.props.handleChange}
            tickAnimation={tickAnimation}
            />
            <span style={{ color:'red' }}className="error">{_.values(errors)}</span>

          <FormMusicianProfile  handleChange={this.props.handleChange}
            handleImageUpload={ this.props.handleImageUpload } />
          <FormSocials handleChange={this.props.handleChange} />
          <FormMultimedia handleChange={this.props.handleChange} />
          <input type="submit"/>
        </div>
      </form>
    )
  }
}

export default MusicianForm;

/*
musicans data[]

  type,
  _id,
  dateJoined,
  emailLogin,
  password,
  contactDetails{
    email: String,
    phoneNumber: String,
    pointOfContact: String
  }
  profile{
    imageSrc: String,
    name: String,
    bio: Text
  }
  socialMedia{
    facebook: String,
    instagram: String,
    soundcloud: String,
    youtube: String,
    spotify: String,
    twitter: String,
    website: String
  }
  multimedia{
    soundcloudLink: String,
    youtubeLink: String
  }


*/
