import React, { useState, useEffect } from 'react';

const PokemonCard = ({ id }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setPokemon({
          numero: data.id,
          nombre: data.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/officialartwork/${data.id}.png`,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
        });
      });
  }, [id]);

  return (
    <div className="pokemon-card">
      <h3>{pokemon.nombre} (#{pokemon.numero})</h3>
      <img src={pokemon.img} alt={pokemon.nombre} />
      <p>HP: {pokemon.hp}</p>
      <p>Ataque: {pokemon.ataque}</p>
      <p>Defensa: {pokemon.defensa}</p>
    </div>
  );
};

export default PokemonCard;
