import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuBar = ["For Sell", "For Rent", "New Property", "Blogs", "KPR"];

  return (
    <>
      <div className="relative w-full flex justify-between items-center px-10 md:px-20 py-4 bg-white shadow-md">
        <button className="text-lg font-medium">Olinarom</button>

        <div className="w-fit hidden md:flex justify-center items-center gap-10">
          {menuBar?.map((menu, index) => (
            <button
              key={index}
              className="text-sm border-b border-b-white hover:border-b-black"
            >
              {menu}
            </button>
          ))}
        </div>

        <button className="hidden md:block px-4 py-2 rounded-full bg-black text-white text-sm">
          Login/Register
        </button>
        <button onClick={() => setOpen(true)} className="block md:hidden ">
          <HiOutlineMenu />
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="w-full h-screen bg-black opacity-20 absolute z-20 top-0 left-0"
          />
          <div className="absolute z-30 top-0 right-0 w-80 h-screen py-14 px-2 flex flex-col gap-10 items-center bg-white">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-5 text-2xl"
            >
              <IoCloseOutline />
            </button>
            <div className="w-full flex flex-col items-start ">
              {menuBar?.map((menu, index) => (
                <button
                  key={index}
                  className="text-left w-full px-4 py-3 rounded-md hover:bg-slate-100"
                >
                  {menu}
                </button>
              ))}
            </div>
            <button className="bg-black px-7 py-2 border border-black rounded-full font-medium text-white hover:bg-white hover:text-black">
              Login/Register
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
