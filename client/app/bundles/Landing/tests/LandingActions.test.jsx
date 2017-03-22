/* global describe, xit, it, expect, afterEach */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  analizeRepository,
  receiveDockerfile,
  receiveDockercompose,
} from '../actions/LandingActions';
import {
  RECEIVE_DOCKERFILE,
  RECEIVE_DOCKERCOMPOSE,
} from '../constants/LandingConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to receive a dockerfile', () => {
    const dockerfile = '';
    const expectedAction = {
      type: RECEIVE_DOCKERFILE,
      dockerfile,
    };
    expect(receiveDockerfile('')).toEqual(expectedAction);
  });

  it('should create an action to receive a dockercompos', () => {
    const dockercompose = '';
    const expectedAction = {
      type: RECEIVE_DOCKERCOMPOSE,
      dockercompose,
    };
    expect(receiveDockercompose('')).toEqual(expectedAction);
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates RECEIVE_DOCKERFILE & RECEIVE_DOCKERCOMPOSE when analizing repository has been done', () => {
    nock('https://whalesapi.dev/')
      .get('/analize')
      .reply(200, {
        body: {
          dockerfile: '',
          dockercompose: '',
        },
      });

    const expectedActions = [
      {
        type: RECEIVE_DOCKERFILE,
        dockerfile: '',
      },
      {
        type: RECEIVE_DOCKERCOMPOSE,
        dockercompose: '',
      },
    ];

    const store = mockStore({
      repository: '',
      repositories: [],
      dockerfile: '',
      dockercompose: '',
    });

    return store.dispatch(analizeRepository('https://fake.git'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
