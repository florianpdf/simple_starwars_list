import React, { Component } from 'react'

import './Cards.css';

class Cards extends Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {

    return (
      <div className='pokemon'>
        <p>{this.capitalizeFirstLetter(this.props.name)}</p>
        <img src={this.props.url} alt={this.props.name} />
      </div>
    )
  }
}

export default Cards
