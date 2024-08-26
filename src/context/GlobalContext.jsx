import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [dataAPICategories, setDataAPICategories] = useState([]);
  const [dataAPIProducts, setDataAPIProducts] = useState([]);

  const handleFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    axios
      .get("https://my-e-commerce-api.vercel.app/api/categories")
      .then((res) => {
        setDataAPICategories(res.data.data);
        console.log(dataAPICategories);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setDataAPICategories]);

  useEffect(() => {
    axios
      .get("https://my-e-commerce-api.vercel.app/api/products")
      .then((res) => {
        setDataAPIProducts(res.data.data);
        console.log(dataAPIProducts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setDataAPIProducts]);

  let state = {
    dataAPICategories,
    setDataAPICategories,
    dataAPIProducts,
    setDataAPIProducts,
  };

  let handleFunction = {
    handleFormat,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
