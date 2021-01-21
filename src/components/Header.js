import React, { Component } from 'react'

class Header extends Component {

  render() {

    return (
      <div className='header'>
        <h1 className='title'>{this.props.title} list - {this.props.total}</h1>
        <div className='select'>
          <select onChange={e => this.props.onFilter(e)}>
            <option value='all'>All</option>
            {this.props.options.map(option => <option value={option}>{option}</option>)}
          </select>
        </div>
      </div>
    )
  }
}

export default Header
