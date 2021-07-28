import React from 'react';
import './App.css';
import {GET_CHARACTERS} from'./graphql/Queries';
import {useQuery} from 'react-apollo';

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const load = loading && <p>Loading...</p>
  

  return (
    
    <div className='container'>
      <h1>Rick and Morty and Erik J</h1>
        {load}
        <section className='lista-personajes'>
        {data &&
         data.characters.results.map(character=>{
          return(
            <section className='personaje'>
			<div className='personaje-header'>
				<div className='estado'>
					<span className={character.status}></span>
					<h4>{character.status}</h4>
				</div>
			</div>

			<div className='personaje-body'>
				<figure>
					<img src={character.image} alt={character.name} />
				</figure>

				<h2>{character.name}</h2>
				<p>
					Especie: <span>{character.species}</span> {character.gender}
				</p>
        <p>
        Origen: {character.origin.name}
        </p>
        <p>
        Location: {character.location.name}
        </p>
			</div>
		</section>
          )
        })}
        </section>
    </div>
  );
}

export default App;
