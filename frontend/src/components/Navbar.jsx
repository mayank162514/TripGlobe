import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const backgroundColor = "bg-white";

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="flex flex-row  justify-between bg-darkBackground p-5 md:px-32  text-white">
        <div className="flex items-center">
          <h1 className=" text-xl cursor-pointer font-bold">🏝️TripGlobe</h1>
        </div>

        <div className="  hidden lg:flex gap-4 items-center font-semibold">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Destinations
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div className=" hidden lg:flex  flex-row items-center gap-5 ">
          <h1 className=" hover:text-brightColor transition-all cursor-pointer font-semibold">
            Register
          </h1>
          <Button title="login" backgroundColor={backgroundColor} />
        </div>

        <div
          className=" lg:hidden flex items-center p-2"
          onClick={handleChange}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex  flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8  w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="destination"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Destinations
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Contact
        </Link>
        <div
          className=" flex flex-col lg:hidden 
        lg:flex-row items-center gap-5 "
        >
          <h1 className=" hover:text-brightColor transition-all cursor-pointer">
            Register
          </h1>
          <Button title="Login" backgroundColor={backgroundColor} />
        </div>
      </div>
    </>
  );
};

export default Navbar;