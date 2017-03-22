import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/LandingStore';
import LandingContainer from '../containers/LandingContainer';

const LandingApp = props => (
  <Provider store={configureStore(props)}>
    <LandingContainer />
  </Provider>
);

export default LandingApp;
