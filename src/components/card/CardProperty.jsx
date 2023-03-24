import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineBed } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";

function CardProperty({ name, price, image, category, feature }) {
  return (
    <div className="w-full bg-white rounded-xl p-2 space-y-2">
      <div className="relative w-full h-44 rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="absolute top-2 right-2 text-lg p-1.5 rounded-full bg-white cursor-pointer">
          <AiOutlineHeart />
        </span>
      </div>
      <div className="flex gap-2">
        {category?.map((item, index) => (
          <span
            key={index}
            className="text-xs py-1 px-3 rounded-full bg-gray-200 text-gray-600"
          >
            {item}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold">$ {price}</h3>
      <p className="w-full truncate text-xl font-medium">{name}</p>
      <hr />
      <div className="w-full pb-1 flex items-center gap-2">
        {feature?.map((item, index) => (
          <div key={index} className="w-full flex items-center gap-2 text-sm">
            <span className="text-blue-400 p-1 rounded-full bg-blue-50">
              {index === 0 ? <MdOutlineBed /> : <GiBathtub />}
            </span>
            {item.total} {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardProperty;
