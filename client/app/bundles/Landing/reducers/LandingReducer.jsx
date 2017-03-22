import { combineReducers } from 'redux';
import {
  ANALYZE_REPOSITORY,
  RECEIVE_DOCKERFILE,
  RECEIVE_DOCKERCOMPOSE,
  ADD_REPOSITORY } from '../constants/LandingConstants';

const landingDefaultState = {
  repository: '',
  repositories: [],
  dockerfile: '',
  dockercompose: '',
};

const repository = (state = landingDefaultState, action) => {
  switch (action.type) {
    case ANALYZE_REPOSITORY:
      return action.repository;
    default:
      return state;
  }
};

const repositories = (state = landingDefaultState, action) => {
  switch (action.type) {
    case ADD_REPOSITORY: {
      const newRepository = action.repository;
      return Object.assign({}, state, {
        repository: newRepository,
        repositories: [...state.repositories, newRepository],
      });
    }
    default:
      return state;
  }
};

const dockerfile = (state = landingDefaultState, action) => {
  switch (action.type) {
    case RECEIVE_DOCKERFILE:
      return action.dockerfile;
    default:
      return state;
  }
};

const dockercompose = (state = landingDefaultState, action) => {
  switch (action.type) {
    case RECEIVE_DOCKERCOMPOSE:
      return action.dockercompose;
    default:
      return state;
  }
};

const LandingReducer = combineReducers({
  repository,
  repositories,
  dockerfile,
  dockercompose,
});

export default LandingReducer;
