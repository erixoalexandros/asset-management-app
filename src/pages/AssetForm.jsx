import { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "../components/shared/Card";

function AssetForm() {
  const [formValues, setFormValues] = useState({
    id: uuid(),
    tagName: "",
    manufacturer: "",
    model: "",
    year: new Date().getFullYear(),
    serial: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${import.meta.env.VITE_DATA_URL}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formValues),
    });
  };

  return (
    <div className="mt-4">
      <Card>
        <h2 className="px-4 py-4 text-3xl font-semibold text-gray-500">
          New Asset:
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
            placeholder="Tag Name..."
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-500 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
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
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-500 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
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
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-500 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
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
            value={formValues.year.toString()}
            onChange={handleInputChange}
            required
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-500 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
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
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-500 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
          />
          <button
            type="submit"
            className="mx-auto w-full rounded-md bg-green-600 px-4  py-2 text-xl text-white hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}

export default AssetForm;
