import React from 'react'

import MusicianProfile from '../components/MusicianProfile'
import * as api from '../api/profile'

class Profiles extends React.Component {

  state={listing:null}
  // paramsId =  this.props.match.params.id;
  // <div>Your on Profiles the id is {this.paramsId}</div>
  componentDidMount() {
    api.fetchProfile(this.props.props.match.params.id)
    .then( (res) => {
      console.log(res.profile.profile)
      let _res = res.profile.profile
      let obj = {}
      obj._id = _res._id
      obj.contactDetails = _res.contactDetails[0]
      obj.profile = _res.profile[0]
      obj.socialMediaIcons = _res.socialMediaIcons[0]
      obj.multimedia = _res.multimedia[0]

      this.setState({listing: obj})
    }).catch(err=>
      console.log("error: ",err)
    )
  }


  render (){
    const profileId = this.props.props.match.params.id
    if(this.state.listing === null){return(<div>loading..</div>)}
    else{
    return(
      <div>
        <MusicianProfile
          _id = {profileId}
          data = {this.state.listing}
          />
      </div>
    )}
  }
}

export default Profiles;
