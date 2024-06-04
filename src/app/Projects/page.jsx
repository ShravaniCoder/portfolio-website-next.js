"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Two good co. Website",
    description: "Animation website Using Html5, CSS, Javascript",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dancing-donut-a5917e.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description: "Responsive Website Using Html5, CSS, Javascript",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mellow-treacle-7ad4ea.netlify.app/",
  },
  {
    id: 3,
    title: "Pokemon Game",
    description: "By Using Html5, CSS, Javascript",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://candid-bavarois-3a0cbc.netlify.app/",
  },
  {
    id: 4,
    title: "Carousal & Drop-drown",
    description: "Using React.js, Tailwind-css",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://delightful-maamoul-b001d9.netlify.app/",
  },
  {
    id: 5,
    title: "Todo List App",
    description: "Using Next.js, Tailwind-css",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Password Generator",
    description: "Using React.js, Tailwind-css",
    image: "/images/projects/6.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Flight Booking Website",
    description: "Using Next.js, Tailwind-css",
    image: "/images/projects/7.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl:
      "https://flight-booking-website-jade.vercel.app/?category=all-international-airports",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <section
      id="projects"
      className="h-full overflow-scroll px-4 sm:px-8 md:12 lg:px:20 xl:px:48"
    >
      <h2 className="text-center text-4xl font-bold text-black mt-2 mb-2 md:mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      </section>
    </motion.div>
    
  );
};

export default Project;
