// Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-lg font-bold text-white">Logo</div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link href="/about">
                <div className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">About Us</div>
              </Link>
              <Link href="/menu">
                <div className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Menu</div>
              </Link>
              <Link href="/events">
                <div className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Events</div>
              </Link>
              <div className="relative inline-block text-left">
                <button type="button" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none">
                  More
                </button>
                <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link href="/gallery">
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Gallery</div>
                    </Link>
                    <Link href="/contact">
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Contact</div>
                    </Link>
                    {/* Add more dropdown links as needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none">
              <span className="sr-only">Open menu</span>
              <span className="block h-0.5 w-6 bg-gray-300"></span>
              <span className="block h-0.5 w-6 bg-gray-300 mt-1"></span>
              <span className="block h-0.5 w-6 bg-gray-300 mt-1"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;