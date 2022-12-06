import { createContext, useState, useEffect } from "react";

const AssetContext = createContext();

const filteredItems = (query, items) => {
  return items.filter((item) =>
    item.tagName.toLowerCase().includes(query.toLowerCase())
  );
};

export const AssetProvider = ({ children }) => {
  const [assets, setAssets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleSearchQuery = (text) => {
    setSearchQuery(text);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    const fetchAssets = async () => {
      const response = await fetch(`${import.meta.env.VITE_DATA_URL}/assets`);
      const data = await response.json();

      setAssets(() => {
        return [...data];
      });
    };
    fetchAssets();
  }, []);

  return (
    <AssetContext.Provider
      value={{
        assets: searchQuery ? filteredItems(searchQuery, assets) : assets,
        handleSearchQuery,
        editMode,
        handleEditMode,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

export default AssetContext;
