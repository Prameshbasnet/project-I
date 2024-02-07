import React from 'react';
import { FaStore, FaBriefcase, FaBloggerB, FaHotel } from "react-icons/fa";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { MdEmojiEvents } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Hero = () => {
    return (
        <section className='bg-accent'>
            <div className='p-28'>
                <div className=''>
                    <h1 className='text-center text-6xl'>Create a website without limits</h1>
                    <p className='text-center my-8 text-xl'>What kind of website would you like to create ?</p>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-4 items-center gap-3'>
                            <a className='flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl cursor-pointer'>
                                <FaStore />
                                Online Store
                            </a>
                            <a href="#" className='flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl cursor-pointer'>
                                <FaBriefcase />
                                Portfolio
                            </a>
                            <a href="#" className='flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl cursor-pointer'>
                                <FaBloggerB />
                                Blog
                            </a>
                            <a href="#" className='flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl cursor-pointer'>
                                <BiSolidBriefcaseAlt />
                                Consultant
                            </a>
                            <a href="#" className='flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl cursor-pointer'>
                                <SlCalender />
                                Services Business
                            </a>
                            <a href="#" className='flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl cursor-pointer'>
                                <FaHotel />
                                Restaurant
                            </a>
                            <a href="#" className='flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl cursor-pointer'>
                                <MdEmojiEvents />
                                Event
                            </a>
                            <a href="#" className='flex items-center justify-center p-2 gap-3 rounded-full border border-black text-2xl cursor-pointer      '>
                                ...Other
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Hero;
