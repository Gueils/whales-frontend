import React, { PropTypes } from 'react';
import { analizeRepository } from '../actions/LandingActions';
import LandingComponent from '../components/LandingComponent';

export default class LandingContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  constructor(props, _railsContext) {
    super(props);
    this.store = _railsContext.store;
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  sendSourceUrl = (sourceUrl) => {
    this.store.dispatch(analizeRepository(sourceUrl));
  }

  render() {
    const state = this.store.getState();

    return (
      <div className="app">
        <LandingComponent
          sendSourceUrl={this.sendSourceUrl}
          repository={state.repository}
          repositories={state.repositories}
        />
      </div>
    );
  }
}
