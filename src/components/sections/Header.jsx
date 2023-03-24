import React from "react";
import Container from "../Container";
import { IoLocationSharp, IoHome } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <Container className="w-full h-fit lg:h-screen px-6 md:px-20 py-20 md:py-32 lg:py-0 flex flex-col gap-10 lg:justify-center bg-blue-100">
      <h1 className="w-full md:max-w-md text-5xl font-bold leading-tight text-center md:text-left">
        Discover a place you will love to live
      </h1>
      <p className="w-full md:max-w-xl text-lg text-center md:text-left">
        Connect with more than 75 million renters looking for new homes using
        our comprehensive marketing platform.
      </p>
      <div className="max-w-3xl px-3 md:pl-5 md:pr-3 py-3 rounded-3xl flex flex-col md:flex-row justify-between gap-8 md:gap-0 bg-white">
        <div className="flex items-center justify-between md:justify-start gap-2 md:gap-8 lg:gap-16">
          <div className="flex items-center gap-2">
            <span className="p-1 md:p-2 text-blue-400 bg-blue-50 rounded-full">
              <IoLocationSharp />
            </span>
            <div className="text-xs md:text-sm text-left">
              <p className="font-semibold">Locations</p>
              <p className="text-gray-500">Bali, Indonesia</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-1 md:p-2 text-blue-400 bg-blue-50 rounded-full">
              <BsCurrencyDollar />
            </span>
            <div className="text-xs md:text-sm text-left">
              <p className="font-semibold">Price</p>
              <p className="text-gray-500">$5,000 - $10,000</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-1 md:p-2 text-blue-400 bg-blue-50 rounded-full">
              <IoHome />
            </span>
            <div className="text-xs md:text-sm text-left">
              <p className="font-semibold">Type of Home</p>
              <p className="text-gray-500">Apartment</p>
            </div>
          </div>
        </div>
        <button className="h-10 md:h-20 w-full md:w-20 rounded-xl md:rounded-3xl bg-black text-white flex justify-center items-center text-2xl md:text-4xl">
          <CiSearch />
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="flex gap-4 items-center">
          <h2 className="text-3xl font-bold">1500+</h2>
          <p className="text-sm font-light">
            Property
            <br />
            Ready
          </p>
        </div>
        <span className="h-full w-[1px] bg-white" />
        <div className="flex gap-4 items-center">
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-sm font-light">
            Happy
            <br />
            Customer
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Header;
