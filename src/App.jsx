import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AssetsList from "./pages/AssetsList";
import Asset from "./pages/Asset";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header  />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/assets" element={<AssetsList />} />
        <Route path="/assets/:id" element={<Asset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
