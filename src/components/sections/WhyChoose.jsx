import React from "react";
import CardFeatures from "../card/CardFeatures";
import Container from "../Container";

function WhyChoose() {
  const features = [
    {
      title: "Find your dream house",
      description:
        "Many ads for apartments and houses for sale in various locastions. Tap your finger on the screen then open the door of your dream house from here",
    },
    {
      title: "Find place of business",
      description:
        "Renting a place of business and buying and selling shop houses becomes easier. Meet your business and investment needs faster",
    },
    {
      title: "Smart feature rich",
      description:
        "There are 900 thousand property ads. Everything you can explore and plan using smart features like the Mortgage Calculator",
    },
  ];

  return (
    <Container className="w-full h-fit lg:h-screen px-6 md:px-20 py-20 md:py-32 lg:py-0 flex flex-col gap-10 lg:justify-center bg-white">
      <div className="w-full space-y-5">
        <h3 className="uppercase text-lg font-medium text-blue-400 text-center md:text-left">
          Why Choose Olinarom
        </h3>
        <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <h1 className="w-full md:w-full text-5xl font-bold leading-tight text-center md:text-left">
            Provides the most complete list of property
          </h1>
          <p className="w-10/12 text-lg text-gray-500 text-center md:text-left">
            Find the ideal property that is most suitable for you. Starting from
            houses for sale that are minimalist, apartments for sale that are
            exclusive.
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {features?.map((item, index) => (
          <CardFeatures
            key={index}
            index={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
}

export default WhyChoose;
