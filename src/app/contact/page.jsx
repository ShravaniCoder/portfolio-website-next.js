"use client"
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Email = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        () => {
          setError(true)
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {" "}
      <div className="h-full overflow-scroll">
        <section className="grid md:grid-cols-2 py-12 gap-4 my-12 md:my-12 px-4 sm:px-8 md:12 lg:px:20 xl:px:48">
          <div>
            <h5 className="text-4xl font-bold text-black my-2">Contact Me🥰</h5>
            <p className="text-black font-semibold mb-4 max-w-md">
              Feel free to reach out to me via email at
              [shravanichendwankar@gmail.com] for inquiries about frontend
              development projects, collaboration opportunities, or just to say
              hello. I aim to respond to all messages within 24 hours and look
              forward to discussing how we can work together to bring your ideas
              to life.
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href={"https://github.com/ShravaniCoder?tab=repositories"}>
                {" "}
                <FaGithub className="text-black text-2xl" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/shravani-chendwankar-493701245/"
                }
              >
                <FaLinkedin className="text-[#0A66C2] text-2xl" />
              </Link>
              <Link href={"https://twitter.com/CodeCraftSherry"}>
                <FaTwitter className="text-blue-500 text-2xl" />
              </Link>
            </div>
          </div>
          <div>
            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-black block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="user_email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-black block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="user_message"
                  rows={6}
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
              {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
              {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Email;