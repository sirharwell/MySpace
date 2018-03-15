import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Dudes from './Dudes';
import DudeView from './DudeView';
import { getDudes } from '../actions/dudes';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchDudes extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getDudes(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/dudes" component={Dudes} />
          <Route exact path="/dudes/:id" component={DudeView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchDudes);
