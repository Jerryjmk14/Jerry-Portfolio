import React from "react";

export default function Projects() {
  const projectImg = [
    { id: 1, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 2, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 3, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 3, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 3, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 3, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 3, name: "project", imgUrl: "/hero-img1.jpg" },
    { id: 3, name: "project", imgUrl: "/hero-img1.jpg" },
  ];
  return (
    <section className="w-full sm:text-center mt-4 p-6 sm:p-14">
      <div className="sm:inline-block sm:w-auto mx-auto border-b-4 border-[#64FFDA] mb-3">
        <h1
          id="about"
          className="text-white sm:text-center text-4xl font-semibold p-1">
          Projects
        </h1>
      </div>
      <h2 className="text-[#8892B0] text-2xl mb-4">
        Checkout some of my projects!
      </h2>
      {/* Projects Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:mx-12">
        {projectImg.map(({ id, name, imgUrl }) => {
          return (
            <div key={id} className="shadow-lg shadow-black p-3 rounded-xl">
              <img
                className="object-cover object-center rounded-2xl border border-[#64FFDA] hover:scale-110 duration-200 rounded-xl"
                src={imgUrl}
                alt={name}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
