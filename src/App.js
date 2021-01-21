import Cards from './components/Cards';
import Header from './components/Header';

import starwars from './data/starwars'
import './App.css';

function App() {
  
  return (
    <div className="app">
      <div className="header">
        <Header title='Starwars' total={starwars.length} />
      </div>
      <div className='list'>
        {
          starwars.map(person => {
            return <Cards key={person.id} name={person.name} picture={person.pic}/>
          })
        }  
      </div>
    </div>
  );
}

export default App;
