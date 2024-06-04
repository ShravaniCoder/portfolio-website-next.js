"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Hero from "../../public/images/hero-image.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Insta from "@/public/images/insta.png";
import { IoMdDownload } from "react-icons/io"


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col  px-4 sm:px-8 md:12 lg:px:20 xl:px:48 h-full overflow-scroll">
        <div className="flex justify-center items-center lg:items-center">
          <div className="img rounded-full bg-[#181818] w-[110px] h-[110px] md:w-[110px] md:h-[110px] lg:w-[110px] lg:h-[110px] relative">
            <Image
              src={Hero}
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Hello, I am{""}
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Shravani Chendwankar",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "UI/UX Developer",
                1000,
                "Frontend Developer",
                1000,
                "Next.js Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-black"
            />
          </h1>
          <span className="text-black font-semibold text-center text-base sm:text-xl md:text-xl lg:text-2xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Welcome to my website!
            </span>{" "}
            As a dedicated web developer, I am committed to crafting innovative
            projects that enhance user interface and experience.
          </span>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-center">
            <button className="px-1 py-1 rounded-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3">
              <Link
                href="https://drive.google.com/file/d/1LUIqkxB1hIHL9NHlFeTYBnqKWoCdPcfp/view?usp=sharing"
                download 
              >
                <span className="flex items-center gap-x-2 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  My Resume
                  <IoMdDownload className="text-white" />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
