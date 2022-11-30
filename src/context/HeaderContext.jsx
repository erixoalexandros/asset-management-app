import { createContext, useState } from "react";

const HeaderContext = createContext();

const locations = {
  "/assets": "Assets List",
  "/assets/:id": "Asset Tag Name",
  "/": "Asset Management",
};

export const HeaderProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("Sample Title");

  const getPathName = (pathName) => {
    setHeaderTitle(locations[pathName]);
  };

  return (
    <HeaderContext.Provider value={{ headerTitle, getPathName }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;
