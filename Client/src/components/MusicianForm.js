import React from 'react';
import FormContactDetails from './formProfile/FormContactDetails';
import FormMusicianProfile from './formProfile/FormMusicianProfile';
import FormSocials from './formProfile/FormSocials';
import FormMultimedia from './formProfile/FormMultimedia';
import { TweenMax } from 'gsap';
import ReactSVG from 'react-svg';

import _ from 'lodash';
import jwt_decode from 'jwt-decode';
import * as auth from '../api/profile';
import PlusSVG from './PlusSVG'
import MinimizeSVG from './MinimizeSVG'

require('../library/MorphSVGPlugin');
const tickAnimation = require('../images/tickAnimation.svg');

require('../style/forms.css');

class MusicianForm extends React.Component {
  state = {
    minimized: false,
    tokenId: null,
    drop:{
      contactDetails:true,
      bio:false,
      socialIcons:false,
      Multimedia:false
    }
  };

  handleClick = () => {
    this.setState({ minimized: !this.state.minimized });
  };

  // assign token for user
  componentWillMount() {
    var getToken = auth.token();
    if (getToken !== null) {
      var decodeToken = jwt_decode(getToken);
      var tokenId = decodeToken.sub;
      this.props.handleId(tokenId)
    } else {
      console.log('No token');
    }
  }
  drop = (event) => {
    console.log(event.target.checked);
    let on = event.target.checked;
    let tab = event.target.id
    const drop =  this.state.drop
    drop[tab] = on
    this.setState(drop)
  }

  render() {
    let form_cls = null;
    let inputs_cls = null;
    if (this.state.minimized) {
      form_cls = 'form-musician minimize';
      inputs_cls = 'noSuchthing';
    } else {
      form_cls = 'form-musician';
      inputs_cls = 'none';
    }

    const styling={};

    Object.keys(this.props.errors).map( (i) => {
      styling[i] = this.props.errors[i]=== 0? ( {} ) : ( this.props.errors[i]=== 1?{border:"2px solid red",borderRadius:8} : {outline:'green',border:"2px solid green",borderRadius:6} )
    })
    const profileState = this.props.data

    return (
      <form onSubmit={this.props.handleSubmit} className={form_cls}>
        <div onClick={this.handleClick} className="minimize-icon">
          {!this.state.minimized?<PlusSVG/>:<MinimizeSVG/>}
        </div>
        <div className={inputs_cls}>

          <FormContactDetails
            open={this.state.drop.contactDetails}
            drop={this.drop}
            placeholders = {profileState.contactDetails}
            errors = {styling}
            handleChange={this.props.handleChange}
            tickAnimation={tickAnimation}
            />

          <FormMusicianProfile
            open={this.state.drop.bio}
            drop={this.drop}
            errors = {styling}
            handleChange={this.props.handleChange}
            handleImageUpload={this.props.handleImageUpload}
            />

          <FormSocials
            open={this.state.drop.socialIcons}
            drop={this.drop}
            errors = {styling}
            handleSocialDelete={this.props.handleSocialDelete}
            handleChange={this.props.handleChange}
            />

          <FormMultimedia
            open={this.state.drop.Multimedia}
            drop={this.drop}
            errors = {styling}
            handleChange={this.props.handleChange}
            />

          <input type="hidden" name="token" value={this.state.tokenId} />
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default MusicianForm;
