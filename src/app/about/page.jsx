"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        <div className="p-4 sm:p-8 md:12 lg:p:20 xl:p:48 flex flex-col gap-12 md:gap-24 lg:gap-32 xl:gap-48">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-2xl">ABOUT ME</h1>
            <p className="text-lg lg:text-lg sm:text-xs mt-2">
              I am a frondend developer with a passion for creating interactive
              and responsive web apps. I have experience working with Html5,
              Tailwind.css, Javascript, React.js, Next.js, Git and Github. I am
              a quick learner and I am always looking to expand my knowledge and
              skill set. I am a team player, who aims to work with small
              businesses and marginalized communities to bring their passions to
              life. I am excited to work with others to create amazing apps.
            </p>
          </div>
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-center pb-5">
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            <div>
              <div className="p-1 rounded-b-lg rounded-s-lg bg-blue-700 text-white w-[40%] md:w-[20%] lg:w-[9%] text-base font-bold">
                Experts Coder
              </div>
              <div className="bg-white p-1 font-semibold text-xl rounded-b-lg rounded-s-lg mt-4 lg:w-[22%] md:w-[50%]">
                Frontend Web Developer Intern
              </div>
              <div className="p-3 text-base">
                Embracing every challenge, learning with every step, and growing
                through every project.
              </div>
              <div className="p-3 text-red-400 font-semibold">
                March 2024 - Present
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </motion.div>
  );
};

export default About;
