import React from "react";
import ButtonComponent from "./ButtonComponent";

const CategoriesComponent = () => {
  const dataCategories = [
    {
      title: "Peralatan Masak",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      title: "Peralatan Olahraga",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      title: "Sepatu & Sandal",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      title: "Mainan & Hobby",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ];

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
          {dataCategories.map((res, index) => {
            return (
              <div
                key={index}
                className="ring-1 ring-white px-10 py-10 backdrop-blur-md bg-white/30 w-1/2 rounded-xl"
              >
                <div className="text-3xl font-bold mb-4 font-raleway text-white">
                  {res.title}
                </div>
                <div className="text-md mb-4 font-raleway">
                  {res.description}
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
