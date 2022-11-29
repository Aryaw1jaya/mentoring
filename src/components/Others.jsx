function Name({ name }) {
  return (
    <h1 className="rounded-3xl w-fit mx-auto px-8 py-1 my-1 text-black font-semibold text-xl bg-slate-300">
      {name}
    </h1>
  );
}

function Image({ imgUrl }) {
  return (
    <img className="w-3/4 mx-auto h-40" src={imgUrl} alt="pokemon_image" />
  );
}

function Button({ props }) {
  return (
    <button
      onClick={props}
      className="w-11/12 mx-auto my-3 p-3 font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-2xl"
    >
      Choose Me
    </button>
  );
}

function Card({ children }) {
  return (
    <div className="card mx-auto bg-slate-500 w-1/4 text-center rounded-3xl hover:bg-slate-400">
      {children}
    </div>
  );
}

export { Card, Name, Image, Button };
