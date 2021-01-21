import Cards from './components/Cards';
import React, { Component } from 'react';

import Header from './components/Header';

import starwars from './data/starwars'

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'white',
      filter: ''
    }
  }

  handleChange = e => {
    this.setState({
      color: e.target.value
    })
  }

  handleFilter = e => {
    this.setState({
      ...this.state,
      filter: e.target.value
    })
  }

  filterArray = () => {
    return this.state.filter && this.state.filter !== 'all' ? starwars.filter(person => person.homeworld === this.state.filter) : starwars
  }
  render() {
    return (
      <div className={`app ${this.state.color}`}>
        <div>
          <Header 
            title='Starwars' 
            total={starwars.length} 
            onFilter={this.handleFilter} 
            options={[...new Set(starwars.map(person => person.homeworld))]}
          />
          <div className='search'>
            <select onChange={e => this.handleChange(e)}>
              <option value="white">White</option>
              <option value="black">Black</option>
            </select>
          </div>
        </div>
        <div className='list'>
          {
            this.filterArray().map(person => {
              return <Cards key={person.id} name={person.name} picture={person.pic}/>
            })
          }  
        </div>
      </div>
    );
  }
}

export default App;
