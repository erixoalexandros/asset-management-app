import Card from "./shared/Card";
import { FaLaptop } from "react-icons/fa";

function AssetCard({ tagName, manufacturer, model, year }) {
  return (
    <Card>
      <FaLaptop className="text-8xl text-slate-400" />
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold">{tagName}</h3>
        <h4>{`${manufacturer} ${model}`}</h4>
        <h5 className="text-sm">{year}</h5>
      </div>
    </Card>
  );
}

export default AssetCard;
