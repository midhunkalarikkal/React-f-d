import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4 underline decoration-orange-400 underline-offset-4 text-orange-400 cursor-pointer">Crave<span className='text-white'>Route</span></h2>
            <p className="text-gray-100">
              Discover delicious meals from your favorite restaurants, delivered fast and fresh to your door.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-md md:text-xl font-bold mb-2 md:mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:text-orange-400 text-sm md:text-md">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-orange-400 text-sm md:text-md">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:text-orange-400 text-sm md:text-md">FAQ</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-orange-400 text-sm md:text-md">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2 md:mb-4">Stay Updated</h3>
            <p className="text-gray-100 mb-2 md:mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-1 md:py-2 mb-4 rounded-md text-black"
              />
              <button
                type="submit"
                className="w-full bg-orange-400 text-gray-100 p-1 md:py-2 rounded-md hover:bg-orange-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <div>
            © {new Date().getFullYear()} CraveRoute. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
