import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const GenCard = ({ gen }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const generateRandomPokemons = (gen) => {
      let pokemonIds = [];
      if (gen === 1) pokemonIds = Array.from({ length: 151 }, (_, i) => i + 1);
      if (gen === 2) pokemonIds = Array.from({ length: 100 }, (_, i) => i + 152);
      if (gen === 3) pokemonIds = Array.from({ length: 135 }, (_, i) => i + 252);
      return pokemonIds;
    };

    const randomPokemons = generateRandomPokemons(gen).slice(0, 10);
    setPokemons(randomPokemons);
  }, [gen]);

  return (
    <div>
      <h2>Generación {gen}</h2>
      {pokemons.map(id => (
        <PokemonCard key={id} id={id} />
      ))}
    </div>
  );
};

export default GenCard;
