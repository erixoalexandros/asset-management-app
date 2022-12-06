import AssetCard from "../components/AssetCard";
import { useContext } from "react";
import AssetContext from "../context/AssetContext";
import SearchBar from "../components/SearchBar";
import { RotatingLines } from "react-loader-spinner";

function AssetsList() {
  const { assets } = useContext(AssetContext);

  return (
    <>
      <SearchBar />
      {!assets ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="48"
          visible={true}
        />
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
