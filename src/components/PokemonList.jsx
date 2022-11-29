export function PokemonList({ children }) {
  return (
    <div id="pokemon-list" className="flex flex-wrap justify-center gap-2">
      {children}
    </div>
  );
}
