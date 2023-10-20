import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection/index";
import CardsSection from "./CardsSection/index";
import { BASE_URL } from "../../../../Core/API/endpoint";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../Core/store/slice/userSlice";
const Home = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const [totalShops, setTotalShops] = useState([]);
  const [load, setLoad] = useState(1);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParam = new URLSearchParams(window.location.search);
  const notauth = queryParam.get("notauth");
  const verify = queryParam.get("verify");
  const verifyError = queryParam.get("verifyError");
  useEffect(() => {
    document.title = "Cu Foodz";
  }, []);
  useEffect(() => {
    if (verify) {
      toast.success("Email Verification completed and loging In.", {
        autoClose: 2000,
        hideProgressBar: true,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, []);
  useEffect(() => {
    if (verifyError) {
      toast.error(verifyError, {
        autoClose: 2000,
        hideProgressBar: true,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (notauth) {
      toast.error(notauth, {
        autoClose: 1000,
        hideProgressBar: true,
      });

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, []);
  const handleSearch = async () => {
    const res = await fetch(`${BASE_URL}shop/getAllShops?keyword=${search}`);
    const data = await res.json();
    if (search.length > 0) {
      if (data["shops"].length !== 0) {
        setData(data.shops);
      } else {
        setData([]);
      }
    } else {
      fetchData();
    }
    setLoad(0);
  };
  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}shop/getAllShops?page=${page}`);
    const dat1 = await res.json();
    const newShop = dat1.shops;
    setData((prev) => [...prev, ...newShop]);
    setTotalShops(dat1.totalShops);
    setLoad(0);
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [page]);
  useEffect(() => {
    console.log("latest data", data, data.length, totalShops);
  }, [data]);

  const handleInfiniteScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight * 0.8
      ) {
        console.log("in page ", data.length, totalShops);
        if (data.length < totalShops) {
          setPage((prev) => prev + 1);
        }
      }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="text-center">
      <HeroSection search={search} setSearch={setSearch} />
      <CardsSection data={data} setData={setData} load={load} />
      <ToastContainer autoClose={1500} hideProgressBar={true} />
    </div>
  );
};

export default Home;
