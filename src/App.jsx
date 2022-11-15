import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1 className="bg-blue-400 text-white w-fit mx-auto py-2 px-4 text-center">
        Asset Management App
      </h1>
      <Routes>
        <Route exact path="/" element={<h2>Home</h2>} />
        <Route
          path="/asset"
          element={
            <>
              <h2>Asset Name</h2>
              <Link to="/">Home</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
