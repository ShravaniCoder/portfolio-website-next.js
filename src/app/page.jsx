"use client"
import Image from "next/image";
import Hero from "@/public/images/hero-image.png";
import { TypeAnimation } from "react-type-animation";


const Homepage = () => {
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-1/2">
        <div className="place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
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
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Transforming ideas into captivating digital journeys with code and
            creativity. Elevating user experiences through innovative web
            solutions.
          </p>
          </div>
      </div>
      <div className="h-1/2 justify-center items-center">
        <div className="place-self-center mt-4 lg:mt-0">
          <div className="img rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      </div>
        
  );
};

export default Homepage;
