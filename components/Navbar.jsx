"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      href: "#hero",
    },
    {
      id: 2,
      link: "about",
      href: "#about",
    },
    {
      id: 3,
      link: "skills",
      href: "#skills",
    },
    {
      id: 4,
      link: "projects",
      href: "#projects",
    },
    {
      id: 5,
      link: "contact",
      href: "#contact",
    },
  ];

  // Function to hide nav on resize
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Assuming 768px is your md breakpoint
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between z-20 items-center w-full h-14 px-4 font-mono text-xl bg-darkblue-951 text-[#CCD6F6] fixed nav">
      <div id="#home">
        {/* Nav Logo */}
        <h1 className="text-4xl font-signature ml-2">
          <a
            className="link-underline link-underline-black flex hover:scale-125 duration-200 font-mono hover:text-[#64FFDA]"
            href="#hero"
            rel="noreferrer">
            <FaCode />
            <span>JE</span>
          </a>
        </h1>
      </div>

      {/* looping through the links array to display the navbar links */}
      <ul className="hidden md:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-[#CCD6F6] hover:scale-125 duration-200 link-underline hover:text-[#64FFDA]">
            <Link href={href}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* toggle functionality for hamburgar menu */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-30 text-[#CCD6F6] md:hidden hover:text-[#64FFDA]">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* dropdown navbar links */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full z-20 h-screen bg-gradient-to-b from-darkblue-951 to-gray-700 text-[#CCD6F6] ">
          {links.map(({ id, link, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-[#64FFDA]">
              <Link onClick={() => setNav(!nav)} href={href}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
