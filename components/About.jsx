import React from "react";

export default function About() {
  return (
    // About section
    <section
      id="about"
      className="p-6 mt-9 sm:flex sm:flex-col sm:items-center mb-16 sm:mx-32">
      <div className="flex content-center border-b-4 border-[#64FFDA] mb-4 ">
        {/* About Title */}
        <h1 className="text-white sm:text-center mt-8 text-4xl font-semibold p-1">
          About
        </h1>
      </div>
      {/* About Text */}
      <div className="grid w-full sm:grid-cols-2 sm:gap-8 text-white">
        <div>
          <h2 className="mb-6 text-2xl sm:text-right">
            I am currently advancing my skillset througth BYU Pathway Worlwide.
          </h2>
        </div>
        <div>
          <p className="text-left text-[#8892B0]">
            I have deployed my skills in html, css and javascript to build a
            wonderful portfolio website. Futhermore, I have been able to improve
            my skills in critical thinking, providing innovative solutions to
            problems and applying the latest technologies as appropriate. I look
            forward to working on more exciting, innovative, challenging and
            solution based projects!
          </p>
        </div>
      </div>
    </section>
  );
}
