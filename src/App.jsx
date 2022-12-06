import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AssetsList from "./pages/AssetsList";
import Asset from "./pages/Asset";
import Header from "./components/Header";
import AssetForm from "./pages/AssetForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/assets" element={<AssetsList />} />
        <Route path="/assets/:id" element={<Asset />} />
        <Route path="/asset" element={<AssetForm />} />
      </Routes>
    </>
  );
}

export default App;
