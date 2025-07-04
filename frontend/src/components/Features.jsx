import React from "react";
import img from "../assets/img/feature.jpg";
import pic1 from "../assets/img/service.png";
import pic2 from "../assets/img/user.png";
import pic3 from "../assets/img/wallet.png";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14">
      <div className="w-full lg:w-2/4">
        <div className=" space-y-4">
          <h1 className="text-4xl font-semibold text-center md:text-start leading-tight">
            Get Ready to Explore, Get Ready to Experience!
          </h1>
          <p className=" text-gray-500	font-bold text-x2">
            Discover the Best Holiday Experience with TripGlobe! We're dedicated
            to curating the latest and greatest destinations from around the
            world, ensuring you always get the ultimate travel experience.
          </p>
        </div>

        <div className="w-full lg:w-3/5 mt-10 lg:ml-14">
          <img
            className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7]"
            src={img}
            alt="img"
          />
        </div>
      </div>

      <div className="w-full lg:w-2/4 space-y-10">
        <div className=" flex flex-row gap-5">
          <div className="flex flex-row items-center w-28">
            <img src={pic1} alt="img" />
          </div>
          <div className="space-y-3">
            <h1 className="font-bold text-xl">Friendly service</h1>
            <p className="text-gray-500 font-semibold">
              {" "}
              We will provide excellent and friendly service for the sake of our
              customers
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5">
          <div className="flex flex-row items-center w-28">
            <img src={pic2} alt="img" />
          </div>
          <div className="space-y-3">
            <h1 className="font-bold text-xl">Unforgettable experience</h1>
            <p className="text-gray-500 font-semibold">
              {" "}
              We will provide excellent and Unforgettable experience for the
              sake of our customers
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-5">
          <div className="flex flex-row items-center w-28">
            <img src={pic3} alt="img" />
          </div>
          <div className="space-y-3">
            <h1 className=" text-xl font-bold">Affordable prices</h1>
            <p className=" text-x2 font-semibold text-gray-500">
              {" "}
              We will provide excellent and Affordable prices for the sake of
              our customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;