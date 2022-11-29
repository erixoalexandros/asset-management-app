function Card({ children }) {
  return (
    <div className="mx-auto w-4/5 rounded-lg border-2 sm:w-2/3 lg:w-2/3 xl:w-1/3">
      {children}
    </div>
  );
}

export default Card;
