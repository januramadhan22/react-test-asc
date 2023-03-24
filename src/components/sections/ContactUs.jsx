import React from "react";
import Container from "../Container";

function ContactUs() {
  return (
    <Container className="w-full h-fit lg:min-h-fit px-6 md:px-20 py-20 md:py-32 lg:py-20 flex flex-col gap-6 lg:justify-center bg-blue-100">
      <h3 className="uppercase text-lg font-medium text-center md:text-left">
        Find Home With Us
      </h3>

      <h1 className="w-full md:w-8/12 lg:w-6/12 text-5xl font-bold leading-tight text-center md:text-left">
        Articles Related to Aesthetic Home Design
      </h1>

      <button className="mt-10 mx-auto md:mx-0 px-6 py-2 rounded-2xl w-fit bg-black text-white">
        Find Now
      </button>
    </Container>
  );
}

export default ContactUs;
