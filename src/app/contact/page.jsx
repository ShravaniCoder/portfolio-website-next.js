"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Email = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <section className="grid md:grid-cols-2 py-24 gap-4 my-12 md:my-12">
      <div>
        <h5 className="text-4xl font-bold text-white my-2">Contact Me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to reach out to me via email at
          [shravanichendwankar@gmail.com] for inquiries about frontend
          development projects, collaboration opportunities, or just to say
          hello. I aim to respond to all messages within 24 hours and look
          forward to discussing how we can work together to bring your ideas to
          life.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/ShravaniCoder?tab=repositories"}>
            {" "}
            <FaGithub className="text-white text-2xl" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/shravani-chendwankar-493701245/"}
          >
            <FaLinkedin className="text-white text-2xl" />
          </Link>
          <Link href={"https://twitter.com/CodeCraftSherry"}>
            <FaTwitter className="text-white text-2xl" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="frm-email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="frm-email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      </section>
      </motion.div>
  );
};

export default Email;