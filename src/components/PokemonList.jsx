export function PokemonList({ children }) {
  return (
    <div id="pokemon-list" className="grid grid-cols-4 gap-2">
      {children}
    </div>
  );
}
