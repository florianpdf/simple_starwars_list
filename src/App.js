import Cards from './components/Cards';
import Header from './components/Header';

import pokemons from './data/pokemons'
import './App.css';

function getPictureUrl(url) {
  const id = url.split('/')[6]
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

function App() {
  const sortPokemons = pokemons.results.sort((a, b) => a.name.localeCompare(b.name))
  
  return (
    <div className="app">
      <div className="header">
        <Header title='Pokemons' total={pokemons.count} />
      </div>
      <div className='list'>
        {
          sortPokemons.map((pokemon, index) => {
            return <Cards key={index} name={pokemon.name} url={getPictureUrl(pokemon.url)}/>
          })
        }  
      </div>
    </div>
  );
}

export default App;
