import { TfiFaceSad } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mx-auto mt-20 flex w-fit flex-col items-center justify-center">
      <TfiFaceSad className="mb-6 text-9xl text-red-600" />
      <h2 className="mb-4 text-4xl">404 Error</h2>
      <h3 className="mb-8 text-2xl">Page Not Found</h3>
      <Link
        to="/"
        className=" flex items-center rounded-md bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
        title="Home"
      >
        <FaHome className="mr-3 text-4xl" />
        Return to the Homepage
      </Link>
    </div>
  );
}

export default NotFound;
