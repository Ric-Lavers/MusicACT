import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class request extends Component {
  state = { saveStatus: 'IDEL' };

  save = event => {
    event.preventDefault();
    this.setState(() => ({ saveStatus: 'WAITING' }));
    this.progressRequest()
      .then(success => this.setState(() => ({ saveStatus: 'SUCCESS' })))
      .catch(failure => this.setState(() => ({ saveStatus: 'FAILURE' })));
  };

  // if data is get response.
  progressRequest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('Success!');
        } else {
          reject('Failure!');
        }
      }, 1500);
    });
  };
  //
  //

  // progress = () => {
  //   if (this.state.saveStatus == 'waiting') {
  //     return <CircularProgress />;
  //   }
  //   null;
  // };

  render() {
    return (
      <div>
        <button onClick={this.save} />
        {/* {this.progress()} */}
        {this.state.saveStatus}
      </div>
    );
  }
}
