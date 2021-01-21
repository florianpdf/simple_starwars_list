import React, { Component } from 'react'

class Cards extends Component {
  state = {
    color: 'white'
  }

  handleChange = (e) => {
    this.setState({
      color: e.target.value
    })
  }

  render() {

    return (
      <div className={`person ${this.state.color}`}>
        <p>{this.props.name}</p>
        <img className='img' src={this.props.picture} alt={this.props.name} />
        <div className='select'>
          <select onChange={e => this.handleChange(e)}>
            <option value='white'>White</option>
            <option value='black'>Black</option>
          </select>  
        </div>
        
      </div>
    )
  }
}

export default Cards
