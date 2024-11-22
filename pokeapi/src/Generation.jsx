import React, { useEffect, useState } from "react";

const Generation = ({ gen }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      let offset = 0;
      if (gen === 2) offset = 151;
      if (gen === 3) offset = 251;
      const randomIds = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 100 + offset + 1)
      );
      const promises = randomIds.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
      );
      const data = await Promise.all(promises);
      const formatted = data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other["official-artwork"].front_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
      }));
      setPokemonList(formatted);
    };
    fetchPokemon();
  }, [gen]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
          <h4>{pokemon.name} (# {pokemon.id})</h4>
          <img src={pokemon.image} alt={pokemon.name} style={{ width: "100%" }} />
          <p>HP: {pokemon.hp}</p>
          <p>Ataque: {pokemon.attack}</p>
          <p>Defensa: {pokemon.defense}</p>
        </div>
      ))}
    </div>
  );
};

export default Generation;
