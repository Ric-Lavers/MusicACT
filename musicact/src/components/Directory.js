import React from 'react'
import ReactPlayer from 'react-player'

const demo = require('./demo.json');

const NavButtonsEnum = {
  ALL : 0,
  MUSICIANS : 1,
  VENUES : 2,
  BUSINESSES : 3
}

class Directory extends React.Component {

  state={
    demo,
    filterType:"all",
    categoryFilter:"all",
    navButtonActive: NavButtonsEnum.ALL
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

  render(){
    const { navButtonActive } = this.state;
    console.log(this.state.demo.data.musicians[1].type);
    console.log(typeof(this.state.demo.data.musicians));
    console.log(this.state.demo.data.musicians);
    console.log("filter",this.state.demo.data.musicians.filter( (x) => (x.type === "Band")));
      return (
        <div>
          <h2>type filter</h2>
            <form onClick={this.typeFilter} className="type-filter">
              <input
                type="button" value="All"
                className={navButtonActive === NavButtonsEnum.ALL ? 'type-filter-button-all active' : 'type-filter-button-all '}
                onClick={this.handleNavButtonClick}/>
              <input type="button" className={navButtonActive === NavButtonsEnum.MUSICIANS ? 'type-filter-button-all active' : 'type-filter-button-all '}
              onClick={this.handleNavButtonClick} value="Musicians"/>
              <input type="button" className={navButtonActive === NavButtonsEnum.VENUES ? 'type-filter-button-all active' : 'type-filter-button-all '}
                onClick={this.handleNavButtonClick} value="Venues"/>
              <input type="button" className={navButtonActive === NavButtonsEnum.BUSINESSES ? 'type-filter-button-all active' : 'type-filter-button-all '}
                onClick={this.handleNavButtonClick} value="Businesses"/>
            </form>


          <h2>category filter</h2>
            <form onClick={this.categoryFilter} className="category-filter">
              <input type="button" className="category-filter-button" value="Bands"/>
              <input type="button" className="category-filter-button" value="DJs"/>
              <input type="button" className="category-filter-button" value="Soloist"/>
            </form>
          <h2>genre filter</h2>

          <ReactPlayer url="https://soundcloud.com/pixelord/boost"
            controls
            width="50%"
            height="150px" />


        </div>
      )
    }
}

export default Directory;
