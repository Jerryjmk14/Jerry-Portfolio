import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="text-gray-600 body-font pt-12 mx-2 md:mx-24">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className=" text-2xl font-medium mb-2 text-[#CCD6F6]">
            Hi, my name is
          </p>
          <h1 className="title-font sm:text-6xl text-4xl font-medium mb-2 text-[#64FFDA] ">
            Jeremiah Egwa
            {/* <br class="hidden lg:inline-block">readymade gluten/</br>Name */}
          </h1>
          <h2 className="text-[#8892B0] sm:text-3xl text-2xl mb-3 leading-relaxed">
            I am a FrontEnd Developer
          </h2>
          <p className="mb-6 text-[#8892B0]">
            With a passion for building innovative and solution based projects!
          </p>

          {/* Hero button and social media links */}
          <div className="sm:flex justify-between sm:items-center gap-1 sm:gap-3 md:gap-4 cursor-pointer">
            {/* Hero Button */}
            <button className="inline-flex mb-8 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-[#64FFDA] hover:scale-110 duration-200 hover:text-black rounded text-lg animate-pulse">
              <a href="#projects"> Projects</a>
            </button>

            {/* Social media links */}
            <div className="flex justify-between items-center gap-1 sm:gap-3 md:gap-4">
              <div className="bg-indigo-500 rounded-full p-4 text-white hover:bg-[#64FFDA] hover:scale-110 duration-200 hover:text-black text-lg cursor-pointer animate-bounce">
                <Link href="https://www.linkedin.com/in/jeremiah-egwa">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="bg-indigo-500 rounded-full p-4 text-white hover:bg-[#64FFDA] hover:scale-110 duration-200 hover:text-black text-lg cursor-pointer animate-bounce">
                <Link href="https://github.com/Jerryjmk14">
                  <FaGithub />
                </Link>
              </div>
              <div className="bg-indigo-500 rounded-full p-4 text-white hover:bg-[#64FFDA] hover:scale-110 duration-200 hover:text-black text-lg cursor-pointer animate-bounce">
                <Link href="https://www.twitter.com/jerryjmk">
                  <FaXTwitter />
                </Link>
              </div>
              {/* <div className="bg-indigo-500 rounded-full border p-4 z-10 border-black text-white hover:bg-[#64FFDA] hover:scale-110 duration-200 hover:text-black text-lg cursor-pointer animate-bounce">
                <FaWhatsapp />
              </div> */}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="lg:max-w-xs lg:w-full md:w-1/2 w-5/6 hover:scale-110 duration-200 shadow-lg shadow-black p-3 rounded-xl bg-indigo-900 animate-pulse">
          <Image
            className="object-cover object-center rounded-2xl border border-[#64FFDA] "
            alt="hero"
            src="/hero-profile-img.jpg"
            width={500}
            height={500}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
