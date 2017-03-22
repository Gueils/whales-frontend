import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import LandingReducer from '../reducers/LandingReducer';

const configureStore = (railsProps) => {
  const props = railsProps;

  return createStore(LandingReducer,
    props,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
    )),
  );
};

export default configureStore;
