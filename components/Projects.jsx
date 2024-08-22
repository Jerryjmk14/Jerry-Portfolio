import React from "react";
import Image from "next/image";

export default function Projects() {
  const projectImg = [
    { id: 1, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 2, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 3, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 4, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 5, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 6, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 7, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 8, name: "project", imgUrl: "/hero-img1.jpg" },
  ];
  return (
    <section id="projects" className="w-full sm:text-center mt-9 p-6 sm:p-14">
      <div className="sm:inline-block sm:w-auto mx-auto border-b-4 border-[#64FFDA] mb-3">
        {/* Project Title */}
        <h1 className="text-white sm:text-center mt-6 text-4xl font-semibold p-1">
          Projects
        </h1>
      </div>
      <h2 className="text-[#8892B0] text-2xl mb-4">
        Checkout some of my projects!
      </h2>
      {/* Projects Image Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:mx-12">
        {/* Mapping through the projectImg array to display project image cards */}
        {projectImg.map(({ id, name, imgUrl }) => {
          return (
            <div
              key={id}
              className="shadow-lg shadow-black rounded-xl hover:scale-110 duration-200">
              <Image
                className="object-cover object-center border border-[#64FFDA] rounded-2xl"
                src={imgUrl}
                alt={name}
                width={500}
                height={500}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
