import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import AssetContext from "../context/AssetContext";

function SearchBar() {
  const { handleSearchQuery } = useContext(AssetContext);

  const handleInputChange = (e) => {
    handleSearchQuery(e.target.value);
  };

  return (
    <div className="relative mx-auto mt-4 w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-1/3">
      <FaSearch className="absolute top-3 left-3 text-gray-400" />
      <input
        onChange={handleInputChange}
        className="h-10 w-full border-2 indent-9 text-gray-500 caret-gray-400 hover:border-gray-300 focus:outline-blue-300"
        type="text"
        name="search-asset"
        id="search-asset"
      />
    </div>
  );
}

export default SearchBar;
