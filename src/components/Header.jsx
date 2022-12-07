import { useContext } from "react";
import AssetContext from "../context/AssetContext";
import { FaHome } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { ImList2 } from "react-icons/im";
import { Link } from "react-router-dom";

function Header() {
  const { handleEditMode } = useContext(AssetContext);

  return (
    <header className="bg-blue-800 text-white">
      <div className="mx-auto flex w-4/5 items-center justify-between py-3 sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-1/3">
        <Link to={"/"}>
          <FaHome className="text-4xl" title="Home" />
        </Link>
        <Link to={"/assets"}>
          <ImList2 className="text-3xl" title="Asset Inventory List" />
        </Link>
        <Link to={"/assets/new"}>
          <SiAddthis
            className="text-3xl"
            title="Create New Asset"
            onClick={() => handleEditMode(false)}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
