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
  const [page, setPage] = useState(1);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [menuLength, setMenuLength] = useState();
  const [searchItems, setSearchItems] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const fetchMenu = async () => {
    if (page !== 1) {
      setPaginationLoading(true);
    }
    const { data } = await axios(`${BASE_URL}shop/getMenu/${id}?page=${page}`);

    if (data.message === "Success") {
      // setData(data.Menu);
      setData((prev) => {
        const newData = data.Menu;
        return [...prev, ...newData];
      });
      setMenuLength(data.MenuLength);
      setTotalPage((prev) => {
        return Math.ceil(data.MenuLength / 9);
      });
      setShopName(data.shopName);
      setLoad(0);
    }
    setPaginationLoading(false);
  };
  const handleSearch = async () => {
    setLoad(true);
    const res = await fetch(`${BASE_URL}shop/getMenu/${id}?keyword=${search}`);
    const data = await res.json();
    if (search.length > 0) {
      if (data["Menu"].length !== 0) {
        setSearchItems(data.Menu);
        setShopName(data.shopName);
      } else {
        setSearchItems([]);
        setShopName(data.shopName);
      }
    } else {
      fetchMenu();
      setShopName(data.shopName);
    }
    setLoad(0);
  };
  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      console.log(page, totalPage, paginationLoading);
      if (paginationLoading === false && page < totalPage) {
        console.log(page);
        setPage((prev) => prev + 1);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [data, paginationLoading]);
  useEffect(() => {
    if (menuLength > data.length || page === 1) {
      fetchMenu();
    }
  }, [page]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (search.length > 0) {
      handleSearch();
    }
    // yahi pe dikkat hai
  }, [search]);
  return (
    <div className="h-[150vh]">
      <Banner
        id={id}
        search={search}
        setSearch={setSearch}
        shopName={shopName}
      />
      <Menu
        data={search.length === 0 ? data : searchItems}
        id={id}
        load={load}
        shopName={shopName}
      />
      {paginationLoading && (
        <div className="pb-20 grid place-items-center">
          <div class="lds-spinner-menu">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
