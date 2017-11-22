import React from 'react';
import PropTypes from 'prop-types'
import './progress-bar.scss';

export default class ProgressBarComponent extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.progressBar = {};
  }

  componentDidMount () {
    this.progressBar = document.getElementById('progressBar');
    this.progressBar.style.backgroundColor = this.props.color || '#0085ff';
    this.progressBar.style.animation = 'progressing ' + (this.props.duration || '10') + 's infinite linear ';
    this.progressBar.addEventListener("animationiteration", () => {//animationend animationiteration
      this.props.pFunctions.forEach((func) => {
        func.func(...func.paras);
      });
    }, false);
  }

  render () {
    return (
      <div>
        <div id="progressBar" className="progress-bar" />
      </div>
    );
  }
}

ProgressBarComponent.propTypes = {
  pFunctions: PropTypes.array.isRequired,
  color: PropTypes.string,
  duration: PropTypes.string
};