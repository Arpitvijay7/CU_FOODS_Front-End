import React from "react";
import Card from "./card";
import './Card.css'

const CardsSection = () => {
  const data=[
    {
      name:"Punjabi Rasoi",
      address:"Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat."
    },
    {
      name:"Zaika",
      address:"Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat."
    },
    {
      name:"MVR",
      address:"Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat."
    },
    {
      name:"Res3",
      address:"Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat."
    },
    {
      name:"Res4",
      address:"Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat."
    },
    {
      name:"Res5",
      address:"Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat."
    },
    {
      name:"Res6",
      address:"Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat."
    },
    {
      name:"Res7",
      address:"Photo booth fam kinfolk cold-pressed sriracha leggingsjianbing microdosing tousled waistcoat."
    }
  ]
  return (
    <>
      <div className="w-full -mt-14 card">
        <div className="">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">

                {data && data.map((val,id)=>{
                  return(
                    <Card name={val.name} address={val.address} />
                  )
                })}




              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CardsSection;
