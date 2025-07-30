import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const renderStep = steps.map((item) => {
    return (
      <div className={`flex-1 ${item.id % 2 === 0 ? '-mt-100' :''}`}>
        <span className="flex justify-center items-center mx-auto rounded-full w-18 h-18 mx-auto rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">{item.number}</span>
        <div>
          <div className="flex items-center gap-x-5 mt-10">
            <span className="flex bg-gradient-to-b from-orange-400 to-orange-500 text-white text-4xl ">{item.icon}</span>
          </div>
          <div className="flex-1 ">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-600 mt-2">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <div className="mr-auto w-fit">
          <Heading highlight=" Our " heading=" Process "></Heading>
        </div>
        <div className="flex items-center justify-between mt-50">{renderStep}</div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    icon: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    icon: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    icon: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    icon: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
