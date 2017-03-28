/* global WorkspaceController, document, window */

import {
  RECEIVE_DOCKERFILE,
  RECEIVE_DOCKERCOMPOSE,
  RECEIVE_REPOSITORIES } from '../constants/LandingConstants';
import * as RepositoryApi from '../../../lib/api/RepositoryApi';

export const receiveDockerfile = dockerfile => ({
  type: RECEIVE_DOCKERFILE,
  dockerfile,
});

export const receiveDockercompose = dockercompose => ({
  type: RECEIVE_DOCKERCOMPOSE,
  dockercompose,
});

export const receiveRepositories = repositories => ({
  type: RECEIVE_REPOSITORIES,
  repositories,
})

export const updateFilesContainer = (dockerfile, dockercompose) => {
  const prefixLoadingAnimation = document.getElementsByClassName('prefix-loading-animation')[0];
  prefixLoadingAnimation.innerHTML = "You're welcome!";

  const loadingAnimation = document.getElementsByClassName('loading-animation')[0];
  loadingAnimation.className = "useless";
  loadingAnimation.innerHTML = ' :)';
  WorkspaceController.hideRestOfTheLanding().showFiles(dockerfile, dockercompose);
};

export const analizeRepository = repository => (dispatch) => {
  return RepositoryApi.analize(repository)
    .then((response) => {
      dispatch(receiveDockerfile(response.data.dockerfile));
      dispatch(receiveDockercompose(response.data.dockercompose));
      updateFilesContainer(response.data.dockerfile, response.data.dockercompose);
    })
    .catch((error) => {
      console.log(error);
    });
};
