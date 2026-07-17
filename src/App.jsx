import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Survei from "./pages/Survei";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survei" element={<Survei />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;