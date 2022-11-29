import { Chosen } from "./Chosen";
import { PokemonList } from "./PokemonList";
import { pokemon } from "./Pokemon";
import * as Other from "./Others";
import { useState } from "react";

export function Page() {
  const [chosen, setChosen] = useState("");
  const [chosenImg, setChosenImg] = useState("");

  return (
    <div>
      <Chosen>
        <h1 className="text-white font-semibold text-3xl">Pilihanmu</h1>
        {chosenImg && <Other.Image imgUrl={chosenImg} /> ? (
          <Other.Image imgUrl={chosenImg} />
        ) : (
          <Other.Image imgUrl="https://i.imgur.com/7CbqVxV.png" />
        )}

        {chosen && <Other.Name name={chosen} /> ? (
          <Other.Name name={chosen} />
        ) : (
          <h1 className="text-white font-semibold text-xl">Nama pokemon</h1>
        )}
      </Chosen>
      <br />
      <PokemonList>
        {pokemon.map((pokemons) => (
          <Other.Card>
            <Other.Name name={pokemons.name} />
            <Other.Image
              imgUrl={pokemons.sprites.other.dream_world.front_default}
            />
            <Other.Button
              props={(e) =>
                setChosen(pokemons.name) &
                setChosenImg(pokemons.sprites.other.dream_world.front_default)
              }
            />
          </Other.Card>
        ))}
      </PokemonList>
    </div>
  );
}
