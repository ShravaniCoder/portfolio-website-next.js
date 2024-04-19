"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Hero from "../../public/images/hero-image.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Insta from "@/public/images/insta.png";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row lg:gap-x-20 justify-center items-center px-4 sm:px-8 md:12 lg:px:20 xl:px:48 h-full overflow-scroll">
        <div className="h-1/2 lg:w-[50%] lg:mt-20 lg:h-full">
          <div className="place-self-center text-center lg:text-left">
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
                  "UI/UX Designer",
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
            <p className="text-indigo-600 font-semibold text-center text-base sm:text-xl md:text-xl lg:text-2xl mb-2">
              Transforming ideas into captivating digital journeys with code and
              creativity. Elevating user experiences through innovative web
              solutions.
            </p>
            <p className="text-indigo-600 font-semibold text-center text-base sm:text-xl md:text-xl lg:text-2xl mb-4">
              Welcome to my website! As a dedicated web developer, I am
              committed to crafting innovative projects that enhance user
              interface and experience.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="px-1 py-1 rounded-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3">
                <Link href="/contact">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Contact Me
                  </span>
                </Link>
              </button>
              <button className="px-1 py-1 rounded-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3">
                <Link href="/project">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    My Projects
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="h-1/2 justify-center mt-5 lg:mt-20 lg:ml-20 lg:h-full lg:justify-center items-center lg:w-[50%]">
          <div className="place-self-center mt-4 lg:mt-0">
            <div className="img rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src={Hero}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex md:flex gap-4 justify-center items-center">
          <Link href={"https://github.com/ShravaniCoder?tab=repositories"}>
            {" "}
            <FaGithub className="text-black text-2xl" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/shravani-chendwankar-493701245/"}
          >
            <FaLinkedin className="text-[#0A66C2] text-2xl" />
          </Link>
          <Link href={"https://twitter.com/CodeCraftSherry"}>
            <FaTwitter className="text-blue-500 text-2xl" />
          </Link>
          <Link href={"https://www.instagram.com/shravani_chendwankar/"}>
            <Image
              src={Insta}
              alt="socials"
              width={24}
              height={24}
              className="rounded-md"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
