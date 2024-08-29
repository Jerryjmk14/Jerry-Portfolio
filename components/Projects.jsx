import React from "react";
import Image from "next/image";

export default function Projects() {
  const projectImg = [
    {
      id: 1,
      name: "CROWN STORE E-COMMERCE SITE",
      imgUrl: "/projects-images/Crown-store.jpg",
    },
    {
      id: 2,
      name: "REALTIME VOTING APP",
      imgUrl: "/projects-images/realtime-voting-app.jpg",
    },
    { id: 3, name: "DOGGOS", imgUrl: "/projects-images/doggos.jpg" },
    { id: 4, name: "QUIZ APP", imgUrl: "/projects-images/quiz-app.jpg" },
    {
      id: 5,
      name: "SHOPPING LIST APP",
      imgUrl: "/projects-images/shopping-list.jpg",
    },
    { id: 6, name: "NEWS SITE", imgUrl: "/projects-images/news-site.jpg" },
  ];

  return (
    <section id="projects" className="w-full sm:text-center mt-9 p-4 sm:p-14">
      <div className="sm:inline-block sm:w-auto mx-auto border-b-4 border-[#64FFDA] mb-3">
        {/* Project Title */}
        <h1 className="text-white sm:text-center mt-6 text-4xl font-semibold p-1">
          Projects
        </h1>
      </div>
      <h2 className="text-[#8892B0] text-2xl mb-6">
        Checkout some of my projects!
      </h2>
      {/* Projects Image Cards */}
      <div className="w-full grid p-4 grid-cols-1 md:grid-cols-2 gap-14">
        {/* Mapping through the projectImg array to display project image cards */}
        {projectImg.map(({ id, name, imgUrl }) => {
          return (
            <div
              key={id}
              className="text-center text-wrap rounded-xl hover:scale-110 duration-200">
              <Image
                className="object-cover w-full mb-3 object-center border border-[#64FFDA] rounded-2xl"
                src={imgUrl}
                alt={name}
                width={500}
                height={500}
              />
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
