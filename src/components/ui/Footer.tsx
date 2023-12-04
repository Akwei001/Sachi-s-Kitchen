// Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex justify-center md:order-2">
            <Link href="/">
              <div className="text-white font-bold text-lg mx-4 hover:text-gray-300">Home</div>
            </Link>
            <Link href="/menu">
              <div className="text-white font-bold text-lg mx-4 hover:text-gray-300">Menu</div>
            </Link>
            <Link href="/events">
              <div className="text-white font-bold text-lg mx-4 hover:text-gray-300">Events</div>
            </Link>
            <Link href="/about">
              <div  className="text-white font-bold text-lg mx-4 hover:text-gray-300">About Us</div>
            </Link>
            <Link href="/contact">
              <div className="text-white font-bold text-lg mx-4 hover:text-gray-300">Contact</div>
            </Link>
          </div>
          <p className="text-center text-gray-300 text-sm md:order-1">
            &copy; {new Date().getFullYear()} Your Izakaya | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;