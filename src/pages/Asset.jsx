import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/shared/Card";
import { FaEdit, FaTrashAlt, FaLaptop } from "react-icons/fa";

function Asset() {
  const { id } = useParams();
  const [selectedAsset, setSelectedAsset] = useState(null);

  const fetchAsset = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_DATA_URL}/assets/${id}`
    );

    const data = await response.json();

    setSelectedAsset({ ...data });
  };

  useEffect(() => {
    fetchAsset(); 
  }, []);

  return (
    <>
      <div className="mx-auto flex w-4/5 justify-end space-x-8 py-4 sm:w-2/3 lg:w-2/3 xl:w-1/3">
        <FaEdit className="cursor-pointer text-2xl text-green-600 hover:text-green-700" />
        <FaTrashAlt className="cursor-pointer text-2xl text-red-600 hover:text-red-700" />
      </div>
      <Card>
        {!selectedAsset ? (
          "Loading..."
        ) : (
          <div className="space-y-4 py-8 px-8">
            <h3>
              <span className="font-bold">Tag Name:</span>{" "}
              {selectedAsset.tagName}
            </h3>
            <h4>
              <span className="font-bold">Manufacturer:</span>{" "}
              {selectedAsset.manufacturer}
            </h4>
            <h4>
              <span className="font-bold">Model:</span> {selectedAsset.model}
            </h4>
            <h4>
              <span className="font-bold">Year:</span> {selectedAsset.year}
            </h4>
            <h4>
              <span className="font-bold">Serial:</span> {selectedAsset.serial}
            </h4>
            <FaLaptop className="mx-auto text-9xl text-slate-400" />
          </div>
        )}
      </Card>
    </>
  );
}

export default Asset;
