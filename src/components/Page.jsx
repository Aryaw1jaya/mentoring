import { Chosen } from "./Chosen";
import { PokemonList } from "./PokemonList";
import { pokemon } from "./Pokemon";
import * as Other from "./Others";
import { useState } from "react";

export function Page() {
  return (
    <div>
      <Chosen>
        <h1 className="text-white font-semibold text-3xl">Pilihanmu</h1>
        <Other.Image imgUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" />
        <Other.Name name="Nama Pokemon" className="rounded" />
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
