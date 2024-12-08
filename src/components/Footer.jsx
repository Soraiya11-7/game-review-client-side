import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className=" mx-auto text-center w-[80%] pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">Chill Gamer</h2>
            <p className="text-gray-400 mx-auto border text-sm sm:text-base border-red-50 w-full sm:w-[60%] md:w-[95%] md:mx-0">
              Chill Gamer is a user-friendly game review platform where gamers can explore and share reviews, discover new games, and interact with fellow gaming enthusiasts. 
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center ">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white transition duration-300">Reviews</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300">About</li>
              <li className="text-gray-400 hover:text-white transition duration-300">Contact</li>
            </ul>
          </div>

          {/* Social Icons ..............................*/}
        <div className="flex justify-center gap-0.5 sm:gap-3">
          <button
            onClick={() => window.open('https://www.facebook.com/', '_blank')}
            className="btn btn-circle  hover:bg-purple-500 transition-all border "
          >
            <FaFacebook className="text-xl" />
          </button>
          <button
            onClick={() => window.open('https://github.com/', '_blank')}
            className="btn btn-circle  hover:bg-purple-500 transition-all border "
          >
            <FaGithub className="text-xl" />
          </button>
          <button
            onClick={() => window.open('https://www.linkedin.com/', '_blank')}
            className="btn btn-circle  hover:bg-purple-500 transition-all border "
          >
            <FaLinkedin className="text-xl" />
          </button>
        </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
          Copyright &copy; {new Date().getFullYear()} Chill Gamer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
