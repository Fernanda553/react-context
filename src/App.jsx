import "./main.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import DataProvider from "./context/DataContext";

export default function App() {
  const [data, setData] = useState([]);

  const endpoint = "/fotos.json";

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.photos);
  };

  useEffect(() => {
    getData(endpoint);
  }, []);

  const allState = {
    data,
    setData,
  };

  return (
    <DataProvider.Provider value={allState}>
      <div className="App">
        <BrowserRouter>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider.Provider>
  );
}
