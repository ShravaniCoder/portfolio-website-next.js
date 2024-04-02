import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
      <section className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center px-8 py-4 xl:gap-16 sm:py-16 xl:px-16'>
          <Image src="/images/about-img.png" alt='about-img' width={450} height={350} />
          <div>
              <h2 className='text-white text-4xl font-bold mb-4'>About Me</h2>
              <p className='text-base lg:text-lg'>I am a frondend developer with a passion for creating interactive and responsive web applications. I have experience working with Html5, Tailwind.css, Javascript, React.js, Next.js, Git and Github. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
          </div>
      </div>
      </section>
  )
}

export default About;