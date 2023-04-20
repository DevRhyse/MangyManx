import React from 'react';
import logo from '../assets/MMLogo.jpg'


export default function Nav(props) {

    const handleClick = (componentNumber) => {
        props.handleClick(componentNumber);
      };
    
      return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img
              className="h-8 w-8 mr-2"
              src={logo}
              alt="Logo"
              onClick={() => handleClick('home')}
            />
            <span className="font-semibold text-xl tracking-tight">Mangy Manx</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#home"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                onClick={() => handleClick('home')}
              >
                Home
              </a>
              <a
                href="#shop"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                onClick={() => handleClick('shop')}
              >
                Shop
              </a>
              <a
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                onClick={() => handleClick('contact')}
              >
                Contact
              </a>
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                onClick={() => handleClick('about')}
              >
                About
              </a>
            </div>
          </div>
        </nav>
      );
}
