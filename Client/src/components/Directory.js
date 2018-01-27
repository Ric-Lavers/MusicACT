import React from 'react';
import ReactDOM from 'react-dom'
import FilterForm from './FilterForm';
import DirectoryGrid from './DirectoryGrid';
import * as auth from '../api/auth';
import {TweenMax, SlowMo, TimelineMax} from "gsap";


const demo = require('../demoData/demo.json');

const NavButtonsEnum = {
  ALL: 0,
  MUSICIANS: 1,
  VENUES: 2,
  BUSINESSES: 3
};
const MusicianButtonsEnum = {
  ALL: 0,
  BANDS: 1,
  DJS: 2,
  SOLOISTS: 3
};
const VenueButtonsEnum = {
  ALL: 0,
  CIVIC: 1,
  NORTH: 2,
  SOUTH: 3
};

class Directory extends React.Component {
  state = {
    directory: null,
    demo,
    filterType: 'all',
    categoryFilter: 'all',
    navButtonActive: NavButtonsEnum.ALL,
    musicianButtonActive: MusicianButtonsEnum.ALL,
    venueButtonActive: VenueButtonsEnum.ALL
  };



  componentDidMount() {
<<<<<<< HEAD
    const directory = []
    auth.findAllUser().then(res => {
      res.map( (profile) => {
        let ob = {}
        ob._id = profile.profile._id
        ob.user =  profile.profile.user
        ob.type =  profile.type
        ob.contactDetails = profile.profile.contactDetails[0]
        ob.multimedia = profile.profile.multimedia[0]
        ob.profile = profile.profile.profile[0]
        ob.socialMediaIcons = profile.profile.socialMediaIcons[0]
        directory.push(ob)
      })
      this.setState({ directory });
    })
=======
    // let directory = []
    // auth.findAllUser().then(res => {
    //   res.map( (profile) => {
    //     const ob = {}
    //     ob._id = profile.profile._id
    //     ob.user =  profile.profile.user
    //     ob.type =  profile.profile.type
    //     ob.contactDetails = profile.profile.contactDetails[0]
    //     ob.multimedia = profile.profile.multimedia[0]
    //     ob.profile = profile.profile.profile[0]
    //     ob.socialMediaIcons = profile.profile.socialMediaIcons[0]
    //
    //     directory.push(ob)
    //   });
    // })
    // console.log("directory", directory);
    //
    //
    // this.setState({ directory: directory });

/*    const node = ReactDOM.findDOMNode(this);
    // const node =document.getElementById("ani")
    // console.log("node",node)
    // TweenMax.to("#ani", 4, {y:"300"})
    TweenMax.staggerFrom( "#ani", 1,
    {opacity:0.2,x:200, backgroundColor:"blue"}
    )*/
>>>>>>> dev
  }

  typeFilter = event => {
    const type = event.target.value;
    this.setState({ typeFilter: type });
  };
  categoryFilter = event => {
    const type = event.target.value;
    this.setState({ categoryFilter: type });
  };

  handleNavButtonClick = event => {
    const clickedButton = event.target.value.toUpperCase();
    this.setState((prevState, props) => {
      return { navButtonActive: NavButtonsEnum[clickedButton] };
    });
  };
  handleMusicianButtonClick = event => {
    const clickedButton = event.target.value.toUpperCase();
    this.setState((prevState, props) => {
      return { musicianButtonActive: MusicianButtonsEnum[clickedButton] };
    });
  };
  handleVenueButtonClick = event => {
    const clickedButton = event.target.value.toUpperCase();
    this.setState((prevState, props) => {
      return { venueButtonActive: VenueButtonsEnum[clickedButton] };
    });
  };


  handleFilter = () => {
    let nav1 = this.state.navButtonActive;
    let nav2 = this.state.musicians;
  };

  render() {
    const nav =   ['all','Musicians','Venues', 'Businesses'];
    const musicians =   ['all','Bands','Djs', 'Soloists'];
    const venues =   ['all','Civic','North', 'South'];

    let norm = "filter-button"
    let active = "filter-button active"

    const { navButtonActive } = this.state;

    if ( Array.isArray(this.state.directory) ) {
      console.log("%c TRUE", "color:green");

      const findSelectedListDB = (value, array) => {
        let result = []
        console.log(array,  value);
        array.map( (listing) => {
          if (listing.type === value){
            console.log("yes",value);
            result.push(listing)
          }
        })
        return result
      }

      const bandNames = findSelectedListDB("1", this.state.directory)
      const venueNames = findSelectedListDB("2", this.state.directory)
      const businessNames = findSelectedListDB("3", this.state.directory)
      const all = bandNames.concat(venueNames).concat(businessNames)
      const selected = []
      bandNames.filter( (band) => {
        band.type === musicians[this.state.musicianButtonActive] && selected.push(band);
      })
    }else{
      console.log("%c FALSE", "color:red");

      const findSelectedList = (type) => {
        let result = []
        this.state.demo.data[type].filter( (k) => {
          result.push(k)
        })
        return result
      }

      const bandNames = findSelectedList('musicians')
      const venueNames = findSelectedList('venues')
      const businessNames = findSelectedList('businesses')
      const all = bandNames.concat(venueNames).concat(businessNames)

      const selected = []
      bandNames.filter( (band) => {
        band.type === musicians[this.state.musicianButtonActive] && selected.push(band);
      })

    }


<<<<<<< HEAD
      return (!Array.isArray(this.state.directory) ?
        (null)
      : (
        <div className="directory">
=======
      return (
      <div id="ani" className="directory">
>>>>>>> dev
        <div className="filters">
          <FilterForm
            color="#C8FF5D"
            handleClick={this.handleNavButtonClick}
            activeButton={this.state.navButtonActive}
            array={nav}
          />

          {navButtonActive === 1 ? (
            <FilterForm
              color="#FF2D61"
              handleClick={this.handleMusicianButtonClick}
              activeButton={this.state.musicianButtonActive}
              array={musicians}
            />
          ) : navButtonActive === 2 ? (
            <FilterForm
              color="#E8CF3B"
              handleClick={this.handleVenueButtonClick}
              activeButton={this.state.venueButtonActive}
              array={venues}
            />
          ) : (
            <div style={{ height: 58 }} />
          )}
        </div>
        {/*
        {navButtonActive === 0 && <DirectoryGrid listing={all} />}
        {navButtonActive === 1 && <DirectoryGrid listing={bandNames} />}
        {navButtonActive === 2 && <DirectoryGrid listing={venueNames} />}
        {navButtonActive === 3 && <DirectoryGrid listing={businessNames} />}
        */}
      </div>
    ))
  }
}

export default Directory;
