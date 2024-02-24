import Card from "./assets/components/Card";
import Home from "./assets/components/Home";

import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Card />} />
    </Routes>
  );
}

export default App;
