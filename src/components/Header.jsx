import { FaHome } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import HeaderContext from "../context/HeaderContext";

function Header() {
  const { headerTitle, getPathName } = useContext(HeaderContext);

  const location = useLocation();

  useEffect(() => {
    getPathName(location.pathname);
  });

  return (
    <header className="bg-blue-800 text-white">
      <div className="mx-auto flex w-4/5 items-center justify-between py-2 sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-1/3">
        <Link to={"/"}>
          <FaHome className="cursor-pointer text-4xl" />
        </Link>
        <h2 className="text-2xl font-semibold">{headerTitle}</h2>
        <Link to={"/asset"}>
          <SiAddthis className="text-2xl" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
