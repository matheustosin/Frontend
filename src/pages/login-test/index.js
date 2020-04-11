import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem('token')
    };
  }

  render() {
    return (
      <h1>Token Key: {this.state.token}</h1>
    )
  }
}

export default withRouter(LoginTest);
