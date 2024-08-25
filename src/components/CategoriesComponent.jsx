import React, { useContext, useEffect } from "react";
import ButtonComponent from "./ButtonComponent";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

const CategoriesComponent = () => {
  const { state } = useContext(GlobalContext);
  const { dataAPICategories, setDataAPICategories } = state;

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

  // const dataCategories = [
  //   {
  //     name: "Peralatan Masak",
  //   },
  //   {
  //     name: "Peralatan Olahraga",
  //   },
  //   {
  //     name: "Sepatu & Sandal",
  //   },
  //   {
  //     name: "Mainan & Hobby",
  //   },
  // ];

  return (
    <div className="relative isolate px-3 py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <span className="flex gap-4">
          <div className="text-4xl font-bold text-white font-raleway">
            Explore Categories
          </div>
          <ButtonComponent name="outline-white" title="View All" />
        </span>
        <div className="flex gap-5 justify-center mt-10">
          {dataAPICategories.map((res, index) => {
            return (
              <div
                key={index}
                className="ring-1 ring-white px-10 py-10 backdrop-blur-md bg-white/30 w-1/2 rounded-xl"
              >
                <div className="text-3xl font-bold mb-4 font-raleway text-white">
                  {res.name}
                </div>
                <div className="text-md mb-4 font-raleway text-slate-300">
                  Temukan kumpulan produk{" "}
                  <span className="font-bold ">{res.name}</span> pilihanmu
                  disini!
                </div>
                <ButtonComponent name="primary" title="View Products" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
