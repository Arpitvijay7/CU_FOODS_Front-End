import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import "./HeroStyles.css";
import LScontainer from "../../../NavbarComponents/LScontainer";
import { useSelector, useDispatch } from "react-redux";
import {
  closeToggle,
  signinToggle,
  signupToggle,
} from "../../../../../Core/store/slice/toggleSlice";
import { loginUser } from "../../../../../Core/store/slice/userSlice";
const HeroSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user=localStorage.getItem("JWT")
    if(user){
      dispatch(loginUser())
    }
  }, []);
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState(0);
  const [searchData, setSearchData] = useState();
  const loggedIn = useSelector((state) => {
    return state.users["auth"];
  });
  const click = useSelector((state) => {
    return state.toggle["toggle"];
  });

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    const res = await fetch(
      "http://localhost:4000/api/vi/shop/getAllShops?keyword=" + search
    );
    const data = await res.json();
    setSearchClick(1);
    if (search.length > 0) {
      if (data["shops"].length !== 0) {
        setSearchData(data.shops);
      } else {
        setSearchData([{ name: "No Results Found" }]);
        setTimeout(() => {
          setSearchClick(0);
          setSearchClick(0);
        }, 2000);
      }
    }
  };
  
  return (
    <>
      <div className="max-w-screen bg-cover h-[60vh] HeroSection relative">
        <div className="text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl text-white max-w-screen">
          <div className="flex justify-between p-5 lg:p-10">
           <p></p>
            {loggedIn ? (
              <>
                <div className="flex justify-between w-48 text-lg md:text-2xl md:w-64">
                  <Link to="/myaccount">
                    My Account
                  </Link>
                  <Link to="/cart">
                    My Cart
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between w-36 md:w-56">
                  <button onClick={() => dispatch(signinToggle())}>
                    Login
                  </button>
                  <button onClick={() => dispatch(signupToggle())}>
                    Sign Up
                  </button>
                </div>{" "}
              </>
            )}
          </div>
        </div>
        {click != 0 ? <LScontainer /> : <></>}
        <div className="mt-10 md:mt-5 h-2/3">
          <div className="h-full flex flex-col place-items-center">
            <div className="w-full text-white">
              <div className="text-6xl font-black">CU FOODS</div>
              <div className="pt-8">
                <p className="font-semibold text-xl md:text-4xl">
                  Discover the best food & drinks in 
                  <span className="font-bold"> CU</span>
                </p>
              </div>
            </div>
            <div className="flex place-items-center w-5/6 md:w-2/3 mt-12">
              <div className="grid place-items-center h-full w-full relative">
                <div className="flex place-items-center bg-white mt-10 md:mt-0 w-full md:w-2/3 h-14 rounded-lg md:rounded-lg">
                  <p className="pl-3 pr-2">
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
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </p>
                  <input
                    type="text"
                    className="h-full w-full focus:outline-none text-lg md:text-2xl rounded-lg"
                    placeholder="Search For Restaurants"
                    value={search}
                    onChange={(e) => handleSearch(e)}
                  ></input>
                </div>
                {search.length > 0 && (
                  <>
                    <div className="w-full md:w-2/3 mt-3 rounded-lg bg-white absolute top-24 md:top-12 flex flex-col border-2 border-black">
                      {searchData &&
                        searchData.map((val, index) => {
                          return (
                            <Link
                              to={"/shops/" + val.name}
                              className="p-5 hover:bg-gray-300 border-b m-1"
                              key={index}
                            >
                              {val.name}
                            </Link>
                          );
                        })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
