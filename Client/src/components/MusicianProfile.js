import React from 'react'
import ReactPlayer from 'react-player'
import '../profile.css';
import {TweenMax, Power2, TimelineLite, SlowMo, TimelineMax} from "gsap";

const demo = require('../demoData/demo.json');
const readMore = require('../images/readmore.svg')

const youtubeIcon = require('../images/001-youtube.svg')
const twitterIcon = require('../images/008-twitter.svg')
const spotifyIcon = require('../images/012-spotify.svg')
const soundcloudIcon = require('../images/013-soundcloud.svg')
const facebookIcon = require('../images/036-facebook.svg')
const instagramIcon = require('../images/029-instagram.svg')
const websiteIcon = require('../images/website.png')


class MusicainProfile extends React.Component {
  state = {profile: demo.data.musicians.find( (obj) =>
  obj._id === this.props._id),
    bioOverflow:null,
  viewContacts: ["none","block"]}

  componentWillMount() {
    let myProfile = this.state.profile
    console.log(myProfile);
    if(window.localStorage.getItem("profile") === null){
    window.localStorage.setItem("profile", JSON.stringify(myProfile) )
    }
  }

  isOverflown = (element)=> {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  }
  componentDidMount() {

    let text = JSON.stringify(this.state.profile.profile.bio.replace(/\n/g,'<br/>') )
    document.getElementById('profile-bio-content').innerHTML =  text.split('"').join('')

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
    const {facebook, instagram,twitter, soundcloud, youtube, spotify, website} = this.state.profile.profile.socialMedia
    // const {soundcloudLink, youtubeLink} = this.state.profile.profile.multimedia
    const {multimedia} = this.state.profile.profile
    console.log(multimedia);
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
    <div>
      <div className="profile-container"
        >

        <div className="profile-left">
          <div className="profile-image">
            <img src={imageSrc} alt=""/>
          </div>

          <div onClick={this.handleContact} style={{display:view2, backgroundColor:"powderblue"}} className="profile-social-icons">
            <p className="profile-social">
              SOCIALS LINKS
            </p>
            </div>
          <div onClick={this.handleContact} style={{display: view }} className="profile-social-icons">
            <a href={spotify} target="_blank"> <img  className="profile-social" src={spotifyIcon} alt=""/></a>
            <a href={twitter} target="_blank"> <img  className="profile-social" src={twitterIcon} alt=""/></a>
            <a href={soundcloud} target="_blank"> <img  className="profile-social" src={soundcloudIcon} alt=""/></a>
            <a href={facebook} target="_blank"> <img  className="profile-social" src={facebookIcon} alt=""/></a>
            <a href={website} target="_blank"> <img  className="profile-social" src={websiteIcon} alt=""/></a>
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
            <p style={bioStyle} id="profile-bio-content" ></p>
          </div>

          {this.state.bioOverflow && (<div
            onClick={this.handleBioOverflow}
            id="more-button"
            className="more-button">
          more
          </div>)}

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
