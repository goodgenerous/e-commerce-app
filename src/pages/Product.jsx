import React, { useState, useEffect, useContext } from "react";
import ProductOverview from "../components/ProductOverview";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

const Product = () => {
  const { id } = useParams();
  const [dataDetails, setDataDetails] = useState(null);
  const { state } = useContext(GlobalContext);
  const { loading, setLoading } = state;

  useEffect(() => {
    axios
      .get(`https://my-e-commerce-api.vercel.app/api/products/${id}`)
      .then((res) => {
        setDataDetails(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, [id]);

  if (!dataDetails) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        Loading Data...
      </div>
    );
  }

  return (
    <div className="bg-backgroundColor">
      <ProductOverview
        category="Sepatu & Sandal"
        image={dataDetails.images[0]}
        title={dataDetails.name}
        description={dataDetails.description}
        price={dataDetails.price}
        quantity={dataDetails.qty}
      />
    </div>
  );
};

export default Product;
