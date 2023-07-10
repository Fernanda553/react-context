import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
