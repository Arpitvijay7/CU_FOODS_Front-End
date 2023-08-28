import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../Core/store/slice/userSlice";
import "./styles.css";
import { BsCartFill } from "react-icons/bs";
import { MdRamenDining } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const navLinksClickHandler = (e, target) => {
    e.preventDefault();

    const targetedElement = document.querySelector(`.${target}`);
    if (targetedElement.classList.contains("active")) {
      return;
    }
    const links = document.querySelectorAll(".link--content");
    links.forEach((link) => {
      if (link !== targetedElement) {
        link.classList.remove("active");
        link.classList.add("non-active");
      } else {
        link.classList.add("active");
        link.classList.remove("non-active");
      }
    });
  };

  return (
    <div className="">
      <nav className="bg-white z-10 fixed bottom-0 w-full md:flex md:justify-between shadow-lg shadow-grey-100 p-3 md:sticky md:top-0 md:left-0 md:w-full md:h-[3.5rem]">
        <Link
          to="/"
          className="flex hidden md:block justify-center items-center text-2xl"
        >
          CU FOOD
        </Link>
        <div className="flex relative justify-evenly items-center bg-white overflow-y-auto space-x-5">
          <Link
            to="/"
            non-active
            activeClassName="text-[crimson] border-b-2 border-[crimson] active"
            className="flex nav--links relative z-50 md:hidden flex-col justify-center items-center bg-whiteitems-center text-xl md:text-2xl"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to={"/checkout"}
            non-active
            className="flex relative nav--links z-50 flex-col justify-center items-center  bg-white md:text-base text-xl text-center cursor-pointer"
          >
            <BsCartFill className="text-xl" /> <span>Cart</span>
          </Link>
          <Link
            to={"/myorders"}
            non-active
            className="flex flex-col relative nav--links z-50 justify-center items-center bg-white md:text-base text-xl text-center cursor-pointer"
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
