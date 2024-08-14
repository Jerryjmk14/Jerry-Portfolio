import React from "react";

export default function About() {
  return (
    <section className=" p-6 sm:flex sm:flex-col sm:items-center sm:mx-32">
      <div className="flex content-center border-b-4 border-[#64FFDA] mb-3 ">
        <h1
          id="about"
          className="text-white sm:text-center text-4xl font-semibold p-1">
          About
        </h1>
      </div>
      <div className="grid w-full sm:grid-cols-2 sm:gap-8 text-white">
        <div>
          <h2 className="mb-6 text-2xl sm:text-right">
            Hi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          </h2>
        </div>
        <div>
          <p className="text-left text-[#8892B0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            veniam, molestias harum ducimus velit nihil eligendi reiciendis
            tenetur quos corporis necessitatibus. Modi esse ipsam quod tempore
            minus eveniet quasi vitae, quo voluptatum natus et labore incidunt
            exercitationem necessitatibus, architecto commodi.
          </p>
        </div>
      </div>
    </section>
  );
}
