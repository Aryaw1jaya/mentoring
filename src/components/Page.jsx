import { Chosen } from "./Chosen";
import { PokemonList } from "./PokemonList";
import { pokemon } from "./Pokemon";
import * as Other from "./Others";
import { useState } from "react";

export function Page() {
  const [chosen, setChosen] = useState(null);
  return (
    <div>
      <Chosen>
        <h1>Pilihanmu</h1>
        <img
          className="w-1/3 h-50 mx-auto"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          alt=""
        />
        <h2>Bulbasaur</h2>
      </Chosen>
      <br />
      <PokemonList>
        {pokemon.map((pokemons) => (
          <Other.Card>
            <Other.Name name={pokemons.name} />
            <Other.Image
              imgUrl={pokemons.sprites.other.dream_world.front_default}
            />
            <Other.Button />
          </Other.Card>
        ))}
      </PokemonList>
    </div>
  );
}
