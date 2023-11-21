import { Avatar, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ImageWithDishNameComponent = ({ url, name }) => {
  return (
    <Link
      style={{ userSelect: "none" }}
      to={`/mobilesearch?keyword=${name}`}
      className="flex flex-col items-center text-center gap-y-2 w-max"
    >
      <Avatar sx={{ height: "6rem", width: "6rem" }} src={url} />

      <p className="w-16 text-center">{name}</p>
    </Link>
  );
};

const ExploreSection = () => {
  const user = useSelector((state) => state.users);
  const sectionData = [
    {
      name: "Pizza",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699280159/xgjfexiqpj3lzr4b8ju9.jpg",
    },
    {
      name: "Chole Bhature",
      url: "https://static.vecteezy.com/system/resources/previews/015/933/043/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg",
    },
    {
      name: "Biryani",
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
      name: "Garlic Bread",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699281287/uqfclvtzr4d3byhhlckg.jpg",
    },
    {
      name: "Sandwichs",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699282629/jfq2li42lqljupmrbgwa.jpg",
    },
    {
      name: "Pasta",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699214910/zr7bz7xojpffd2g7idue.jpg",
    },
    {
      name: "Maggi",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699212090/wv7tzmc1lia2bo7z9m5j.jpg",
    },
    {
      name: "Wraps",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699292495/t2309qpjajtunpq9s38z.webp",
    },
    {
      name: "Subs",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699289353/qxelzrglbekmseqqopj7.jpg",
    },
    {
      name: "Cold Coffee",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699287447/paodferqpsunkvsnhno8.jpg",
    },
    {
      name: "Shakes",
      url: "https://hips.hearstapps.com/hmg-prod/images/delish-220524-chocolate-milkshake-001-ab-web-1654180529.jpg?crop=0.647xw:0.972xh;0.177xw,0.0123xh&resize=1200:*",
    },
    {
      name: "Vegg Nuggets",
      url: "https://myfoodstory.com/wp-content/uploads/2019/11/Crispy-Veg-Nuggets-with-Sichuan-Sauce-1.jpg",
    },
    {
      name: "Paneer Strips",
      url: "https://www.mintsrecipes.com/wp-content/uploads/Paneer-Fingers-Recipe-In-Hindi-p2.jpg",
    },
    {
      name: "Chicken Nuggets",
      url: "https://w7.pngwing.com/pngs/362/843/png-transparent-chicken-nuggets-crispy-fried-chicken-chicken-nugget-kfc-chicken-fingers-fried-chicken-food-baking-recipe.png",
    },
    {
      name: "Noodles",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699260707/nvqagujmraupgpvm2heq.jpg",
    },
    {
      name: "Soya Chaap",
      url: "https://www.foodie-trail.com/wp-content/uploads/2022/06/20220610_193526984_iOS-scaled.jpg",
    },
    {
      name: "Manchurian",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699215808/cyaqkqgve84snv37q6sf.jpg",
    },
    {
      name: "Momos",
      url: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
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
      name: "French Fries",
      url: "https://res.cloudinary.com/dzgaxsvy2/image/upload/v1699293881/yuczggthrrfofu4nymwa.jpg",
    },
    {
      name: "Bullets",
      url: "https://www.justgotochef.com/img/1687514079-Screenshot_2023-06-23-13-58-57-15_40deb401b9ffe8e1df2f1cc5ba480b12.jpg?w=815",
    },
  ];
  return (
    <section className="lg:hidden">
      <div className="py-5 text-start px-5 font-bold text-xl">
        {user.auth && user.details.name ? (
          <span>{user.details.name.split(" ")[0]} , </span>
        ):<></>}
        What's on your mind ?
      </div>
      <div className="w-full -mt-3 p-3 grid grid-rows-2 grid-flow-col gap-x-5 gap-y-3 overflow-x-scroll scrollbar scrollbar-none">
        {sectionData &&
          sectionData.map((val, index) => (
            <ImageWithDishNameComponent
              name={val.name}
              url={val.url}
              key={index}
            />
          ))}
      </div>
    </section>
  );
};

export default ExploreSection;
