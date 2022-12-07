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

  useEffect(() => {
    const fetchAssets = async () => {
      const response = await fetch(`${import.meta.env.VITE_DATA_URL}`);
      const data = await response.json();

      setAssets(() => {
        return [...data];
      });
    };

    fetchAssets();
  }, []);

  const handleSearchQuery = (text) => {
    setSearchQuery(text);
  };

  const handleEditMode = (status) => {
    setEditMode(status);
  };

  const handleAssetCreate = (newAsset) => {
    setAssets((prevState) => [...prevState, newAsset]);
  };

  const handleAssetEdit = (editedAsset) => {
    setAssets((prevState) =>
      prevState.map((asset) => {
        if (asset.id === editedAsset.id) {
          return editedAsset;
        }
        return asset;
      })
    );
  };

  const handleAssetDelete = (id) => {
    setAssets((prevState) => prevState.filter((asset) => asset.id !== id));
  };

  return (
    <AssetContext.Provider
      value={{
        assets: searchQuery ? filteredItems(searchQuery, assets) : assets,
        handleSearchQuery,
        editMode,
        handleEditMode,
        handleAssetCreate,
        handleAssetEdit,
        handleAssetDelete,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

export default AssetContext;
