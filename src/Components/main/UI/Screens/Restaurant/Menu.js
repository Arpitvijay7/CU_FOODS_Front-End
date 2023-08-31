import React, { useState, useEffect } from "react";
import MenuItemCard from "./MenuItemCard.js";
import { BASE_URL } from "../../../../Core/API/endpoint.js";
import axios from "axios";
const Menu = ({ id }) => {
  const [menu, setMenu] = useState([]);
  const [load, setLoad] = useState(1);

  const fetchMenu = async () => {
    const {data} = await axios(`${BASE_URL}shop/getMenu/${id}`);
    if (data.message === "Success") {
      setMenu(data.Menu);
      setLoad(0);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchMenu();
  }, []);

  return (
    <>
      {load ? (
        <div className="w-screen h-96 grid place-items-center">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-rose-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      ) : (<>
        <div className="flex flex-wrap w-full">
          <section className="text-gray-600 body-font">
            <div className="px-5 pt-10 pb-24">
              <div className="flex flex-wrap w-full">
                {menu &&
                  menu.map((val, index) => {
                    return(<>
                    <MenuItemCard
                      key={index}
                      price={val.price}
                      price_half={val.price_half}
                      price_full={val.price_full}
                      name={val.name}
                      imgLink={val.image.path}
                      details={val.description}
                      ratings={val.rating}
                      id={val._id}
                      dualOption={val.DualOptions}
                      shop={val.shop}
                    />
                    
                    </>
                    )
                  })}
              </div>
            </div>
          </section>
        </div>
        </>

      )}
    </>
  );
};

export default Menu;
