import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [dataAPICategories, setDataAPICategories] = useState([]);

  let state = {
    dataAPICategories,
    setDataAPICategories,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
