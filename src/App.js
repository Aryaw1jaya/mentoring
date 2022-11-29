import "./App.css";
import { Page } from "./components/Page";
import { Fetch } from "./components/Fetch";
import { Fetch2 } from "./components/Fetch2";

function App() {
  return (
    <div className="App bg-slate-600 px-10 py-3">
      <Page />
      <Fetch />
    </div>
  );
}

export default App;
