import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AssetsList from "./pages/AssetsList";
import Asset from "./pages/Asset";
import Header from "./components/Header";
import AssetForm from "./pages/AssetForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/assets" element={<AssetsList />} />
        <Route path="/assets/:id" element={<Asset />} />
        <Route path="/assets/edit/:id" element={<AssetForm />} />
        <Route path="/assets/new" element={<AssetForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
