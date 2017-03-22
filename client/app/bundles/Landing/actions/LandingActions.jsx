import {
  RECEIVE_DOCKERFILE,
  RECEIVE_DOCKERCOMPOSE } from '../constants/LandingConstants';
import * as RepositoryApi from '../../../lib/api/RepositoryApi';

export const receiveDockerfile = dockerfile => ({
  type: RECEIVE_DOCKERFILE,
  dockerfile,
});

export const receiveDockercompose = dockercompose => ({
  type: RECEIVE_DOCKERCOMPOSE,
  dockercompose,
});

export const analizeRepository = repository => (dispatch) => {
  return RepositoryApi.analize(repository)
    .then((response) => {
      dispatch(receiveDockerfile(response.data.dockerfile));
      dispatch(receiveDockercompose(response.data.dockercompose));
    })
    .catch((error) => {
      console.log(error);
    });
};
