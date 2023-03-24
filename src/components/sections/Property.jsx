import React from "react";
import Container from "../Container";
import { BsArrowRight } from "react-icons/bs";
import CardProperty from "../card/CardProperty";

function Property() {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Luxury House Brandnew piladelpia",
      price: 75000,
      category: ["House", "Negotiable"],
      feature: [
        { name: "bedroom", total: 4 },
        { name: "bathroom", total: 3 },
      ],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "The Awani Residence 3",
      price: 55000,
      category: ["Villa", "For Sale"],
      feature: [
        { name: "bedroom", total: 6 },
        { name: "bathroom", total: 4 },
      ],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Gold Coast View Apartment",
      price: 65000,
      category: ["Apartment", "For Sale"],
      feature: [
        { name: "bedroom", total: 6 },
        { name: "bathroom", total: 5 },
      ],
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Citraland BSB City Semarang",
      price: 45000,
      category: ["Apartment", "Negotiable"],
      feature: [
        { name: "bedroom", total: 5 },
        { name: "bathroom", total: 3 },
      ],
    },
  ];
  return (
    <Container className="w-full h-fit lg:h-screen px-6 md:px-20 py-20 md:py-32 lg:py-0 flex flex-col gap-10 lg:justify-center bg-blue-50">
      <div className="w-full space-y-5">
        <h3 className="uppercase text-lg font-medium text-blue-400 text-center md:text-left">
          Property
        </h3>
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-20">
          <h1 className="w-full md:w-8/12 text-5xl font-bold leading-tight text-center md:text-left">
            Property in cities <br /> and Provinces in Indonesia
          </h1>
          <buttton className="w-fit text-base text-center md:text-left flex items-center gap-2 cursor-pointer">
            Explore All Properties <BsArrowRight />
          </buttton>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {properties?.map((item) => (
          <CardProperty
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            category={item.category}
            feature={item.feature}
          />
        ))}
      </div>
    </Container>
  );
}

export default Property;
