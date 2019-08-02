import React, { Component } from 'react';

import './loader.styles.css';

export default class MiniLoader extends Component {
  render() {
    return (
      <div className="loader-text">
        { this.props.children }
      </div>
    );
  }
}