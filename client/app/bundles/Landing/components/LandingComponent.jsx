/* global document, LoadingAnimation */
import React, { PropTypes } from 'react';

export default class LandingComponent extends React.Component {
  static propTypes = {
    sendSourceUrl: PropTypes.func.isRequired,
    repository: PropTypes.string.isRequired,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.sourceUrlInput.disabled = true;

    const loadingAnimation = document.getElementsByClassName('loading-animation')[0];
    const prefixLoadingAnimation = document.getElementsByClassName('prefix-loading-animation')[0];

    prefixLoadingAnimation.innerHTML = 'Dockerizing...';

    new LoadingAnimation(loadingAnimation, ['&ndash;', '\\', '|', '/'], 150).animate();

    this.props.sendSourceUrl(this.sourceUrlInput.value);
  }

  render() {
    const repository = this.props.repository;

    return (
      <div className="app__form-container">
        <form className="app__form-container__form" onSubmit={this.handleSubmit}>
          <label htmlFor="name" className="app__form-container__form__label">
            <span className="prefix-loading-animation">Dockerize your App Right Away</span><span className="loading-animation"></span>
          </label>
          <input
            ref={(input) => { this.sourceUrlInput = input; }}
            id="sourceUrl"
            type="text"
            defaultValue={repository}
            className="app__form-container__form__input"
            placeholder="Paste a Repo URL"
          />
        </form>
      </div>
    );
  }
}
