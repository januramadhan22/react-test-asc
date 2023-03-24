import React from "react";
import { HiOutlineHomeModern, HiOutlineWallet } from "react-icons/hi2";
import { TbHomeStats } from "react-icons/tb";

function CardFeatures({ index, title, description }) {
  return (
    <div className="w-full p-8 rounded-3xl flex flex-col gap-8 bg-white hover:shadow-lg transition-all ease-in duration-200">
      <span className="text-5xl text-blue-400">
        {index === 0 ? (
          <HiOutlineHomeModern />
        ) : index === 1 ? (
          <TbHomeStats />
        ) : (
          <HiOutlineWallet />
        )}
      </span>
      <div className="space-y-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default CardFeatures;
