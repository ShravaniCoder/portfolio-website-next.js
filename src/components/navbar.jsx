"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  
} from "react-icons/fa";
import Image from 'next/image';
import Insta from '@/public/images/insta.png'
import NavLink from './navLinks';


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/project", title: "Project" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const[open, setOpen] = useState(false)
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:12 lg:px:20 xl:px:48 text-xl">
      <div className="md:hidden lg:flex">
        <Link
          href="/"
          className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3"
        >
          <span className="text-white">Portfolio</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="hidden md:flex gap-4">
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
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;