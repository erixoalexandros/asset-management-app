import AssetCard from "../components/AssetCard";
import { useContext } from "react";
import AssetContext from "../context/AssetContext";
import SearchBar from "../components/SearchBar";

function AssetsList() {
  const { assets } = useContext(AssetContext);

  return (
    <>
      <SearchBar />
      <div className="mt-4 space-y-4">
        {assets.map((asset) => {
          return (
            <AssetCard
              key={asset.id}
              tagName={asset.tagName}
              manufacturer={asset.manufacturer}
              model={asset.model}
              year={asset.year}
            />
          );
        })}
      </div>
    </>
  );
}

export default AssetsList;
