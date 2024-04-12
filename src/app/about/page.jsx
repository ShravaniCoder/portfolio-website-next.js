import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-white">
      <h2 className="text-white text-4xl text-center font-bold mt-6">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-4 px-2 py-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-img.png"
          alt="about-img"
          width={350}
          height={350}
          className="rounded-xl"
        />
        <div className="text-start">
          <p className="text-base lg:text-lg sm:text-xs mt-2">
            I am a frondend developer with a passion for creating interactive
            and responsive web apps. I have experience working with Html5,
            Tailwind.css, Javascript, React.js, Next.js, Git and Github. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player, who aims to work with small
            businesses and marginalized communities to bring their passions to
            life. I am excited to work with others to create amazing apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
