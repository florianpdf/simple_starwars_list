import React, { Component } from 'react'

import './Cards.css';

class Cards extends Component {

  render() {

    return (
      <div className='person'>
        <p>{this.props.name}</p>
        <img className='img' src={this.props.picture} alt={this.props.name} />
      </div>
    )
  }
}

export default Cards
