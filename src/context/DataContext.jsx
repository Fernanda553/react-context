import { createContext, useState } from "react";
import { photos } from "../../public/fotos.json";
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const endpoint = photos;

  const [data, setData] = useState(endpoint);

  const allState = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={allState}>{children}</DataContext.Provider>
  );
};
