"use client";

import React from "react";
import { FaLinkedin, FaGithub,  FaUser, FaBlog,  FaLaptopCode, FaEnvelopeOpenText, FaFileAlt} from "react-icons/fa";
import Profile from "../../public/images/profile.jpg";
import Image from "next/image";
import NavLink from "./navLinks";

const links = [
  { url: "/", title: "About Me", icon: <FaUser /> },
  { url: "/projects", title: "Projects", icon: <FaLaptopCode /> },
  { url: "/resume", title: "Resume", icon: <FaFileAlt /> },
  { url: "/blogs", title: "Blogs", icon: <FaBlog /> },
  { url: "/contact", title: "Contact", icon: <FaEnvelopeOpenText /> },
];

const Sidebar = () => {
  return (
    <div
      className="hidden md:flex text-white w-[280px] min-h-screen flex-col items-center "
      style={{ backgroundColor: "var(--main-color)" }}
    >
      {/* Profile Photo */}
      <div className="border-b-[0.5px] border-[var(--main-dark-color)] flex flex-col items-center px-5 py-6">
        <h1 className="text-lg font-semibold mb-6">Shravani Chendwankar</h1>
        <Image
          src={Profile}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover"
        />

        <p className="text-sm font-light text-center my-6">
          Hi, my name is Shravani Chendwankar and I'm a web developer. Welcome
          to my personal website!
        </p>

        <div className="flex gap-3 text-xl">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="border-b-[0.5px] border-[var(--main-dark-color)] w-full hidden md:flex flex-col items-center gap-6 mt-6 pb-6">
       
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        
      </div>
    </div>
  );
};

export default Sidebar;
