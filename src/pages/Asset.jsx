import Card from "../components/shared/Card";
import { FaEdit, FaTrashAlt, FaLaptop } from "react-icons/fa";

function Asset() {
  return (
    <>
      <div className="mx-auto flex w-4/5 justify-end space-x-8 py-4 sm:w-2/3 lg:w-2/3 xl:w-1/3">
        <FaEdit className="cursor-pointer text-2xl text-green-600 hover:text-green-700" />
        <FaTrashAlt className="cursor-pointer text-2xl text-red-600 hover:text-red-700" />
      </div>
      <Card>
        <div className="space-y-4 py-8 px-8">
          <h3>
            <span className="font-bold">Tag Name:</span> TagName
          </h3>
          <h4>
            <span className="font-bold">Manufacturer:</span> Manufacturer
          </h4>
          <h4>
            <span className="font-bold">Model:</span> Model
          </h4>
          <h4>
            <span className="font-bold">Year:</span> Year
          </h4>
          <h4>
            <span className="font-bold">Serial:</span> Serial
          </h4>
          <FaLaptop className="mx-auto text-9xl text-slate-400" />
        </div>
      </Card>
    </>
  );
}

export default Asset;
