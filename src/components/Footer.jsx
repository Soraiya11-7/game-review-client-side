import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">Chill Gamer</h2>
            <p className="text-gray-400">
              Chill Gamer is a user-friendly game review platform where gamers can explore and share reviews, discover new games, and interact with fellow gaming enthusiasts. Enjoy a seamless experience in a clean, responsive design.
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/reviews" className="text-gray-400 hover:text-white transition duration-300">Reviews</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition duration-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Chill Gamer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
