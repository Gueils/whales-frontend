/* global document, LoadingAnimation */

import React, { PropTypes } from 'react';

export default class LandingComponent extends React.Component {
  static propTypes = {
    sendSourceUrl: PropTypes.func.isRequired,
    repository: PropTypes.string.isRequired,
    repositories: PropTypes.array.isRequired,
  };

  prepareLoading = () => {
    const prefixLoadingAnimation = document.getElementsByClassName('prefix-loading-animation')[0];
    const linkToGithub = document.getElementById('load-repos');

    if (linkToGithub) {
      linkToGithub.className = 'disabled';
    }

    prefixLoadingAnimation.innerHTML = 'Dockerizing...<img src="/whales.gif" alt="Whales" />';
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.sourceUrlInput.disabled = true;

    this.prepareLoading();

    this.props.sendSourceUrl(this.sourceUrlInput.value);
  }

  handleChange = (event) => {
    this.prepareLoading();

    this.selectInput.disabled = true;

    this.props.sendSourceUrl(event.target.value);
  }

  renderSelectOptions = () => {
    let options = [];

    this.props.repositories.forEach((element) => {
      options.push(<option key={element.key} value={element.value}>{element.key}</option>)
    });

    return options;
  }

  renderInputOrSelect = () => {
    if (this.props.repositories.length > 0) {
      return (
        <select className="app__form-container__form__container__select" ref={(input) => { this.selectInput = input; } } value={this.props.repositories[0]} onChange={this.handleChange} id="sourceRepos">
          {this.renderSelectOptions()}
        </select>
      )
    } else {
      return (
        <div>
          <input
            ref={(input) => { this.sourceUrlInput = input; }}
            id="sourceUrl"
            type="text"
            defaultValue={this.props.repository}
            className="app__form-container__form__container__input"
            placeholder="Paste a Repo URL"
          />

          <span>
          or
          </span>

          <a href="/auth/github" id="load-repos">
            <i className="fa fa-github fa-4x" aria-hidden="true"></i>
          </a>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="app__form-container">
        <form className="app__form-container__form" onSubmit={this.handleSubmit}>
          <label htmlFor="name" className="app__form-container__form__label">
            <span className="prefix-loading-animation"></span><span className="loading-animation"></span>
          </label>
          <div className="app__form-container__form__container">
            {this.renderInputOrSelect()}
          </div>
        </form>
      </div>
    );
  }
}
