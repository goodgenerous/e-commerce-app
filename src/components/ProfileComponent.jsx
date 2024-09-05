import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const ProfileComponent = () => {
  const { state } = useContext(GlobalContext);
  const { userData } = state;

  console.log(userData);

  return (
    <>
      <div className="p-4 bg-gray-50 mt-2 ml-6 mr-3 rounded-md ring-1 ring-secondary h-screen fixed w-screen overflow-y-hidden">
        <h1 className="py-5 px-5 text-xl font-bold text-black">
          {" "}
          Edit your profile{" "}
        </h1>
        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
              <img
                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="Bordered avatar"
              />
              <div className="flex flex-col space-y-5 sm:ml-8">
                <button
                  type="button"
                  className="py-3.5 px-7 text-base font-medium text-white focus:outline-none bg-secondary rounded-lg border border-indigo-200 hover:bg-secondary2 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                >
                  Change picture
                </button>
              </div>
            </div>
            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  // value={dataProfile.fullName}
                  name="name"
                  className="bg-indigo-50 border border-indigo-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="John Doe"
                  disabled
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  // value={dataProfile.email}
                  name="email"
                  className="bg-indigo-50 border border-indigo-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="johndoe@mail.com"
                  disabled
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="image_url"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="image_url"
                  // value={dataRegister.image_url}
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="image url..."
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="submit"
                  className="text-white bg-primary  hover:bg-primaryHover focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Save Changes
                </button>
                <Link to="/reset-password">
                  <button
                    type="submit"
                    className="text-white bg-rose-500 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Reset Password
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
