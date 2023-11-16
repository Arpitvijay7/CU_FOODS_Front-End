import React from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import axios from "axios";
import toast from "react-hot-toast";
import { logoutUser } from "../../../../../Core/store/slice/userSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../../../../Core/API/endpoint";
import { Link } from "react-router-dom";
const UserDrawer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const handleLogout = async () => {
    try {
      const { data } = axios.get(`${BASE_URL}user/logout`);
      toast.success("Logout Successfull", {
        duration: 1000,
      });
    } catch (error) {
      toast.error("Logout Unsuccessfull", {
        duration: 1000,
      });
    }
    dispatch(logoutUser());
  };
  return (
    <div className="drawer drawer-end w-max">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <button className="drawer-content cursor-pointer">
        <Avatar user={user} />
      </button>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-80 p-4 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          <div>
            <div className="flex w-full items-center space-x-5 justify-center py-5 border-b-2">
              <div>
                <Avatar user={user} />
              </div>
              <p className="text-xl font-bold">
                <h3> {user.details.name}</h3>
                {user.details.phoneNo && (
                  <h4 className="text-sm text-start font-normal">
                    +91 {user.details.phoneNo}
                  </h4>
                )}
              </p>
            </div>
            <ul className="menu bg-base-200 text-lg font-semibold rounded-box mt-5">
              <li>
                <Link to="/checkout" className="py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/myorders" className="py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          <button
            onClick={handleLogout}
            className="text-white flex justify-between bg-rose-600 btn btn-error items-center"
          >
            Logout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default UserDrawer;
