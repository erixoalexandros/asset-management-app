import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AssetsList from "./pages/AssetsList";
import Asset from "./pages/Asset";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/assets" element={<AssetsList />} />
        <Route path="/assets/:id" element={<Asset />} />
      </Routes>
    </>
  );
}

export default App;
