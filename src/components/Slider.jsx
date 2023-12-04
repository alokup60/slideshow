import React, { useState } from "react";
import { data } from "./Data";

const Slider = () => {
  const [activeImg, setActiveImg] = useState(0);
  const prevHandler = () => {
    setActiveImg(!activeImg ? data.length - 1 : activeImg - 1);
  };
  const nextHandler = () => {
    setActiveImg((activeImg + 1) % data.length);
  };

  return (
    <div className="flex justify-center flex-col mx-auto items-center gap-4 mt-[4rem]">
      <h3 className="font-bold text-2xl text-orange-400">Slider</h3>
      <div className="flex gap-4">
        <button className="font-semibold text-green-500" onClick={prevHandler}>
          Prev
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

        <button className="font-semibold text-green-500" onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
