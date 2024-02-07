import React from "react";
import {
  FaStore,
  FaBriefcase,
  FaBloggerB,
  FaHotel,
  FaArrowRight,
} from "react-icons/fa";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { MdEmojiEvents } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Hero = () => {
  return (
    <section>
      {" "}
      {/*the is a backgroung color*/}
      <div className="h-max w-full bg-gradient-to-tr from-[#5a6ce6]  via-[#8a92b8]  % to-[#26338A]">
        <div className="p-28">
          <div className="text-center">
            <h1 className="text-center text-6xl">
              Create a website without limits
            </h1>
            <p className="text-center my-8 text-xl">
              What kind of website would you like to create ?
            </p>
          </div>
          <div className="">
            <div className="flex justify-center">
              <div className="grid grid-cols-4 items-center   gap-3">
                <div className="flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl">
                  <FaStore />
                  Online Store
                </div>

                <div className="flex items-center justify-center p-2 gap-3 rounded-full border border-black text-[15px] cursor-pointer sm:text-[20px] sm:justify-around sm:p-1">
                  <FaBriefcase />
                  Portfolio
                </div>
                <div className="flex items-center justify-center p-2 gap-3 rounded-full border border-black text-[15px] cursor-pointer sm:text-[20px] sm:justify-around sm:p-1 ">
                  <FaBloggerB />
                  Blog
                </div>
                <div className="flex items-center justify-center p-2 gap-3 rounded-full  border border-black text-[15px] cursor-pointer sm:text-[20px] sm:justify-around sm:p-1 ">
                  <BiSolidBriefcaseAlt />
                  Consultandiv
                </div>
                <div className="flex items-center justify-center p-2 gap-3 rounded-full border border-black text-[15px] cursor-pointer sm:text-[20px] sm:justify-around sm:p-1">
                  <SlCalender />
                  Business
                </div>
                <div className="flex items-center justify-center p-2 gap-3 rounded-full border border-black text-[15px] cursor-pointer sm:text-[20px] sm:justify-around sm:p-1">
                  <FaHotel />
                  Restaurant
                </div>
                <div className="flex items-center justify-center p-2 gap-3 rounded-full border border-black text-[15px] cursor-pointer sm:text-[20px] sm:justify-around sm:p-1">
                  <MdEmojiEvents />
                  Event
                </div>
                <div className="flex items-center justify-center p-2 gap-3 rounded-full border border-black text-[15px] cursor-pointer sm:text-[20px] sm:justify-around sm:p-1">
                  ...Other
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="flex p-2 gap-3 rounded-full border border-black text-[15px] cursor-pointer items-center justify-center sm:text-[20px] sm:justify-around ">
                Get Started
                <FaArrowRight />
              </button>
            </div>
            <p className="text-center mt-4">Trusted by 20+ users worldwide.</p>
            <div className=" container mt-10 mx-auto grid grid-cols-3 gap-6">
              <img
                src="https://imgs.search.brave.com/308RhKwr_nnai4XuekUhKahVcs9FcNdw-bP9eDQkyJU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMy8x/MC9mcmVlLWltYWdl/cy1mb3ItY29tbWVy/Y2lhbC11c2UtLTE3/LS5wbmc"
                alt="Your Image"
                className="w-full h-full rounded-lg"
              />
              <img
                src="https://imgs.search.brave.com/308RhKwr_nnai4XuekUhKahVcs9FcNdw-bP9eDQkyJU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMy8x/MC9mcmVlLWltYWdl/cy1mb3ItY29tbWVy/Y2lhbC11c2UtLTE3/LS5wbmc"
                alt="Your Image"
                className="w-full h-full rounded-lg"
              />
              <img
                src="https://imgs.search.brave.com/308RhKwr_nnai4XuekUhKahVcs9FcNdw-bP9eDQkyJU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMy8x/MC9mcmVlLWltYWdl/cy1mb3ItY29tbWVy/Y2lhbC11c2UtLTE3/LS5wbmc"
                alt="Your Image"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* one platform section */}
      <div className="my-[140px] container   xl:mx-auto ">
        <h1 className="my-[80px] text-6xl">
          One platform, <br /> infinite possibilities
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-14">
          <div className="border-t-2 border-black text-center">
            <h1 className="text-2xl my-2 font-semibold">Unlimited creation</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              impedit asperiores numquam ratione voluptates rem ut iste fuga.
              Eveniet suscipit{" "}
            </p>
          </div>
          <div className="border-t-2 border-black text-center">
            <h1 className="text-2xl my-2 font-semibold">Unlimited creation</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              impedit asperiores numquam ratione voluptates rem ut iste fuga.
              Eveniet suscipit{" "}
            </p>
          </div>
          <div className="border-t-2 border-black text-center">
            <h1 className="text-2xl my-2 font-semibold">Unlimited creation</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              impedit asperiores numquam ratione voluptates rem ut iste fuga.
              Eveniet suscipit{" "}
            </p>
          </div>
        </div>
        <button className=" mt-16 p-2 bg-primary text-white px-6 gap-3 rounded-full border border-black text-[15px]   items-center justify-center sm:text-[20px] sm:justify-around ">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
