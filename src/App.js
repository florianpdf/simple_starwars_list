import React, { Component } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';

import starwars from './data/starwars'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      backgroundColor: 'white',
      filter: 'All'
    }
  }
  
  onChangeBackground = (event) => {
    this.setState({
      backgroundColor: event.target.value
    })
  }

  onFilter = (event) => {
    this.setState({
      ...this.state,
      filter: event.target.value
    })
  }

  colorOptions = ['white', 'black']
  cities = [...new Set(starwars.map(person => person.homeworld))].concat(['All'])

  filterPersons() {
    return this.state.filter !== 'All' 
      ? starwars.filter(person => person.homeworld === this.state.filter)
      : starwars
  }

  render() {
    return (
      <div className={`app ${this.state.backgroundColor}`}>
        <div className="header">
          <Header 
            title='Starwars' 
            total={starwars.length} 
            onChangeBackground={this.onChangeBackground}
            onFilter={this.onFilter}
            colorOptions={this.colorOptions}
            cityOptions={this.cities}
          />
        </div>
        <div className='list'>
          {
            starwars.map(picture => {
              <img src={picture.src} />
            })
          }
          
        </div>
      </div>
    );
  }
}

export default App;
