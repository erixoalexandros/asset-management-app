import { FaLaptop } from "react-icons/fa";

function Card() {
  return (
    <div className="h-30 xl:1/3 mx-auto flex w-4/5 cursor-pointer flex-row space-x-4 rounded-lg border-2 px-4 py-2 hover:bg-slate-100 active:bg-blue-100 sm:w-2/3 lg:w-2/3">
      <FaLaptop className="text-8xl text-slate-400" />
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold">TagName</h3>
        <h4>Brand Model</h4>
        <h5 className="text-sm">Year</h5>
      </div>
    </div>
  );
}

export default Card;
