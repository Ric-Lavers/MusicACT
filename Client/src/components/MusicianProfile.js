import React from 'react'
import ReactPlayer from 'react-player'
import '../profile.css';
import {TweenMax, Power2, TimelineLite, SlowMo, TimelineMax} from "gsap";

import _ from 'lodash'
require('colorize')

const demo = require('../demoData/demo.json');
const readMore = require('../images/readmore.svg')

const youtubeIcon = require('../images/001-youtube.svg')
const twitterIcon = require('../images/008-twitter.svg')
const spotifyIcon = require('../images/012-spotify.svg')
const soundcloudIcon = require('../images/013-soundcloud.svg')
const facebookIcon = require('../images/036-facebook.svg')
const instagramIcon = require('../images/029-instagram.svg')
const websiteIcon = require('../images/website.png')

const socialIcons = [
youtubeIcon,
twitterIcon,
spotifyIcon,
soundcloudIcon,
facebookIcon,
instagramIcon,
websiteIcon]

function searchStringInArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return j;
    }
    return -1;
}


class MusicainProfile extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.data) {
      let demoP = props.data;
      console.log('from props');
      this.state = {
        profile:demoP,
        bioOverflow:null,
        viewContacts: ["none","block"]
      }
    }else{
      let demoP = demo.data.musicians.find( (obj) =>
      obj._id === props._id);
      console.log('demoJSON');
      this.state = {
        profile:demoP,
        bioOverflow:null,
        viewContacts: ["none","block"]
      }
    }
  }



  componentWillMount() {
    let myProfile = this.state.profile
    if(window.localStorage.getItem("profile") === null){
    window.localStorage.setItem("profile", JSON.stringify(myProfile) )
    }
  }

  isOverflown = (element)=> {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }
  componentDidMount() {

    let bioHeight = document.getElementById("profile-bio-content").clientHeight
    if (bioHeight > 270) {
      this.setState({bioOverflow:true,bioHeight:bioHeight})
    }else{this.setState({bioOverflow:false,bioHeight:bioHeight})}
    console.log(bioHeight);
    // let overflow = this.isOverflown(document.getElementsByClassName('profile-bio')[0])
    // this.setState({bioOverflow:overflow})
  }
  handleBioOverflow = () =>{
    this.setState({bioOverflow: !this.state.bioOverflow})
  }
  handleContact =() =>{
    console.log('handleContact');
    this.setState({viewContacts: [this.state.viewContacts[1],this.state.viewContacts[0]]})
  }


  render (){
    //Destructuring advance methods ---  https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
    //http://2ality.com/2015/01/es6-destructuring.html
    // console.log(this.props._id);
    // console.log("______",this.state.profile  );
    const { type } = this.state.profile
    const {email, phoneNumber, pointOfContact } = this.state.profile.contactDetails
    const {imageSrc, name, bio} =this.state.profile.profile
    const {facebook, instagram,twitter, soundcloud, youtube, spotify, website} = this.state.profile.socialMedia

    const {socialMedia} = this.state.profile

    const socialIconsLinks = _.values(socialMedia);
    const socialIconsNames = _.keys(socialMedia)
    socialIcons


    const icons = []
    socialIcons[searchStringInArray('facebook', socialIcons)]

    if (!!socialIconsLinks && socialIconsLinks.length != 0) {
      socialIconsLinks.forEach( (address, index) => {
        if (socialIconsNames[index] !== 'website') {
          let src = socialIcons[searchStringInArray(socialIconsNames[index],socialIcons)]
          icons.push(
            <a key={index} href={address} target="_blank"> <img
              key={`img_${index}`} className="profile-social" src={src} alt=""/></a>
          )
        }
        else{
          icons.push(
            <a  key={index}href={address} target="_blank"> <img  key={`img_${index}`} className="profile-social" src={websiteIcon} alt=""/></a>
          )
        }
      })
    }


    // const {soundcloudLink, youtubeLink} = this.state.profile.profile.multimedia
    const {multimedia} = this.state.profile
    // console.log("multimedia",multimedia);
    const multimediaLinks = []
    Object.values(multimedia).map( (address) => {
      if(address.match("soundcloud")){
        multimediaLinks.push([address,150])
      }else if (address.match("youtube")) {//640x360 standard
        multimediaLinks.push([address,450])
      }else if (address.match("vimeo")) {
        multimediaLinks.push([address,400])
      }
    } )


    const bioStyle = this.state.bioOverflow?{maxHeight:270}:{height:"100%"}
    let view = this.state.viewContacts[0];
    let view2 = this.state.viewContacts[1];
    const style = {display:{view} }
    return(
    <div style={{marginLeft:24}} className="MusicainProfile">
      <div className="profile-container"
        >

        <div className="profile-left">
          <div className="profile-image">
            {this.state.profile.profile.imageSrc?
            (<img src={imageSrc} alt=""/>):
            (<img src={this.state.profile.profile.imageSrcBuild} alt=""/>)
            }
          </div>


          <div className="profile-social-icons">

            { !!icons && icons.length != 0 && icons.map( (i) => {
              return i
            } )}

          </div>

          <div className="profile-contact-info">

  <div className="hide">
    <br/>
    <h3 >Contact</h3>
              <ul >
                <li className="profile-email"> <p> <strong>Email:</strong> <span>{email}</span> </p> </li>
              <li className="profile-phone"> <p> <strong>Phone:</strong> <span>{phoneNumber}</span> </p> </li>
              <li className="profile-person"> <p> <strong>Person:</strong> <span>{pointOfContact}</span> </p> </li>
            </ul>
    <br/>
</div>
              </div>
        </div>
        <div className="profile-body">
          <div className="profile-header">
          {!this.state.bioOverflow &&this.state.bioHeight > 270 &&
      (  <div onClick={this.handleBioOverflow}id="less-button" className="more-button">less</div>)}
            <div className="profile-title">
              <h2>{name}</h2>
            </div>
          </div>
          <div className="profile-bio" >
            {/*<img src={readMore} alt="" className="readmoreSVG"/>*/}
            <p style={bioStyle} id="profile-bio-content" >
            {bio}
            </p>
          </div>

          {this.state.bioOverflow && (<div
            onClick={this.handleBioOverflow}
            id="more-button"
            className="more-button">
          more
          </div>)}
          <div>hi, please delete me later</div>

        {multimedia && multimediaLinks.map( (address) => (
          <ReactPlayer
            className="profile-react-player"
            url= {address[0]}
            controls
            width="100%"
            height={address[1]}/>
          ))}

          <div className="profile-gallery">
          </div>

        </div>

        <div className="profile-right">
          <div className="profile-tag"></div>
          <div className="profile-tag"></div>
          <div className="profile-tag"></div>
          <div className="profile-tag"></div>
          <div className="profile-tag"></div>
        </div>

      </div>
    </div>
    )
}
}

export default MusicainProfile;


/*
<div onClick={this.handleContact} style={{display:view2, backgroundColor:"powderblue"}} className="profile-social-icons">
  <p className="profile-social">
    SOCIALS LINKS
  </p>
  </div>
<div onClick={this.handleContact} style={{display: view }} className="profile-social-icons">

  {icons.map( (i) => {
    return i
  } )}

</div>
*/
