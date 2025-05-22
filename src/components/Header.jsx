// components/Header.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../index.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/afriq_ai_logo.jpeg" alt="Logo Afriq'AI" className="h-10 w-auto" />
        </div>
        
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none md:items-center space-y-4 md:space-y-0 md:space-x-6`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-purple-700 font-medium" 
                : "relative text-gray-600 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300"
            }
            end
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/carte" 
            className={({ isActive }) => 
              isActive 
                ? "text-purple-700 font-medium" 
                : "relative text-gray-600 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300"
            }
          >
            Carte
          </NavLink>
          <NavLink 
            to="/classement" 
            className={({ isActive }) => 
              isActive 
                ? "text-purple-700 font-medium" 
                : "relative text-gray-600 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300"
            }
          >
            Classement
          </NavLink>
          <NavLink 
            to="/comparer" 
            className={({ isActive }) => 
              isActive 
                ? "text-purple-700 font-medium" 
                : "relative text-gray-600 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300"
            }
          >
            Comparer
          </NavLink>
          <a href="#" className="relative text-gray-600 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300">
            À propos
          </a>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "text-purple-700 font-medium" 
                : "relative text-gray-600 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300"
            }
          >
            Contact
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="relative inline-block text-left">
            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
              <span>FR</span>
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <img
              src="/images/africa_map.svg"
              alt="Mon logo"
              className="w-10 h-10 animate-pulse transition duration-1000 hover:brightness-125 hover:grayscale-0"
          />
          
          <button 
            className="md:hidden ml-4 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;