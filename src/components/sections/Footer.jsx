import React from "react";
import Container from "../Container";
import { BsInstagram } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Container className="w-full h-fit lg:min-h-fit px-6 md:px-20 py-20 md:py-32 lg:py-20 flex flex-col md:flex-row gap-6 md:justify-between bg-slate-900">
      <div className="text-white space-y-10 ">
        <h2 className="text-xl">Olinarom</h2>
        <p>
          Jl. Raya Meruya Ilir no. 88,
          <br />
          Kebon Jeruk, Jakarta Barat
          <br />
          Jakarta 11620, Indonesia
        </p>
        <div className="flex gap-8">
          <span className="text-lg">
            <BsInstagram />
          </span>
          <span className="text-lg">
            <TbBrandTelegram />
          </span>
          <span className="text-lg">
            <FaLinkedinIn />
          </span>
          <span className="text-lg">
            <FaTwitter />
          </span>
        </div>
      </div>
      <div className="text-white font-light flex gap-5 md:gap-10 lg:gap-20 justify-between md:justify-end items-start">
        <div className="flex flex-col gap-5">
          <button className="text-left w-fit">Home</button>
          <button className="text-left w-fit">For Sell</button>
          <button className="text-left w-fit">For Rent</button>
          <button className="text-left w-fit">New Property</button>
        </div>
        <div className="flex flex-col gap-5">
          <button className="text-left w-fit">Blogs</button>
          <button className="text-left w-fit">KPR</button>
          <button className="text-left w-fit">Referral</button>
          <button className="text-left w-fit">FAQs</button>
        </div>
        <div className="flex flex-col gap-5">
          <button className="text-left w-fit">Privacy & Policy</button>
          <button className="text-left w-fit">Terms & Conditions</button>
          <button className="text-left w-fit">Contact Us</button>
          <button className="text-left w-fit">Cookies Policy</button>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
