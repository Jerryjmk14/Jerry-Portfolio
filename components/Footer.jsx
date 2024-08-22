import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black p-6 flex flex-col items-center sm:flex-col">
      <h2 className="text-xl sm:text-3xl font-bold text-[#CCD6F6] mb-5">
        Jeremiah: Frontend Developer
      </h2>

      {/* Social Media Icons */}
      <div className="mb-8">
        <ul className="flex gap-8">
          <li>
            <a
              href="https://www.linkedin.com/in/jeremiah-egwa-73b231255"
              className="text-[#64FFDA] text-2xl font-semibold">
              <FaLinkedinIn className="hover:scale-125 duration-200" />
              <span class="sr-only">Linkdin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Jerryjmk14"
              className="text-[#64FFDA] text-2xl font-semibold">
              <FaGithub className="hover:scale-125 duration-200" />
              <span class="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/jerryjmk"
              className="text-[#64FFDA] text-2xl font-semibold">
              <FaXTwitter className="hover:scale-125 duration-200" />
              <span class="sr-only">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/jerryjmk"
              className="text-[#64FFDA] text-2xl font-semibold ">
              <FaWhatsapp className="hover:scale-125 duration-200" />
              <span class="sr-only">Twitter</span>
            </a>
          </li>
        </ul>
      </div>
      <p className="font-semibold text-lg">&copy; 2024. All rights reserved</p>
    </footer>
  );
}
