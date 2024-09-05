import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { LuUserCog } from "react-icons/lu";
import { TbDatabaseStar } from "react-icons/tb";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Logo from "../assets/LogoGemara.png";

const LayoutDashboard = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-backgroundColor font-raleway">
      <nav className="bg-gray-50 ring-1 ring-secondary px-4 py-2.5 fixed left-0 right-0 top-0 z-50 m-3 rounded-lg">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <Link to="/" className="flex items-center justify-between mr-4">
              <img src={Logo} className="mr-3 h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-bold whitespace-nowrap text-slate-700">
                Gemara
              </span>
            </Link>
            <form action="#" className="hidden md:block md:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative md:w-64 md:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleSidebar}
            >
              <span className="sr-only"> Toggle sidebar </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>{" "}
            </button>{" "}
            <Link to="/dashboard/profile">
              <button
                type="button"
                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt="user photo"
                />
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <aside
        className={`fixed top-0 left-0 z-40 w-72 h-screen pt-14 transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar className="h-full w-full m-3 rounded-lg mt-8 ring-1 ring-secondary">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={LuUserCog}>
                <Link to="/dashboard/profile"> Edit Profile </Link>
              </Sidebar.Item>
              <Sidebar.Item icon={TbDatabaseStar}>
                <Link to="/dashboard/form"> Your Order </Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              {Cookies.get("token") && (
                <Sidebar.Item icon={SlLogout}>
                  <Link onClick={() => Cookies.remove("token")} to="/">
                    Sign Out
                  </Link>
                </Sidebar.Item>
              )}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </aside>
      <main className="ml-0 md:ml-72 h-auto pt-20"> {props.children} </main>
    </div>
  );
};

export default LayoutDashboard;
