import React from 'react';
import FilterForm from './FilterForm';
import DirectoryGrid from './DirectoryGrid';
import * as auth from '../api/auth';

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
    demo,
    filterType: 'all',
    categoryFilter: 'all',
    navButtonActive: NavButtonsEnum.ALL,
    musicianButtonActive: MusicianButtonsEnum.ALL,
    venueButtonActive: VenueButtonsEnum.ALL
  };

  componentDidMount() {
    let directory = []
    auth.findAllUser().then(res => {
      res.map( (profile) => {
        const ob = {}
        ob._id = profile.profile._id
        ob.user =  profile.profile.user
        ob.type =  profile.profile.type
        ob.contactDetails = profile.profile.contactDetails[0]
        ob.multimedia = profile.profile.multimedia[0]
        ob.profile = profile.profile.profile[0]
        ob.socialMediaIcons = profile.profile.socialMediaIcons[0]

        directory.push(ob)
      });
    })
    console.log("directory", directory);


    this.setState({ directory: directory });
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
    const { navButtonActive } = this.state;

    const nav =   ['all','Musicians','Venues', 'Businesses'];
    const musicians =   ['all','Bands','Djs', 'Soloists'];
    const venues =   ['all','Civic','North', 'South'];

     let norm = "filter-button"
     let active = "filter-button active"

    const findSelectedList = (type) => {
      let result = []
      this.state.demo.data[type].filter( (k) => {
        result.push(k)
      })
      return result
    }

    let bandNames = findSelectedList('musicians')
    let venueNames = findSelectedList('venues')
    let businessNames = findSelectedList('businesses')
    const all = bandNames.concat(venueNames).concat(businessNames)
      console.log(all);
    const selected = []
    bandNames.filter( (band) => {
      band.type === musicians[this.state.musicianButtonActive] && selected.push(band);
    })


      return (
      <div className="directory">
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
        {navButtonActive === 0 && <DirectoryGrid listing={all} />}
        {navButtonActive === 1 && <DirectoryGrid listing={bandNames} />}
        {navButtonActive === 2 && <DirectoryGrid listing={venueNames} />}
        {navButtonActive === 3 && <DirectoryGrid listing={businessNames} />}
      </div>
    )
  }
}

export default Directory;
