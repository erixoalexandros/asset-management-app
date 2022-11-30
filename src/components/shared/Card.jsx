function Card({ children }) {
  return (
    <div className="mx-auto w-4/5 rounded-lg border-2 sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-1/3">
      {children}
    </div>
  );
}

export default Card;
