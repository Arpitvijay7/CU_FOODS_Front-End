import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../Core/API/endpoint";
const MobileSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const handleSearch = async () => {
    setLoad(true);
    const res = await fetch(`${BASE_URL}shop/getAllShops?keyword=${search}`);
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
  }, [search]);
  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div className="border-b min-h-[70vh]">
      <div className="p-5">
        <div className="flex place-items-center bg-white w-full h-14 rounded-lg md:rounded-lg border-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="pl-3 pr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              className="w-8 h-8 -ml-3 active:bg-red-300 transition rounded-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
              onClick={() => setSearch("")}
              className="pl-3 pr-2 rounded-full active:bg-gray-100 active:transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            <li>Punjabi Rasoi</li>
            <li>Zaika</li>
            <li>Food Republic</li>
          </ol>
        </div>
      )}

      <div className="flex flex-col gap-5 px-2">
        {data &&
          search.length > 0 &&
          !load &&
          data.map((val, index) => {
            return (
              <Link
                to={`/restaurant/${val._id}`}
                key={index}
                className=" py-5 rounded-xl shadow-md px-2"
              >
                <div className="flex justify-center items-center gap-4">
                  <img
                    className="w-1/4 rounded-lg"
                    src={val.img ? val.img : "https://picsum.photos/536/354"}
                  />
                  <div className="w-2/3">
                    <p className="font-bold text-xl">{val.name}</p>
                    {val.status === "closed" ? (
                      <p className="bg-rose-500 text-white rounded font-bold w-max px-5">
                        Closed
                      </p>
                    ) : (
                      <p className="font-semibold">{val.description}</p>
                    )}
                  </div>
                  <div className="bg-green-700 text-white font-semibold rounded-md text-xs p-2 w-20">
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
