import React from 'react'

const _104= require('../../images/sponsors/104.7_0.jpg')
const ACTGov = require('../../images/sponsors/ACTGov_0.jpg')
const Elite = require('../../images/sponsors/Elite logo high res.jpg')
const FIG = require('../../images/sponsors/FIG_0.jpg')
const Giraffe = require('../../images/sponsors/Giraffe.jpg')
const IntoTomorrow = require('../../images/sponsors/Into-Tomorrow-popup.jpg')
const Milk = require('../../images/sponsors/Milk_0.jpg')
const Prime7 = require('../../images/sponsors/PRIME7-logo.jpg')
const quest = require('../../images/sponsors/quest_0.jpg')

const sponsorImages = [
  _104,
ACTGov,
Elite,
FIG,
Giraffe,
IntoTomorrow,
Milk,
Prime7,
quest]

class SponsorReel extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     image: 0
   };
 }

 componentDidMount() {
   this.timerID = setInterval(
     () => this.changeImg(),
     3000
   );
 }

 componentWillUnmount() {
   clearInterval(this.timerID);
 }

 changeImg() {
  if( this.state.image === sponsorImages.length-1){
    this.setState({image:0})
  }else{
   this.setState((prevState) => ({
     image: prevState.image + 1
     }));
}
 }



  render (){
    const sponsor = <img src={sponsorImages[this.state.image]} alt=""/>

    return(
      <div className='SponsorReel'>
        {sponsor}
      </div>
    )
  }
}

export default SponsorReel;
