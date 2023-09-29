import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { MdRamenDining } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import "./styles.css";
import logo from "../../../../Assets/Logo/CU_FOODS_WHITE_TRANSPARENT.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const [toggle, setToogle] = useState("");

  const [route, setRoute] = useState(pathname);

  useEffect(() => {
    setRoute(pathname);
    if (pathname.includes("checkout")) {
      setToogle("checkout");
    }
    if (pathname.includes("myorders")) {
      setToogle("myorders");
    }
  }, [pathname, toggle]);
  return (
    <div>
      <nav className="bg-white z-10 fixed bottom-0 w-full md:flex md:justify-between shadow-lg shadow-grey-100  md:sticky md:top-0 md:left-0 md:w-full md:h-[3.5rem]">
        <Link
          to="/"
          className="hidden md:flex md:justify-center md:items-center md:text-2xl md:px-4"
        >
          <img src={logo} className="w-[150px] overflow-hidden" alt="Logo" />
        </Link>
        <div className="flex relative justify-evenly h-full items-center bg-white overflow-y-auto md:overflow-y-visible space-x-5 shadow-2xl md:shadow-none py-2 rounded-md">
          <Link
            to="/"
            className={`p-1 px-5 rounded-lg flex nav--links relative z-50 md:hidden flex-col justify-center items-center bg-whiteitems-center text-xl md:text-2xl ${
              route.includes("restaurant")
                ? "text-[crimson] border-t-2 border-[crimson]"
                : ""
            }`}
          >
            <FaHome />
            Home
          </Link>

          <Link
            to={"/checkout"}
            className={`p-1 px-5 md:rounded-sm h-max rounded-lg flex relative nav--links z-50 flex-col justify-center items-center  bg-white md:text-base text-xl text-center cursor-pointer ${
              toggle === "checkout"
                ? "text-[crimson] border-t-2 border-[crimson]"
                : ""
            } md:${
              toggle === "checkout"
                ? "text-[yellow] md:border-t-2 md:border-[transparent]"
                : ""
            }` }
          >
            <BsCartFill className="text-xl" /> <span>Cart</span>
          </Link>
          <Link
            to={"/myorders"}
            className={`p-1 px-5 md:rounded-sm h-max rounded-lg flex flex-col relative nav--links z-50 justify-center items-center bg-white md:text-base text-xl text-center cursor-pointer ${
              toggle === "myorders"
                ? "text-[crimson] border-t-2 border-[crimson]"
                : ""
            } md:${
              toggle === "myorders"
                ? "text-[crimson] md:border-t-2 md:border-[transparent]"
                : ""
            }`}
          >
            <MdRamenDining className="text-xl z-50" />
            Orders
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
