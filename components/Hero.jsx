import React from "react";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font pt-12">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="text-[#64FFDA]">Hi, my name is</p>
          <h1 className="title-font sm:text-6xl text-4xl font-medium text-[#CCD6F6]">
            Jeremiah Egwa
            {/* <br class="hidden lg:inline-block">readymade gluten/</br>Name */}
          </h1>
          <h2 className="text-[#8892B0] sm:text-3xl text-2xl mb-2 leading-relaxed">
            I am a FrontEnd Developer
          </h2>
          <p className="mb-2 text-[#8892B0]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            veniam.
          </p>
          <div className="">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-[#64FFDA] hover:text-black rounded text-lg">
              Projects
            </button>
          </div>
        </div>
        <div className="lg:max-w-xs lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center md:rounded-l-full"
            alt="hero"
            src="/hero-img1.jpg"
          />
        </div>
      </div>
    </section>
  );
}
