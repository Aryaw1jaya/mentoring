function Name({ name }) {
  return <h1 className="font-bold text-2xl mt-4">{name}</h1>;
}

function Image({ imgUrl }) {
  return (
    <img className="w-2/3 h-30 mx-auto" src={imgUrl} alt="pokemon_image" />
  );
}

function Button({ props }) {
  return (
    <button
      onClick={props}
      className="w-100 bg-blue-500 p-3 mb-3 rounded-xl hover:bg-blue-400"
    >
      Choose Me
    </button>
  );
}

function Card({ children }) {
  return (
    <div className="w-100 bg-cyan-400 text-white rounded-2xl mx-1">
      {children}
    </div>
  );
}

export { Card, Name, Image, Button };
