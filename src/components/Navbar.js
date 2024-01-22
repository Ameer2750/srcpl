import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link , useLocation} from 'react-router-dom';

const Navbar = () => {
  const [isHomeDropdownOpen,setHomeDropdownopen]= useState(false);
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen,setAboutDropdownOpen] = useState (false);
  const [isPortfolioDropdownOpen,setPortfolioDropdownopen]= useState(false);
  const [isPrinciplesDropdownOpen,setPrinciplesDropdownopen]= useState(false);
  const [isContactDropdownOpen,setContactDropdownopen]= useState(false);
  // const location = useLocation(false);


  const homeToggleDropdown = () => {
    setHomeDropdownopen(!isHomeDropdownOpen);
  }

  const aboutToggleDropdown = () => {
    setAboutDropdownOpen(!isAboutDropdownOpen);
  }

  const solutionsToggleDropdown = () => {
    setSolutionsDropdownOpen(!isSolutionsDropdownOpen);
  };

  const portfolioToggleDropdown = () => {
    setPortfolioDropdownopen(!isPortfolioDropdownOpen);
  }

  const principlesToggleDropdown = () => {
    setPrinciplesDropdownopen(!isPrinciplesDropdownOpen);
  }

  const contactToggleDropdown = () => {
    setContactDropdownopen(!isContactDropdownOpen);
  }


 

  const closeDropdown = () => {
    setHomeDropdownopen(false);
    setSolutionsDropdownOpen(false);
    setAboutDropdownOpen(false);
    setPortfolioDropdownopen(false);
    setPrinciplesDropdownopen(false);
    setContactDropdownopen(false);
  };
  // const isHomepage = location.pathname === '/';

  return (
    <div className='flex flex-row justify-between shadow my-0.5 items-center py-1 bg-[#ffffff]'>
      <div className='w-64'>
        <img src={logo} className='bg-blue-950 h-20   py-3 mx-4' />
      </div>

      <div className='my-5'>
        <ul className='flex flex-row gap-10 justify-between items-center'>
        <li
            className='relative group'
            onMouseEnter={homeToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/'
              className='text-lg text-black hover:text-orange-500 font-semibold'
            >
              Home
            </Link>
          
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5 py-5 bg-gray-100 border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${
                isHomeDropdownOpen  ? 'block' : 'hidden'

              }`}
            >
              <li>
                <Link
                  to='/home/whats-new'
                  className='block  text-md text-black   hover:text-orange-500'
                >
                  What's New
                </Link>
              </li>
              <li>
                <Link
                  to='/home/subpage2'
                  className='block text-md text-black    hover:text-orange-500'
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to='/home/subpage1'
                  className='block  text-md text-black   hover:text-orange-500'
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  to='/home/subpage1'
                  className='block text-md text-black hover:text-orange-500  '
                >
                  Our Goals
                </Link>
              </li>
              <li>
                <Link
                  to='/home/subpage1'
                  className='block text-md text-black hover:text-orange-500  '
                >
                  Our Presence in the market
                </Link>
              </li>
              {/* Add more submenu links as needed */}
            </ul>
          </li>
          
          <li
            className='relative group'
            onMouseEnter={aboutToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/about-us'
              className='text-lg text-black hover:text-orange-500 font-semibold'
            >
              About Us
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5 py-5 bg-gray-100 border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${
                isAboutDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link
                  to='/about-us/subpage1'
                  className='block  text-md text-black hover:text-orange-500 '
                >
                  About SRCPL
                </Link>
              </li>
              <li>
                <Link
                  to='/about-us/subpage2'
                  className='block text-md text-black  hover:text-orange-500   '
                >
                 Team Overview
                </Link>
                </li>
                <li>
                <Link
                  to='/about-us/subpage2'
                  className='block text-md text-black  hover:text-orange-500   '
                >
                  S.R Group Overview
                </Link>
                </li>
                <li>
                <Link
                  to='/about-us/subpage2'
                  className='block text-md text-black  hover:text-orange-500   '
                >
                  Awards & Recognitions
                </Link>
              </li>
              {/* Add more submenu links as needed */}
            </ul>
          </li>

          {/* Solutions Dropdown */}
          <li
            className='relative group'
            onMouseEnter={solutionsToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/solutions'
              className='text-lg text-black hover:text-orange-500 font-semibold'
            >
              Solutions
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5 py-5 bg-gray-100 border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50 ${
                isSolutionsDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link
                  to='/solutions/subpage1'
                   className='block  text-md text-black    hover:text-orange-500'
                >
                  Overall Solutions
                </Link>
              </li>
              {/* <li>
                <Link
                  to='/solutions/subpage2'
                   className='block  text-md text-black    hover:text-orange-500'
                >
                  Subpage 2
                </Link>
              </li> */}
              {/* Add more submenu links as needed */}
            </ul>
          </li>


          {/* ... Other menu items ... */}
          <li
            className='relative group'
            onMouseEnter={portfolioToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/our-portfolio'
              className='text-lg text-black hover:text-orange-500 font-semibold'
            >
              Our Portfolio
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5  py-5 bg-gray-100 border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50   ${
                isPortfolioDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link
                  to='/our-portfolio/subpage1'
                   className='block  text-md text-black    hover:text-orange-500'
                >
                  Mitsubishi Electric 
                </Link>
              </li>
              <li>
                <Link
                  to='/our-portfolio/subpage2'
                   className='block  text-md text-black    hover:text-orange-500'
                >
                  Phoenix Contact

                </Link>
              </li>
              <li>
                <Link
                  to='/our-portfolio/subpage2'
                   className='block  text-md text-black    hover:text-orange-500'
                >
                    Control Panels
                </Link>
              </li>
              <li>
                <Link
                  to='/our-portfolio/subpage2'
                   className='block  text-md text-black    hover:text-orange-500'
                >
                  Turnkey Solutions

                </Link>
              </li>
              <li>
                <Link
                  to='/our-portfolio/subpage2'
                   className='block  text-md text-black    hover:text-orange-500'
                >
                  Services

                </Link>
              </li>
              {/* Add more submenu links as needed */}
            </ul>
          </li>
          <li
            className='relative group'
            onMouseEnter={principlesToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/'
              className='text-lg text-black hover:text-orange-500 font-semibold'
            >
              Principles
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64  py-5 bg-gray-100 border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${
                isPrinciplesDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link
                  to='/solutions/subpage1'
                  className='block px-5 py-2 text-md text-black    hover:text-orange-500'
                >
                    Mitsubishi Electric India
                </Link>
              </li>
              <li>
                <Link
                  to='/solutions/subpage2'
                  className='block px-5 py-2 text-md text-black    hover:text-orange-500'
                >
                  Phoenix Contact Beijer Sick
                </Link>
              </li>
              {/* Add more submenu links as needed */}
            </ul>
          </li>
          <li
            className='relative group'
            onMouseEnter={contactToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/contact-us'
              className='text-lg text-black hover:text-orange-500 font-semibold'
            >
              Contact Us
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5 py-5  bg-gray-100 border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50   ${
                isContactDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link
                  to='/contact-us/subpage1'
                   className='block  text-md text-black    hover:text-orange-500'
                >
                  SRCPL Contact 
                </Link>
              </li>
              {/* <li>
                <Link
                  to='/contact-us/subpage2'
                   className='block text-md text-black    hover:text-orange-500'
                >
                  Subpage 2
                </Link>
              </li> */}
              {/* Add more submenu links as needed */}
            </ul>
          </li>
        </ul>
      </div>

      <button className='bg-orange-500 hover:bg-blue-950 px-4 mx-4 py-2 my-4 rounded-md text-lg text-white hover:text-orange-500 font-semibold'>
        Inquiry Now
      </button>
    </div>
  );
};

export default Navbar;
