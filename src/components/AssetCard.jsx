import Card from "./shared/Card";
import { FaLaptop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AssetCard({ id, tagName, manufacturer, model, year }) {
  const navigate = useNavigate();

  const handleAssetClick = () => {
    navigate(`/assets/${id}`);
  };

  return (
    <Card>
      <div
        className="flex cursor-pointer space-x-4 rounded-md py-2 px-2 hover:bg-slate-100"
        onClick={handleAssetClick}
      >
        <FaLaptop className="text-8xl text-slate-400" />
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold">{tagName}</h3>
          <h4>{`${manufacturer} ${model}`}</h4>
          <h5 className="text-sm">{year}</h5>
        </div>
      </div>
    </Card>
  );
}

export default AssetCard;
