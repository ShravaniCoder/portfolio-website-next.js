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
import { motion, stagger } from 'framer-motion';


const links = [
  { url: "/", title: "Home" },
  { url: "/About", title: "About" },
  { url: "/Projects", title: "Projects" },
  { url: "/Contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const ListItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:12 lg:px:20 xl:px:48 text-xl">
      <div className="flex">
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
      <div className="hidden lg:flex gap-4">
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
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white hover:text-purple-400 flex flex-col items-center justify-center gap-10 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={ListItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;