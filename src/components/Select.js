import React, { Component } from 'react'

class Select extends Component {
  
  render(){
    return(
      <div>
        <select 
          onChange={event => this.props.onChange(event)} 
          className='select'
        >
        {
          this.props.options.map((option, index) => {
            return <option key={index} value={option}>{option}</option>
          })
        }
        </select>
    </div>
  )}
}

export default Select
