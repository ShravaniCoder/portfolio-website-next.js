"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutImg from "../../../public/images/about-img.png"

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        <div className="p-4 sm:p-8 md:12 lg:p:20 xl:p:48 flex flex-col gap-12 md:gap-24 lg:gap-32 xl:gap-48 lg:w-2/3 xl:w-1/2 lg:pr:0">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-2xl">ABOUT ME</h1>
            <p className="text-lg lg:text-lg sm:text-xs mt-2">
              I am a frontend developer with a passion for creating interactive
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
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Material UI
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
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
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
              <div className="p-2 rounded-b-lg rounded-s-lg bg-[#03516D] text-white w-[40%] md:w-[20%] lg:w-[20%] text-base font-bold">
                Experts Coder
              </div>
              <div className="flex gap-2 items-center justify-between">
                <div className="bg-white p-2 font-semibold text-lg rounded-b-lg rounded-s-lg mt-4 lg:w-[50%] md:w-[50%]">
                  Frontend Web Developer Intern
                </div>

                <div className="p-3 text-red-400 font-semibold">
                  1st March 2024 - 5th June 2024
                </div>
              </div>
            </div>
            <div>
              <div className="p-2 rounded-b-lg rounded-s-lg bg-[#40E0D0] text-white w-[40%] md:w-[20%] lg:w-[20%] text-base font-bold">
                MixDorm
              </div>
              <div className="flex gap-2 items-center justify-between">
                <div className="bg-white p-2 font-semibold text-lg rounded-b-lg rounded-s-lg mt-4 lg:w-[50%] md:w-[50%]">
                  Freelance Web Designer
                </div>

                <div className="p-3 text-red-400 font-semibold">
                  1st August 2024 - 31st August 2024
                </div>
              </div>
            </div>
            <div>
              <div className="p-2 rounded-b-lg rounded-s-lg bg-[#485C89] text-white w-[40%] md:w-[40%] lg:w-[40%] text-base font-bold">
                Virtus Interior Products
              </div>
              <div className="flex gap-2 items-center justify-between">
                <div className="bg-white p-2 font-semibold text-lg rounded-b-lg rounded-s-lg mt-4 lg:w-[50%] md:w-[50%]">
                  Full Stack Web Developer
                </div>

                <div className="p-3 text-red-400 font-semibold">
                  15th June 2024 - 31st September 2024
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 xl:1/2 sticky top-0 z-30">
          <Image src={AboutImg} alt="about-img" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
