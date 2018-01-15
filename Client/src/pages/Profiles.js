import React from 'react'
const demo = require('../demoData/demo.json');

class Profiles extends React.Component {

  paramsId =  this.props.match.params.id

  render (){
   return(
     <div>Your on Profiles the id is {this.paramsId}</div>


   )
  }
}

export default Profiles;
