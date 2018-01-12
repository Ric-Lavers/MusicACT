import React from 'react'
import FilterForm from './FilterForm'
import DirectoryGrid from './DirectoryGrid';

const demo = require('./demo.json');

const NavButtonsEnum = {
  ALL : 0,
  MUSICIANS : 1,
  VENUES : 2,
  BUSINESSES : 3
}
const MusicianButtonsEnum = {
  ALL : 0,
  BANDS : 1,
  DJS : 2,
  SOLOISTS : 3
}

class Directory extends React.Component {

  state={
    demo,
    filterType:"all",
    categoryFilter:"all",
    navButtonActive: NavButtonsEnum.ALL,
    musicianButtonActive: MusicianButtonsEnum.ALL
  }

  typeFilter = (event)=>{
    const type = event.target.value
    this.setState({typeFilter:type})
  }
  categoryFilter = (event)=>{
    const type = event.target.value
    this.setState({categoryFilter:type})
  }

  handleNavButtonClick = (event) => {
    const clickedButton = event.target.value.toUpperCase();
    this.setState((prevState, props) => {
      return {navButtonActive: NavButtonsEnum[clickedButton]};
    });
  }
  handleMusicianButtonClick = (event) => {
    const clickedButton = event.target.value.toUpperCase();
    this.setState((prevState, props) => {
      return {musicianButtonActive: MusicianButtonsEnum[clickedButton]};
    });
  }

  handleHover = (event) =>{
    console.log( event.target);
  }

  render(){

    // console.log(this.state.demo.data.musicians[1].type);
    // console.log(typeof(this.state.demo.data.musicians));
    // console.log(this.state.demo.data.musicians);
    // console.log("filter",this.state.demo.data.musicians.filter( (x) => (x.type === "Band")));

    const { navButtonActive } = this.state;
    const nav =   ['all','Musicians','Venues', 'Businesses'];
    const musicians =   ['all','Bands','Djs', 'Soloists'];

     let norm = "filter-button"
     let active = "filter-button active"
     console.log();


    const bandNames = []
    this.state.demo.data.musicians.filter( (musician) => {
     bandNames.push(musician.profile.name)
    })
    const venueNames = []
    this.state.demo.data.venues.filter( (venue) => {
     venueNames.push(venue.profile.name)
    })
    const businessNames = []
    this.state.demo.data.businesses.filter( (business) => {
     businessNames.push(business.profile.name)
    })

    const all = bandNames.concat(venueNames).concat(businessNames)
    console.log("bandNames",bandNames);
    console.log("all", all);

      return (
        <div className="directory">

          <div className="filters">
            <FilterForm
              color="#C8FF5D"
              handleClick={this.handleNavButtonClick}
              activeButton={this.state.navButtonActive}
              array={ nav } />

            {navButtonActive === 1?
              (<FilterForm
                color="#FF2D61"
                handleClick={this.handleMusicianButtonClick}
                activeButton={this.state.musicianButtonActive}
                array={ musicians } />):
                (<div style={{height:58}}></div>)
            }

          </div>
          {navButtonActive === 0 &&
          <DirectoryGrid listing= {all} />}
          {navButtonActive === 1 &&
          <DirectoryGrid listing= {bandNames}/>}
          {navButtonActive === 2 &&
          <DirectoryGrid listing= {venueNames}/>}
          {navButtonActive === 3 &&
          <DirectoryGrid listing= {businessNames}/>}


        </div>
      )
    }
}

export default Directory;


//
// <input type="button" className="filter-button-all" value="All"/>
// <input type="button" className="filter-button" value="Bands"/>
// <input type="button" className="filter-button" value="DJs"/>
// <input type="button" className="filter-button" value="Soloist"/>
