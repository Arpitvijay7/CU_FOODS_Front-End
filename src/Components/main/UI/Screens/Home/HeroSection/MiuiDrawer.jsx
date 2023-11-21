import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Avatar from "./Avatar";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../../../../Core/API/endpoint";
import toast from "react-hot-toast";
import { logoutUser } from "../../../../../Core/store/slice/userSlice";
import {
  ChevronRight,
  FileLock2,
  Fingerprint,
  PhoneCall,
  ScrollText,
  Users2,
  Wallet2,
} from "lucide-react";
export default function MobileUserDrawerUsingMiui() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
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
  const user = useSelector((state) => state.users);

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <Avatar user={user} />
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
          className="flex flex-col h-full"
        >
          <Box
            sx={{
              scrollbarWidth: "none",
            }}
          >
            <div className="menu w-80 p-4 min-h-full bg-gray-100 text-base-content">
              <div>
                <div className="flex w-full items-center space-x-5 justify-center py-5 border-b-2 border-gray-300">
                  <Avatar user={user} />

                  <p className="text-xl font-bold">
                    <h3> {user.details.name}</h3>
                    {user.details.phoneNo && user.details.isPhoneVerified && (
                      <h4 className="text-sm text-start font-normal">
                        +91 {user.details.phoneNo}
                      </h4>
                    )}
                  </p>
                </div>
                <div className="text-lg font-semibold rounded-box mt-5">
                  <div className="bg-white rounded-2xl p-3 pt-3">
                    <div className="pb-2 flex justify-start items-center gap-x-2">
                      <div className="w-1 h-8 rounded-full bg-[crimson]" />
                      Food Orders
                    </div>
                    <Link
                      to="/checkout"
                      className="py-3 border-b flex justify-between items-center font-medium text-neutral-700 text-base"
                    >
                      <div className="flex gap-x-2">
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
                      </div>
                      <ChevronRight />
                    </Link>
                    <Link
                      to="/myorders"
                      className="py-3 flex justify-between items-center font-medium text-neutral-700 text-base"
                    >
                      <div className="flex gap-x-2">
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
                      </div>
                      <ChevronRight />
                    </Link>
                  </div>
                  <div className="bg-white rounded-2xl p-3 pt-3 mt-3">
                    <div className="pb-2 flex justify-start items-center gap-x-2">
                      <div className="w-1 h-8 rounded-full bg-[crimson]" />
                      Customer
                    </div>
                    <Link
                      to="/PrivacyPolicy"
                      className="py-3 border-b flex justify-between items-center font-medium text-neutral-700 text-base"
                    >
                      <div className="flex gap-x-2">
                        <Fingerprint />
                        Privacy Policy
                      </div>
                      <ChevronRight />
                    </Link>
                    <Link
                      to="/TermsAndCodition"
                      className="py-3 flex justify-between items-center font-medium text-neutral-700 text-base border-b"
                    >
                      <div className="flex gap-x-2">
                        <FileLock2 />
                        Terms And Coditions
                      </div>
                      <ChevronRight />
                    </Link>
                    <Link
                      to="/RefundsAndReturns"
                      className="py-3 flex justify-between items-center font-medium text-neutral-700 text-base border-b"
                    >
                      <div className="flex gap-x-2">
                        <Wallet2 />
                        Refunds And Returns
                      </div>
                      <ChevronRight />
                    </Link>
                    <Link
                      to="/contactUs"
                      className="py-3 flex justify-between items-center font-medium text-neutral-700 text-base"
                    >
                      <div className="flex gap-x-2">
                        <PhoneCall />
                        Contact Us
                      </div>
                      <ChevronRight />
                    </Link>
                  </div>
                  <div className="bg-white rounded-2xl p-3 pt-3 mt-3">
                    <div className="pb-2 flex justify-start items-center gap-x-2">
                      <div className="w-1 h-8 rounded-full bg-[crimson]" />
                      Career
                    </div>
                    <Link
                      to="/joinUs"
                      className="py-3 border-b flex justify-between items-center font-medium text-neutral-700 text-base"
                    >
                      <div className="flex gap-x-2">
                        <Users2 />
                        Join Our Team
                      </div>
                      <ChevronRight />
                    </Link>
                    <Link
                      to="/joinUs"
                      className="py-3 flex justify-between items-center font-medium text-neutral-700 text-base"
                    >
                      <div className="flex gap-x-2">
                        <ScrollText />
                        Hear From our Interns
                      </div>
                      <ChevronRight />
                    </Link>
                  </div>
                  <div className="bg-white rounded-2xl p-3 pt-3 mt-3 mb-5">
                    <div className="pb-2 flex justify-start items-center gap-x-2">
                      <div className="w-1 h-8 rounded-full bg-[crimson]" />
                      Vendor
                    </div>
                    <Link
                      to="/vendorJoinUs"
                      className="py-3 border-b flex justify-between items-center font-medium text-neutral-700 text-base"
                    >
                      <div className="flex gap-x-2">
                        <Users2 />
                        Join Us
                      </div>
                      <ChevronRight />
                    </Link>
                    <Link
                      to="/VendorHelp"
                      className="py-3 flex justify-between items-center font-medium text-neutral-700 text-base"
                    >
                      <div className="flex gap-x-2">
                        <ScrollText />
                        Need help as a vendor?
                      </div>
                      <ChevronRight />
                    </Link>
                  </div>
                </div>
              </div>

              <Button
                sx={{
                  backgroundColor: "crimson",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "700",
                  borderRadius:"8px",
                  paddingLeft:"15px"
                }}
                onClick={handleLogout}
                className="text-white flex justify-between btn btn-error items-center font-bold w-full hover:text-black shadow-xl"
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
              </Button>

              <Divider className="py-5">CU FOODZ Socials</Divider>
              <span class="flex justify-evenly">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  class="ml-3 text-gray-500"
                  href="https://www.instagram.com/vijayarpit2002/"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  class="ml-3 text-gray-500"
                  href="https://www.linkedin.com/in/arpit-vijay7"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
