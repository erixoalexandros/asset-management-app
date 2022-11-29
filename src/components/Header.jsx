import { FaHome } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-800 text-white">
      <div className="xl:1/3 mx-auto flex w-4/5 items-center justify-between py-2 sm:w-2/3 lg:w-2/3">
        <FaHome className="cursor-pointer text-4xl" />
        <h2 className="text-2xl font-semibold">Page Name</h2>
        <Link to={"/assets:id"}>
          <SiAddthis className="text-2xl" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
