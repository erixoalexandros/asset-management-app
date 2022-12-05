import AssetCard from "../components/AssetCard";
import { useContext } from "react";
import AssetContext from "../context/AssetContext";
import SearchBar from "../components/SearchBar";

function AssetsList() {
  const { assets } = useContext(AssetContext);

  return (
    <>
      <SearchBar />
      {!assets ? (
        "Loading..."
      ) : (
        <div className="mt-4 space-y-4">
          {assets.map(({ id, tagName, manufacturer, model, year }) => {
            return (
              <AssetCard
                key={id}
                id={id}
                tagName={tagName}
                manufacturer={manufacturer}
                model={model}
                year={year}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default AssetsList;
