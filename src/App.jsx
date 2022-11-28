import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AssetsList from "./pages/AssetsList";
import Asset from "./pages/Asset";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-blue-400 text-white mx-auto py-2 px-4 text-center">
        Asset Management App
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/assets" element={<AssetsList />} />
        <Route path="/assets/:id" element={<Asset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
