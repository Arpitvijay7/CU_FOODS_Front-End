import React from "react";
const MenuItemCard = ({ name, imgLink, price ,details,ratings,id}) => {
  const handleAddToCart=async (id)=>{
    const res=await fetch("http://localhost:4000/api/vi/cart/addToCart/"+id)
    const data=await res.json()
    console.log(data)
  }
  return (
    <>
      <div className="p-4 hover:border-2 border-rose-600 rounded-md shadow-xl shadow-rose-100 lg:w-[48%] m-2">
        <div className="h-full flex items-center sm:justify-start justify-center text-center sm:text-left">
          <div className="flex-grow sm:pl-8 text-left">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {name}
            </h2>
            <p className="text-blue-600">&#9733; &#9733; &#9733; &#9733; &#9733; {ratings} ratings</p>
            <p className="text-green-600 font-bold text-xl">&#8377; {price}</p>
            <p className="mb-4">
              {details}
            </p>
          </div>
          <div className="w-full md:w-1/3 relative pb-7">
            <img
              alt={name+" photo"}
              className="flex-shrink-0 rounded-lg w-32 h-32 md:w-48 md:h-48 object-cover object-center sm:mb-0 mb-4"
              src={imgLink}
            />
            <button onClick={()=>handleAddToCart(id)} className="absolute top-[63%] left-[8%] md:left-[20%] md:top-[80%] rounded-md">
                <p className="px-2 py-2 rounded bg-rose-500 hover:bg-rose-700 hover:shadow-lg shadow-md font-bold text-md text-white" >Add To Cart</p>
            </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
