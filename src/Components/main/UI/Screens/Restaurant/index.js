import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Menu from "./Menu.js";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../../Core/API/endpoint.js";
import axios from "axios";
const Restaurant = () => {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(1);
  const [shopName, setShopName] = useState("");

  const fetchMenu = async () => {
    const { data } = await axios(`${BASE_URL}shop/getMenu/${id}`);

    if (data.message === "Success") {
      setData(data.Menu);
      setShopName(data.shopName);
      setLoad(0);
    }
  };
  
  const handleSearch = async () => {
    setLoad(true);
    const res = await fetch(`${BASE_URL}shop/getMenu/${id}?keyword=${search}`);
    const data = await res.json();
    if (search.length > 0) {
      if (data["Menu"].length !== 0) {
        setData(data.Menu);
        setShopName(data.shopName);
      } else {
        setData([]);
        setShopName(data.shopName);
      }
    } else {
      fetchMenu();
      setShopName(data.shopName);
    }
    setLoad(0);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMenu();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [search]);
  return (
    <>
      <Banner id={id} />
      <Menu
        data={data}
        search={search}
        setSearch={setSearch}
        id={id}
        load={load}
        shopName={shopName}
      />
    </>
  );
};

export default Restaurant;
