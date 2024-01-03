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
    } else if (pathname.includes("myorders")) {
      setToogle("myorders");
    } else if (pathname.includes("/")) {
      setToogle("home");
    }
  }, [pathname, toggle]);
  return (
    <div>
      <nav
        style={{
          WebkitBoxShadow: "0px -11px 95px -32px rgba(0,0,0,0.75)",
          MozBoxShadow: "0px -11px 95px -32px rgba(0,0,0,0.75)",
          boxShadow: "0px -11px 95px -32px rgba(0,0,0,0.75)",
        }}
        className={`bg-white lg:bg-white z-10 fixed bottom-0 w-full shadow-lg shadow-gray-100 ${
          pathname !== "/"
            ? "md:flex md:justify-between  md:sticky md:top-0 md:left-0 md:w-full md:h-[3.5rem]"
            : "md:hidden"
        }`}
      >
        <Link
          to="/"
          className="hidden md:flex md:justify-center md:items-center md:text-2xl md:px-4"
        >
          <img src={logo} className="w-[150px] overflow-hidden" alt="Logo" />
        </Link>
        <div className="flex shadow-2xl shadow-black relative justify-evenly h-full md:bg-white items-center overflow-y-auto md:overflow-y-visible space-x-5 md:shadow-none">
          <Link
            to="/"
            className={`p-1 px-5 py-2 flex nav--links relative z-50 md:hidden flex-col justify-center items-center text-lg tracking-widest md:text-2xl ${
              route.includes("restaurant") || toggle === "home"
                ? "text-[crimson] border-t-2 border-[crimson]"
                : ""
            }`}
          >
            <FaHome />
            Home
          </Link>

          <Link
            to={"/checkout"}
            className={`p-1 px-5 py-2 md:rounded-sm h-max flex relative nav--links z-50 flex-col justify-center items-center  md:text-base text-lg tracking-widest text-center cursor-pointer ${
              toggle === "checkout"
                ? "text-[crimson] border-t-2 border-[crimson]"
                : ""
            } md:${
              toggle === "checkout"
                ? "text-[yellow] md:border-t-2 md:border-[transparent]"
                : ""
            }`}
          >
            <BsCartFill className="text-md tracking-widest" /> <span>Cart</span>
          </Link>
          <Link
            to={"/myorders"}
            className={`p-1 px-5 py-2 md:rounded-sm h-max flex flex-col relative nav--links z-50 justify-center items-center  md:text-base text-lg tracking-widest text-center cursor-pointer ${
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
