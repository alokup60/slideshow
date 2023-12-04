import React, { useEffect, useState } from "react";
import { data } from "./Data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";

const Slider = () => {
  const [activeImg, setActiveImg] = useState(0);
  const prevHandler = () => {
    setActiveImg(!activeImg ? data.length - 1 : activeImg - 1);
  };
  const nextHandler = () => {
    setActiveImg((activeImg + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextHandler();
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImg]);
  return (
    <div className="flex justify-center flex-col mx-auto items-center gap-4 mt-[4rem]">
      <h3 className="font-bold text-2xl text-orange-400">Slider</h3>
      <div className="flex gap-3">
        <button
          className="font-semibold text-green-500 text-2xl"
          onClick={prevHandler}
        >
          <FaArrowCircleLeft />
        </button>
        {data.map((url, i) => (
          <img
            key={url}
            src={url}
            className={`w-[600px] h-[350px] rounded-md + ${
              activeImg === i ? "block" : "hidden"
            }`}
          />
        ))}

        <button
          className="font-semibold text-green-500 text-2xl"
          onClick={nextHandler}
        >
          <FaArrowCircleRight />
        </button>
      </div>
      <div className="flex">
        {data.map((dot, i) =>
          activeImg === i ? <GoDotFill key={i} /> : <GoDot key={i} />
        )}
      </div>
    </div>
  );
};

export default Slider;
