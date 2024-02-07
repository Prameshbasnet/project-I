import React, { useState } from "react";

// logo

import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo2.png";

// navbar data

export const NavBar = () => {
  const [NavbarData, setNavabarData] = useState([
    {
      id: 1,
      name: "Inaguration",
      Subname: [
        {
          title: "Web Design",
          description: "Create amazing designs and develop your brand on DnD",
        },
        {
          title: "Web Templates",
          description:
            "Explore 200+ designer made templates & start with the right for you",
        },
        {
          title: "Advanced Web Development",
          description:
            "Build your next project with our advanced web development services",
        },
        {
          title: "Mobile App",
          description: "Build customise and manage your website on the go.",
        },
        {
          title: "Hire a Professional",
          description:
            "Hire a professional web designer or developer for your next project",
        },
        {
          title: "WEBSITE ESSENTIALS",
          description: "Learn how to build your own website",
        },
        {
          title: "Become a Partner",
          description: "Gain partner benefits & scale your business",
        },
      ],
    },
    {
      id: 2,
      name: "Business",
      Subname: [
        {
          title: "Service Business",
          description:
            "Manage bookings, payments, staff and clients with our scheduling solution",
        },
        {
          title: "eCommerce Websites",
          description:
            "Self products and mangage fulfillment from one eCommerce platform",
        },
        {
          title: "Blog Website",
          description:
            "Share ideas with your audience and drive traffic to your website",
        },
        {
          title: "Resturants",
          description:
            "Display your menu snd take orders & reservations online",
        },
        {
          title: "Mobile App",
          description: "Build customise and manage your website on the go.",
        },
        {
          title: "Fitness",
          description:
            "Offer classes and manage your clients, bookings and payments online",
        },
        {
          title: "Tools & Features",
          description: "Find the right tools for your business",
        },
      ],
    },
    {
      id: 3,
      name: "Assets",
      Subname: [
        {
          title: "All Features",
          description:
            "Find everything you need to build your site and run your business",
        },
        {
          title: "Web Design Inspiration",
          description:
            "Get insired by unique design & powerful websites built on Dnd",
        },
        {
          title: "DnD Learn",
          description:
            "Take video courses & lessons and gain the skills you need to succeed online",
        },
        {
          title: "DnD Blog",
          description:
            "Get business tips, online marketting guidance, and the latest websites trends",
        },
      ],
    },
    {
      id: 4,
      name: "Pricing",
    },
    {
      id: 5,
      name: "Support",
    },
    {
      id: 6,
      name: "DnD Studio",
    },
    {
      id: 7,
      name: "Enterprise",
    },
  ]);
  return (
    <div className=" hover:bg-white transition-all duration-300 border-b border-white/30 group pt-4 shadow-lg  w-full">
      <div className="container xl:mx-20  flex  items-center  w-full">
        <div className="mr-16">
          <img
            className=" hidden group-hover:flex "
            src={Logo}
            alt="logo"
            height={110}
            width={110}
          />
          <img
            className=" flex group-hover:hidden "
            src={Logo2}
            alt="logo"
            height={110}
            width={110}
          />
        </div>
        <div className="hidden lg:flex w-full">
          <ul className=" flex text-white w-max group-hover:text-primary  font-Montserrat text-xl  gap-x-10">
            {NavbarData?.map((element) => (
              <li
                onMouseOver={() => {
                  setNavabarData((prev) =>
                    prev.map((item) =>
                      item.id === element.id
                        ? { ...item, active: true }
                        : { ...item, active: false }
                    )
                  );
                }}
                onMouseOut={() => {
                  setNavabarData((prev) =>
                    prev.map((item) => ({ ...item, active: false }))
                  );
                }}
                className="relative text-[20px] font-semibold group "
                key={element.id}
              >
                <a href="#">{element.name}</a>
                {element.Subname && element.active && (
                  <div className=" ">
                    <div className=" bg-white absolute font-Montserrat justify-start pt-12 items-center w-max h-max p-5.5 lg:flex gap-10">
                      <ul className="gap-x-6 py-10  font-normal ">
                        {element?.Subname?.map((subdata) => (
                          <li key={subdata.title}>
                            <div>
                              <a href="#">{subdata.title}</a>
                            </div>
                            <div>
                              <p className="font-light text-[12px]">
                                {subdata.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};
