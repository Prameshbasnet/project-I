import React from "react";

// logo

import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo2.png";

// navbar data

const NavbarData = [
  {
    id: 1,
    name: "Inaguration",
    Subname: [
      {
        title: "Web Design",
        description: "Create amazing designs and develop your brand on DnD",
      },
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
        subtitle: [
          {
            title: "Custom Domain Name",
          },
          {
            title: "Secure Web Hosting",
          },
          {
            title: "Logo Maker",
          },
          {
            title: "SEO Tools",
          },
        ],
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
        description: "Display your menu snd take orders & reservations online",
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
        subtitle: [
          {
            title: "Online Payments",
          },
          {
            title: "Multichannel Sales",
          },
          {
            title: "Point of sale",
          },
          {
            title: "Analytics & Reports",
          },
          {
            title: "Business Tools",
          },
          {
            title: "Event Creation",
          },
        ],
      },
    ],
  },
];

export const NavBar = () => {
  return (
    <div className=" hover:bg-white transition-all duration-300 border-b border-white/30 group">
      <div className="container mx-20  h-16 w-full">
        <div className="py-4">
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
      </div>
      ;
    </div>
  );
};
