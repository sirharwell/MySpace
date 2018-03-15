import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchDude from './FetchDude';
import { Switch, Route } from 'react-router-dom';
import Dudes from './Dudes';
import DudeView from './DudeView'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchDude>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route path="/dudes" component={Dudes} />
            <Route exact path="/dudes/:id" component={DudeView} />
            <Route component={NoMatch} />
          </Switch>
        </FetchDude>
      </div>
    );
  }
}

export default App;
