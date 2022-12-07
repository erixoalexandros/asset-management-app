import { useState, useContext } from "react";
import AssetContext from "../context/AssetContext";
import { v4 as uuid } from "uuid";
import Card from "../components/shared/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const initialFormValues = {
  id: "",
  tagName: "",
  manufacturer: "",
  model: "",
  year: "",
  serial: "",
};

function AssetForm() {
  const {
    assets,
    handleAssetCreate,
    handleAssetEdit,
    editMode,
    handleEditMode,
  } = useContext(AssetContext);

  const [formValues, setFormValues] = useState(initialFormValues);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editMode) {
      setFormValues(assets.find((asset) => asset.id === id));
    } else {
      setFormValues({
        ...initialFormValues,
        id: uuid(),
        year: new Date().getFullYear().toString(),
      });
    }
  }, [editMode]);

  const handleInputChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      `${import.meta.env.VITE_DATA_URL}${editMode ? `/${formValues.id}` : "/"}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: `${editMode ? "PUT" : "POST"}`,
        body: JSON.stringify(formValues),
      }
    );

    if (editMode) {
      handleAssetEdit(formValues);
      handleEditMode(false);
    } else {
      handleAssetCreate(formValues);
    }

    navigate(`/assets/${formValues.id}`);
  };

  return (
    <div className="mt-4">
      <Card>
        <h2 className="px-4 py-4 text-3xl font-semibold text-green-600">
          {`${editMode ? "EDIT" : "CREATE"} ASSET:`}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col px-4 py-4">
          <label htmlFor="tag-name" className="mb-2 font-semibold">
            Tag Name:
          </label>
          <input
            type="text"
            id="tagName"
            value={formValues.tagName}
            onChange={handleInputChange}
            required
            autoFocus
            placeholder="Tag Name..."
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-700 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
          />
          <label htmlFor="manufacturer" className="mb-2 font-semibold">
            Manufacturer:
          </label>
          <input
            type="text"
            id="manufacturer"
            value={formValues.manufacturer}
            onChange={handleInputChange}
            required
            placeholder="Manufacturer..."
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-700 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
          />
          <label htmlFor="model" className="mb-2 font-semibold">
            Model:
          </label>
          <input
            type="text"
            id="model"
            value={formValues.model}
            onChange={handleInputChange}
            required
            placeholder="Model..."
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-700 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
          />
          <label htmlFor="year" className="mb-2 font-semibold">
            Year:
          </label>
          <input
            type="number"
            id="year"
            min="2005"
            max={new Date().getFullYear().toString()}
            placeholder="YYYY"
            value={formValues.year}
            onChange={handleInputChange}
            required
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-700 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
          />
          <label htmlFor="serial" className="mb-2 font-semibold">
            Serial:
          </label>
          <input
            type="text"
            id="serial"
            value={formValues.serial}
            onChange={handleInputChange}
            required
            placeholder="Serial..."
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-700 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
          />
          <label htmlFor="location" className="mb-2 font-semibold">
            Location:
          </label>
          <select
            id="location"
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-700 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
            required
          >
            <option value="storage">Storage</option>
            <option value="room-300">Room 300</option>
            <option value="room-400">Room 400</option>
            <option value="room-500">Room 500</option>
          </select>
          <label htmlFor="condition" className="mb-2 font-semibold">
            Condition:
          </label>
          <select
            id="condition"
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-700 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
            required
          >
            <option value="new">New</option>
            <option value="good">Good</option>
            <option value="partially-broken">Partially Broken</option>
            <option value="broken">Broken</option>
            <option value="missing">Missing</option>
          </select>
          <label htmlFor="status" className="mb-2 font-semibold">
            Status:
          </label>
          <select
            id="status"
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-700 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
            required
          >
            <option value="available">Available</option>
            <option value="checked-out">Checked Out</option>
            <option value="not-available">Not Available</option>
          </select>
          <label htmlFor="picture" className="mb-2 font-semibold">
            Upload Picture:
          </label>
          <input type="file" id="picture" accept="image/*" />
          <button
            type="submit"
            className="mx-auto mt-4 w-full rounded-md bg-green-600 px-4 py-2 text-xl text-white hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}

export default AssetForm;
