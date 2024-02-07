import React from "react";
import { FaStore, FaBriefcase, FaBloggerB, FaHotel } from "react-icons/fa";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { MdEmojiEvents } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-accent">
      <div className="">
        <div className="">
          <h1 className="text-center text-6xl">
            Create a website without limits
          </h1>
          <p className="text-center my-5 text-xl">
            What kind of website would you like to create ?
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 items-center gap-9">
              <a href="#" className="flex items-center gap-3 text-2xl">
                <FaStore />
                Online Store
              </a>
              <a href="#" className="flex items-center gap-3 text-2xl">
                <FaBriefcase />
                Portfolio
              </a>
              <a href="#" className="flex items-center gap-3 text-2xl">
                <FaBloggerB />
                Blog
              </a>
              <a href="#" className="flex items-center gap-3 text-2xl">
                <BiSolidBriefcaseAlt />
                Consultant
              </a>
              <a href="#" className="flex items-center gap-3 text-2xl">
                <SlCalender />
                Services Business
              </a>
              <a href="#" className="flex items-center gap-3 text-2xl">
                <FaHotel />
                Restaurant
              </a>
              <a href="#" className="flex items-center gap-3 text-2xl">
                <MdEmojiEvents />
                Event
              </a>
              <a href="#" className="flex items-center gap-3 text-2xl">
                ...Other
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
