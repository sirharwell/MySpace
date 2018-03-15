import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Header textAlign="center" as="h3">Welcome To The <Link to="/dudes">DudeSpace</Link></Header>
    );
  }
}

export default Home;
