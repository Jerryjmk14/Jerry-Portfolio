import React from "react";

export default function Skills() {
  const skillsImage = [
    { id: 1, name: "HTML", imgUrl: "/skills-images/html-5-svgrepo-com.svg" },
    { id: 2, name: "CSS", imgUrl: "/skills-images/css-svgrepo-com.svg" },
    {
      id: 3,
      name: "JavaScript",
      imgUrl: "/skills-images/js-official-svgrepo-com.svg",
    },
    { id: 3, name: "REACT.JS", imgUrl: "/skills-images/react-svgrepo-com.svg" },
    { id: 3, name: "NEXT.JS", imgUrl: "/skills-images/nextjs-svgrepo-com.svg" },
    { id: 3, name: "SASS", imgUrl: "/skills-images/sass-svgrepo-com.svg" },
    {
      id: 3,
      name: "TAILWIND CSS",
      imgUrl: "/skills-images/tailwindcss-icon-svgrepo-com.svg",
    },
    {
      id: 3,
      name: "BOOTSTRAP",
      imgUrl: "/skills-images/bootstrap-4-logo-svgrepo-com.svg",
    },
  ];
  return (
    <section className="w-full sm:text-center mt-4 p-6 sm:p-14">
      <div className="sm:inline-block sm:w-auto mx-auto border-b-4 border-[#64FFDA] mb-4">
        <h1
          id="about"
          className="text-white sm:text-center text-4xl font-semibold p-1">
          Skills
        </h1>
      </div>
      <h2 className="text-[#8892B0] text-2xl mb-4">
        Some skills I have and technologies I have worked with.
      </h2>
      {/* Skills Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:mx-12">
        {skillsImage.map(({ id, name, imgUrl }) => {
          return (
            <div
              key={id}
              className="shadow-lg shadow-black p-3 rounded-xl hover:scale-110 duration-200">
              <img
                className="object-cover object-center rounded-xl"
                src={imgUrl}
                alt={name}
              />
              <h2 className="mt-1">{name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
