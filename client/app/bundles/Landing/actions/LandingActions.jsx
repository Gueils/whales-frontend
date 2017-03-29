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
  const linkToGithub = document.getElementById('load-repos');
  const selectInput = document.getElementById('sourceRepos');
  const sourceUrl = document.getElementById('sourceUrl');

  if (selectInput) {
    selectInput.disabled = false;
  } else {
    sourceUrl.disabled = false;
  }

  if (linkToGithub) {

    linkToGithub.className = '';
  }

  prefixLoadingAnimation.innerHTML = "You're welcome!";
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
      if (error) {
        console.log(error);
        alert("We're very sorry but something went wrong. Don't worry, we already got the bad news and we'll work hard to help you better.")
      }
    });
};
