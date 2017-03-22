import React, { PropTypes } from 'react';

export default class LandingComponent extends React.Component {
  static propTypes = {
    sendSourceUrl: PropTypes.func.isRequired,
    repository: PropTypes.string.isRequired,
    dockerfile: PropTypes.string.isRequired,
    dockercompose: PropTypes.string.isRequired,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.sendSourceUrl(this.sourceUrlInput.value);
  }

  render() {
    const repository = this.props.repository;
    const dockerfile = this.props.dockerfile;
    const dockercompose = this.props.dockercompose;
    return (
      <div className="app__form-container">
        <form className="app__form-container__form" onSubmit={this.handleSubmit}>
          <label htmlFor="name" className="app__form-container__form__label">
            Github Repository
          </label>
          <input
            ref={(input) => { this.sourceUrlInput = input; }}
            id="sourceUrl"
            type="text"
            defaultValue={repository}
            className="app__form-container__form__input"
          />
        </form>
        <div className="app__form-container__files">
          <div className="app__form-container__files__dockerfile">
            <pre>
              <code className="dockerfil">
                {dockerfile}
              </code>
            </pre>
          </div>
          <div className="app__form-container__files__dockercompose">
            <pre>
              <code className="yaml">
                {dockercompose}
              </code>
            </pre>
          </div>
          <script>hljs.initHighlightingOnLoad();</script>
        </div>
      </div>
    );
  }
}
