import React from "react";
import Container from "../Container";
import { BsArrowRight } from "react-icons/bs";

function Blogs() {
  const moreBlogs = [1, 2, 3];
  return (
    <Container className="w-full h-fit lg:min-h-screen px-6 md:px-20 py-20 md:py-32 lg:py-20 flex flex-col gap-10 lg:justify-center bg-white">
      <div className="w-full space-y-5">
        <h3 className="uppercase text-lg font-medium text-blue-400 text-center md:text-left">
          Blogs
        </h3>
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-20">
          <h1 className="w-full md:w-6/12 text-5xl font-bold leading-tight text-center md:text-left">
            Articles Related to Aesthetic Home Design
          </h1>
          <buttton className="w-fit text-base text-center md:text-left flex items-center gap-2 cursor-pointer">
            Explore All Blogs <BsArrowRight />
          </buttton>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2 space-y-2">
            <div className="w-full h-80 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <p className="text-gray-500">August 20, 2022</p>
            <h3 className="text-3xl font-bold">
              You'll save time and money on trial-and-error decorating.
            </h3>
            <p className="text-gray-600 my-1">
              Knowing your home aesthetic means you get access to the years and
              years of interior design study done by professional decorations.
              No more having to see if the metal print of your favorite...
            </p>
          </div>
          <div className="space-y-5 w-full lg:w-1/2 ">
            {moreBlogs?.map((index) => (
              <>
                <div key={index} className="flex items-start gap-5">
                  <div className="w-2/3 lg:w-1/2 h-32 rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-gray-500 text-xs">August 20, 2022</p>
                    <h3 className="text-xl font-bold">
                      You'll save time and money on trial-and-error decorating.
                    </h3>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Blogs;
