import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection/index";
import CardsSection from "./CardsSection/index";
import { BASE_URL } from "../../../../Core/API/endpoint";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../Core/store/slice/userSlice";
import { useDebounce } from "../../../../../Assets/hooks/hooks";
const Home = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(1);
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
      toast.success("Verification completed You are logged In", {
        duration: 1000,
      });

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (verifyError) {
      toast.error(verifyError, {
        duration: 1000,
      });

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (notauth) {
      toast.error('Please Login first', {
        duration: 1000,
      });

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, []);

  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}shop/getAllShops`);
    const dat1 = await res.json();
    setData(dat1.shops);
    setLoad(0);
  };
  const handleSearch = async () => {
    if (debouncedSearch.length > 0) {
      const res = await fetch(`${BASE_URL}shop/getAllShops?keyword=${debouncedSearch}`);
      const data = await res.json();
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
  useEffect(() => {
    handleSearch();
  }, [debouncedSearch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-center overflow-hidden">
      <HeroSection search={search} setSearch={setSearch} />
      <CardsSection data={data} setData={setData} load={load} />
      <Toaster />
    </div>
  );
};

export default Home;
