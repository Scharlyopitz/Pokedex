import Home from "./assets/components/Home";
import { Route, Routes } from "react-router";
import PokemonStats from "./assets/components/PokemonStats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PokemonStats/:name" element={<PokemonStats />} />
    </Routes>
  );
}

export default App;
