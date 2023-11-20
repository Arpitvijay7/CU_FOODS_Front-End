import React from "react";
import { Link } from "react-router-dom";
const ImageWithDishNameComponent = ({ url, name }) => {
  return (
    <Link
      to={`/mobilesearch?keyword=${name}`}
      className="flex flex-col items-center gap-y-2 w-max"
    >
      <img
        className="w-28 h-28 object-cover rounded-full mix-blend-multiply"
        src={url}
      />
      <p className="w-14">{name}</p>
    </Link>
  );
};

const ExploreSection = () => {
  const sectionData = [
    {
      name: "Pizza",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg",
    },
    {
      name: "Chole Bhature",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699285957/comrvst0cnpa9fh8spwk.webp",
    },
    {
      name: "Biriyani",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699196242/nxkuvhjeswkw4fmtqj84.jpg",
    },
    {
      name: "Burger",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699207770/wbdqomqsbhltgmm1gsln.jpg",
    },
    {
      name: "Dosa",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699283982/njsx06fu8u7cmxobpry5.jpg",
    },
    {
      name: "Fried Rice",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699282807/gamkncyzl4pojdvlmgh3.jpg",
    },
    {
      name: "Rolls",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699209309/aiasq4wzv3mkdf3fa0eu.jpg",
    },
    {
      name: "Rice",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699281611/tyzrao0tgctvt7mgdrb5.jpg",
    },
    {
      name: "Pav Bhaji",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280269/duhpojgtybsjz6pu5crh.webp",
    },
    {
      name: "Fries",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699293881/yuczggthrrfofu4nymwa.jpg",
    },
  ];
  return (
    <section className="lg:hidden">
      <div className="divider text-gray-500 tracking-widest text-xs uppercase">
        Whats on your mind?
      </div>
      <div className="w-full -mt-3 p-3 grid grid-rows-2 grid-flow-col gap-x-5 gap-y-3 overflow-x-scroll scrollbar scrollbar-none">
        {sectionData &&
          sectionData.map((val, index) => (
            <ImageWithDishNameComponent name={val.name} url={val.url} />
          ))}
      </div>
    </section>
  );
};

export default ExploreSection;
