import React, { Component } from 'react'

import Select from './Select'

class Header extends Component {

  render() {

    return (
      <div>
        <h1 className='title'>{this.props.title} list - {this.props.total}</h1>
        <Select onChange={this.props.onChangeBackground} options={this.props.colorOptions}/>
        <Select onChange={this.props.onFilter} options={this.props.cityOptions}/>
      </div>
    )
  }
}

export default Header
