import React from "react";
import { FaFacebookF, FaTwitter, FaUtensils, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import Playpulsenameplate from "../../Atoms/Playpulsenameplate";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-base-100 via-base-300 to-base-100 text-gray-400 pt-16 pb-12 px-4 sm:px-10 w-full flex  flex-col items-center justify-center ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left  justify-around">
        {/* Brand Section */}
        <div>
          <Link
            to="/"
            className="text-3xl font-bold text-green-400 flex justify-center items-center"
          >
            <Playpulsenameplate></Playpulsenameplate>
          </Link>

          <p className="mt-4 text-sm leading-relaxed text-neutral max-w-sm mx-auto md:mx-0">
            PlayPulse is a platform dedicated to connecting athletes and sports
            enthusiasts. Discover, organize, and participate in exciting events,
            and keep your passion for sports alive!
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-neutral text-xl font-semibold mb-5">
            Explore
          </h3>
          <ul className="space-y-3 text-sm font-medium text-neutral">
            <li>
              <Link
                to={"/copyRightInformation"}
                className="hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
              >
                Copyright notice
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
              >
                Contact information
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-accent-900 text-xl font-semibold mb-5">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start gap-6 text-accent-900 text-xl">
            <a
              href="https://www.x.com/"
              aria-label="Twitter"
              className="hover:text-blue-400 hover:scale-110 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              className="hover:text-red-500 hover:scale-110 transition-all duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 w-full">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-neutral font-semibold tracking-wide">
            PlayPulse
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
