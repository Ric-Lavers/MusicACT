import React from 'react'
import ReactPlayer from 'react-player'

const youtubeIcon = require('../images/001-youtube.svg')
const twitterIcon = require('../images/008-twitter.svg')
const spotifyIcon = require('../images/012-spotify.svg')
const soundcloudIcon = require('../images/013-soundcloud.svg')
const facebookIcon = require('../images/036-facebook.svg')
const instagramIcon = require('../images/029-instagram.svg')
const websiteIcon = require('../images/website.png')


class MusicainProfile extends React.Component {
  state = {}

  componentWillMount() {
    const profile = this.props.data.data.musicians.find( (obj) =>
    obj._id === this.props._id)
    console.log(profile);
    this.setState({profile: profile})
  }
  componentDidMount() {
    let text = JSON.stringify(this.state.profile.profile.bio.replace(/\n/g,'<br/>') )
    document.getElementsByClassName('profile-bio')[0].innerHTML =  text.split('"').join('')
  }

  render (){
    //Destructuring advance methods ---  https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
    //http://2ality.com/2015/01/es6-destructuring.html
    console.log(this.props._id);
    console.log("______",this.state.profile  );
    const { type } = this.state.profile
    const {email, phoneNumber, pointOfContact } = this.state.profile.contactDetails
    const {imageSrc, name, bio} =this.state.profile.profile
    const {facebook, instagram,twitter, soundcloud, youtube, spotify, website} = this.state.profile.profile.socialMedia
    const {soundcloudLink, youtubeLink} = this.state.profile.profile.multimedia


    return(
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-image">
            <img src={imageSrc} alt=""/>
          </div>
          <div className="profile-social-icons">
            <a href={spotify} target="_blank"> <img  className="profile-social" src={spotifyIcon} alt=""/> </a>
            <a href={twitter} target="_blank"> <img  className="profile-social" src={twitterIcon} alt=""/> </a>
            <a href={soundcloud} target="_blank"> <img  className="profile-social" src={soundcloudIcon} alt=""/> </a>
            <a href={facebook} target="_blank"> <img  className="profile-social" src={facebookIcon} alt=""/> </a>
            <a href={website} target="_blank"> <img  className="profile-social" src={websiteIcon} alt=""/> </a>

          </div>
          <div className="profile-contact-info">
            <h3>Contact</h3>
            <ul>
              <li className="profile-email"> <p> <strong>Email:</strong> <span>{email}</span> </p> </li>
        <li className="profile-phone"> <p> <strong>Phone:</strong> <span>{phoneNumber}</span> </p> </li>
              <li className="profile-person"> <p> <strong>Person:</strong> <span>{pointOfContact}</span> </p> </li>
            </ul>
          </div>

        </div>
        <div className="profile-body">
          <div className="profile-title">
            <h2>{name}</h2>
          </div>
          <div className="profile-bio">
            <p>{}</p>
          </div>
          <ReactPlayer
            className="profile-react-player"
            url="https://soundcloud.com/pixelord/boost"
            controls
            width="100%"
            height="150px" />
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
    )
}
}

export default MusicainProfile;
