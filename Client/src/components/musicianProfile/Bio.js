import React from 'react'
import {ReactCSSTransitionGroup as CTG} from 'react-addons-transition-group'
// This displays the Bioography and measures the div's height, if above 300px of text a more button is displayed, and less  when clicked. If below 300px of text no buttons are displayed

class Bio extends React.Component {
  state= {
    bioOverflow: null,
    bioHeight:null
  }

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
  }

  render (){
    const bioStyle = this.state.bioOverflow
      ? { postion:"relative" , maxHeight: 270, overflow:"hidden"}
      : { postion:"relative" , height: '100%' };
    const overlay =  this.state.bioOverflow?
    {height:40,postion:"absolute",background:"linear-gradient(rgba(250,200,200,0), rgba(250,250,250,1)"}
    :{postion:"absolute"}
    let lessStyle, moreStyle;
    if (!this.state.bioOverflow) {
      lessStyle={opacity:1};moreStyle={opacity:0}

    }else{
      lessStyle={opacity:0};moreStyle={opacity:1}
    };
    const bioHeight = this.state.bioHeight

    return(
      <div>
            {this.state.bioHeight>270 && !this.state.bioOverflow && <div
              key="_1"
              onClick={this.handleBioOverflow}
              id="less-button"
              className="more-button"
              style={lessStyle}>
              less
            </div> }
            <div className="profile-title">
              <h2>{this.props.name && this.props.name}</h2>
            </div>

        <div style={ bioStyle } className="profile-bio">
          <p id="profile-bio-content">
            {this.props.bio && this.props.bio}
          </p>
          <div className="profile-overlay" style={overlay}>
          </div>
        </div>
          {this.state.bioOverflow && <div
            onClick={this.handleBioOverflow}
            id="more-button"
            className="more-button"
            style={moreStyle}
          >
            more
          </div>}
      </div>
    )
  }
}

export default Bio;
