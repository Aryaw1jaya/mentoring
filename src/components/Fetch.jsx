import { useState, useEffect } from "react";

export function Fetch() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <table className="border mx-auto my-5 text-white">
      <thead>
        <tr>
          <th className="border">Name</th>
          <th className="border">URL</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((pokemons) => (
          <tr key={pokemons.name}>
            <td className="border p-2">{pokemons.name}</td>
            <td className="border p-2 hover:bg-slate-200 hover:text-black">
              <a href={pokemons.url}>{pokemons.url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
