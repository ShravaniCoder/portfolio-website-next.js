"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

async function handleSubmit(event) {
  event.preventDefault();
  const data = {
    email: String(event.target.email.value),
    subject: String(event.target.subject.value),
    message: String(event.target.message.value),
  }
  console.log(data)
}

  

const Contact = () => {
  return (
    <section className="grid md:grid-cols-2 py-24 gap-4 my-12 md:my-12">
      <div >
        <h5
          
          className="text-4xl font-bold text-white my-2"
        >
          Contact Me
        </h5>
        <p  className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to reach out to me via email at
          [shravanichendwankar@gmail.com] for inquiries about frontend
          development projects, collaboration opportunities, or just to say
          hello. I aim to respond to all messages within 24 hours and look
          forward to discussing how we can work together to bring your ideas to
          life.
        </p>
        <div  className="socials flex flex-row gap-2">
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
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-lg font-medium mb-2"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-lg font-medium mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Share Your Interests or Needs"
              className="bg-[#18191E] mb-1 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-lg mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] mb-1 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="Let's talk about...."
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg mt-3 w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
