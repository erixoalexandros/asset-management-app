function Card({ children }) {
  return (
    <div className="h-30 xl:1/3 mx-auto flex w-4/5 cursor-pointer flex-row space-x-4 rounded-lg border-2 px-4 py-2 hover:bg-slate-100 active:bg-blue-100 sm:w-2/3 lg:w-2/3">
      {children}
    </div>
  );
}

export default Card;
