import React from "react";

const ImageWithDishNameComponent = ({ url, name }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 w-max">
      <img className="w-28 h-28 rounded-full" src={url} />
      <p>{name}</p>
    </div>
  );
};

const ExploreSection = () => {
  return (
    <div className="w-full -mt-3 p-3 grid grid-rows-2 grid-flow-col gap-5 overflow-x-scroll scrollbar scrollbar-none">
      <ImageWithDishNameComponent
        name="pizza1"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza2"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza3"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza4"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza1"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza2"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza3"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza4"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza1"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza2"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza3"
        url="https://picsum.photos/536/354"
      />
      <ImageWithDishNameComponent
        name="pizza4"
        url="https://picsum.photos/536/354"
      />
    </div>
  );
};

export default ExploreSection;
