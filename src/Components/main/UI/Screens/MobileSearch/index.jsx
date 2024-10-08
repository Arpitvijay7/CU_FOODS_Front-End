import React, { useState, useEffect, useRef } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDebounce } from "../../../../../hooks/debounce.js";
import { BASE_URL } from "../../../../Core/API/endpoint";
const MobileSearch = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [foodKeyword, setFoodKeyword] = useState("");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const handleSearch = async () => {
    if (foodKeyword) {
      return;
    }
    if (!debouncedSearch) {
      return;
    }
    setLoad(true);
    if (debouncedSearch.length > 0) {
      const res = await fetch(`${BASE_URL}shop/getAllShops?keyword=${debouncedSearch}`);
      const data = await res.json();
      if (data["shops"].length !== 0) {
        setData(data.shops);
      } else {
        setData([]);
      }
    }
    setLoad(false);
  };
  const fetchShopsByFoodKeyword = async () => {
    if (!foodKeyword) {
      return;
    }
    setLoad(true);
    const res = await fetch(
      `${BASE_URL}shop/searchByCuisine?keyword=${search}`
    );
    const data = await res.json();
    if (search.length > 0) {
      if (data["shops"].length !== 0) {
        setData(data.shops);
      } else {
        setData([]);
      }
    }
    setLoad(false);
  };
  useEffect(() => {
    handleSearch();
  }, [debouncedSearch]);
  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
    if (keyword) {
      setFoodKeyword(keyword);
      setSearch(keyword);
    }
  }, []);

  useEffect(() => {
    fetchShopsByFoodKeyword();
  }, [foodKeyword]);

  const handleremove = () => {
    setSearch("");
    setFoodKeyword("");
    setData([]);
  };
  return (
    <div className="min-h-[70vh]">
      <div className="p-4">
        <div className="flex place-items-center bg-white w-full h-14 rounded-xl md:rounded-lg border shadow-md">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="pl-3 pr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="w-8 h-8 -ml-3 active:bg-red-300 transition rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <input
            ref={inputRef}
            type="text"
            className="h-full w-full focus:outline-none text-lg md:text-2xl rounded-lg"
            placeholder="Search For Restaurants"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          {search.length > 0 && (
            <button
              type="button"
              onClick={handleremove}
              className="pl-3 pr-2 rounded-full active:bg-gray-100 active:transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <p className="pl-1 pr-2 border-l">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </p>
        </div>
      </div>

      {search.length > 0 && !load ? (
        <></>
      ) : (
        <div className="px-5 text-neutral-500">
          Suggestions:
          <ol type="a" className="p-2">
            <li>Noor Muskan Dhaba</li>
            <li>Italian Affair</li>
            <li>Vasano food</li>
            <li>Musical chat bhandar</li>
          </ol>
        </div>
      )}

      <div className="flex flex-col gap-5 px-4">
        {data &&
          search.length > 0 &&
          !load &&
          data.map((val, index) => {
            const rating = val.rating.avgRating;
            let ratingColor;
            if (rating > 3.5 && rating <= 4.5) {
              ratingColor = "bg-green-500";
            } else if (rating > 4.5) {
              ratingColor = "bg-green-700";
            } else if (rating > 2.5 && rating <= 3.5) {
              ratingColor = "bg-yellow-500";
            } else if (rating <= 2.5) {
              ratingColor = "bg-red-600";
            }
            return (
              <Link
                to={`/restaurant/${val._id}`}
                key={index}
                className=" p-3 rounded-xl shadow-md"
              >
                <div className="flex justify-center items-center gap-4">
                  <img
                    className="w-24 h-16 rounded-lg"
                    src={val.image.path}
                    loading="lazy"
                    alt={val.name}
                  />
                  <div className="w-2/3">
                    <p className="font-bold text-xl">{val.name}</p>
                    {val.status === "closed" ? (
                      <p className="bg-rose-500 text-white rounded font-medium w-max px-2">
                        Closed
                      </p>
                    ) : (
                      <p className="font-semibold">{val.description}</p>
                    )}
                  </div>
                  <div
                    className={`text-white font-semibold rounded-md text-xs text-center py-2 w-16 ${ratingColor}`}
                  >
                    {val.rating && val.rating.avgRating
                      ? val.rating.avgRating
                      : "N.A"}{" "}
                    ★
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      {load && (
        <>
          <div className="w-screen h-96 grid place-items-center">
            <div
              className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-rose-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileSearch;
