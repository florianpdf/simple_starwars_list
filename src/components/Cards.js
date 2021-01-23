import React, { Component } from 'react'
import Select from './Select'

class Cards extends Component {

  constructor(props){
    super(props)
    this.state = {
      color: 'white'
    }
  }

  handleChangeCardBackground = (event) => {
    this.setState({
      color: event.target.value
    })
  }

  render() {
    
    return (
      <div className={`person ${this.state.color}`}>
        <p>{this.props.name}</p>
        <img className='img' src={this.props.picture} alt={this.props.name} />
        <div>
          {/* <Select onChange={this.handleChangeCardBackground} options={this.props.options} /> */}
        </div>
      </div>
    )
  }
}

export default Cards
