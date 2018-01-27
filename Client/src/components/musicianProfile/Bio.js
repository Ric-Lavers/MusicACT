import React from 'react'

class Bio extends React.Component {
  state= { bioOverflow: null }

  handleBioOverflow = () => {
    this.setState({ bioOverflow: !this.state.bioOverflow });
  };

  componentDidMount() {
    let bioHeight = document.getElementById('profile-bio-content').clientHeight;
    if (bioHeight > 270) {
      this.setState({ bioOverflow: true, bioHeight: bioHeight });
    } else {
      this.setState({ bioOverflow: false, bioHeight: bioHeight });
    }
    console.log(bioHeight);
    // let overflow = this.isOverflown(document.getElementsByClassName('profile-bio')[0])
    // this.setState({bioOverflow:overflow})
  }

  render (){
    const bioStyle = this.state.bioOverflow
      ? { postion:"relative" , maxHeight: 270, overflow:"hidden"}
      : { postion:"relative" , height: '100%' };
    const overlay =  this.state.bioOverflow?
    {height:40,postion:"absolute",background:"linear-gradient(rgba(250,200,200,0), rgba(250,250,250,1)"}
    :{postion:"absolute"}
// ,rgba(250, 250, 250, 1.00) 10%)
    return(
      <div>
        {!this.state.bioOverflow &&
          this.state.bioHeight > 270 && (
            <div
              onClick={this.handleBioOverflow}
              id="less-button"
              className="more-button"
            >
              less
            </div>
          )}
          <div className="profile-header">
            <div className="profile-title">
              <h2>{this.props.name && this.props.name}</h2>
            </div>
          </div>

        <div style={ bioStyle } className="profile-bio">
          <p id="profile-bio-content">
            {this.props.bio && this.props.bio}
          </p>
          <div className="profile-overlay" style={overlay}>

          </div>
        </div>
        {this.state.bioOverflow && (
          <div
            onClick={this.handleBioOverflow}
            id="more-button"
            className="more-button"
          >
            more
          </div>
        )}
      </div>
    )
  }
}

export default Bio;
