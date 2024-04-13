import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:12 lg:px:20 xl:px:48">
      <div>
        <Link
          href="/"
          className="text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-md p-2"
        >
          <span className="text-white">Portfoilio</span>
        </Link>
      </div>
      <div>
        <button className='w-10 h-8 flex flex-col justify-between'>
          <div className='w-10 h-1 bg-black rounded'></div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;