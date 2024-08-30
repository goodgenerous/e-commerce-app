import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [dataAPICategories, setDataAPICategories] = useState([]);
  const [dataAPIProducts, setDataAPIProducts] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [dataRegister, setDataRegister] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputRegister = (event) => {
    const { name, value } = event.target;
    setDataRegister((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrorMessage((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "" ? `${name} tidak boleh kosong` : "",
    }));
    console.log(dataRegister);
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    let { fullName, username, email, password, profilePicture } = dataRegister;

    axios
      .post(`https://my-e-commerce-api.vercel.app/api/auth/register`, {
        fullName,
        username,
        email,
        password,
        profilePicture,
      })
      .then((res) => {
        navigate("/login");
        setDataRegister({
          fullName: "",
          username: "",
          email: "",
          password: "",
          profilePicture: "",
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const isDisabledLogin = !dataLogin.email || !dataLogin.password;
  const isDisabledRegister =
    !dataRegister.fullName ||
    !dataRegister.username ||
    !dataRegister.email ||
    !dataRegister.password;

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });
  const handleInputLogin = (event) => {
    const { name, value } = event.target;
    setDataLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrorMessage((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "" ? `${name} tidak boleh kosong` : "",
    }));

    console.log(dataLogin);
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    let { email, password } = dataLogin;

    axios
      .post(`https://my-e-commerce-api.vercel.app/api/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
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
    dataRegister,
    setDataRegister,
    dataLogin,
    setDataLogin,
    showPassword,
    setShowPassword,
    errorMessage,
    setErrorMessage,
    thumbsSwiper,
    setThumbsSwiper,
  };

  let handleFunction = {
    handleFormat,
    handleInputRegister,
    handleInputLogin,
    handleSubmitRegister,
    handleSubmitLogin,
    toggleShowPassword,
    isDisabledLogin,
    isDisabledRegister,
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
