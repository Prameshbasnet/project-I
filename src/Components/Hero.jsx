import React from "react";
import { FaStore, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="my-10">
        <h1 className="text-center text-6xl my-7">
          Create a website without limits
        </h1>
        <p className="text-center my-5">
          What kind of website would you like to create ?
        </p>
        <div className="grid grid-cols-4">
          <a href="#">
            <FaStore />
            Online Store
          </a>
          <a href="#">
            <FaBriefcase />
            Portfolio
          </a>
          <a href="#">Blog</a>
          <a href="#">Consultant</a>
          <a href="#">Services Business</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
