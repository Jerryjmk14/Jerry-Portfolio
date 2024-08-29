import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0D314B] p-6">
      <div className="w-[80%] mx-auto text-center shadow-lg shadow-black px-1 py-8 rounded-xl">
        <h2 className="text-white text-4xl font-semibold p-1 mb-4">
          Lets Connect
        </h2>

        {/* contact form card */}
        <div className="w-[90%] text-[#8892B0] mx-auto text-lg sm:text-lg text-left font-mono">
          <form action="submit" className="flex flex-wrap sm:gap-2">
            <div className="flex-auto min-w-[5%] mt-4">
              <label htmlFor="name" className="">
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter name"
                required
                className="p-3 w-[100%] border rounded-3xl bg-[#0D314B] border-[#64FFDA] shadow-md shadow-black"
              />
            </div>
            <div className="flex-auto min-w-[5%] mt-4">
              <label htmlFor="email" className="">
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="Enter email"
                required
                className="p-3 w-[100%] border rounded-3xl bg-[#0D314B] border-[#64FFDA] focus:border-[#64FFDA] shadow-md shadow-black"
              />
            </div>

            <div className=" flex-auto min-w-[98%] mt-5">
              <label htmlFor="message" className="">
                Message
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                className="p-3 min-h-24 max-h-40 w-[100%] border rounded-3xl bg-[#0D314B] border-[#64FFDA] shadow-md shadow-black"></textarea>
            </div>
            <button className="py-2 px-16 w-full text-black border rounded-3xl bg-green-600 hover:bg-green-400 border-[#64FFDA] shadow-md shadow-black">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
