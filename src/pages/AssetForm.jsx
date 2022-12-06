import { useState } from "react";
import Card from "../components/shared/Card";

function AssetForm() {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            id="tag-name"
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
            value={year.toString()}
            required
            onChange={handleYearChange}
            className="mb-8 h-10 w-full border-2 indent-2 text-gray-500 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
          />
          <label htmlFor="serial" className="mb-2 font-semibold">
            Serial:
          </label>
          <input
            type="text"
            id="serial"
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
