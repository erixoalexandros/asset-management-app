import { createContext, useState, useEffect } from "react";

const AssetContext = createContext();

export const AssetProvider = ({ children }) => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const response = await fetch("http://127.0.0.1:5000/assets");
      const data = await response.json();

      setAssets(() => {
        return [...data];
      });
    };

    fetchAssets();
  }, []);

  return (
    <AssetContext.Provider value={assets}>{children}</AssetContext.Provider>
  );
};

export default AssetContext;
