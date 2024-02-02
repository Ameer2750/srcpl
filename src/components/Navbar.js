import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";


const Navbar = (props) => {
  const [isHomeDropdownOpen, setHomeDropdownopen] = useState(false);
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isPortfolioDropdownOpen, setPortfolioDropdownopen] = useState(false);
  const [isPrinciplesDropdownOpen, setPrinciplesDropdownopen] = useState(false);
  const [isContactDropdownOpen, setContactDropdownopen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };


  const [active, setActive] = useState(false);
  window.addEventListener('scroll', function () {

    if (this.window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  })

  const navigate = useNavigate()

  const handleClick = (data) => {
    props.handlePortfolioData(data)
    navigate('/portfolio-page')
  }

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
    <div className={`flex flex-row justify-between px-5 my-0.5 items-center py-4 bg-[#081528] z-50 w-full ${active ? 'fixed -top-1' : ''}`}>


      <Link to='/'>
        <div className='w-64'>
          <img src={logo} className='h-20   py-4 mx-4' />
        </div>
      </Link>

      {/* large screen menu */}
      <div className='my-5'>
        <ul className='lg:flex lg:flex-row lg:gap-14 lg:justify-between lg:items-center hidden'>
          <li
            className='relative group'
            onMouseEnter={homeToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/'
              className='text-md text-white hover:text-orange-500 font-normal'
            >
              Home
            </Link>

            <ul
              className={`absolute font-normal left-0   mt-0.5 w-64 px-5 py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${isHomeDropdownOpen ? 'block' : 'hidden'

                }`}
            >
              <li>
                <Link
                  to='/#whats-new'
                  className='block  text-sm text-black  border-b pb-4 border-gray-200  hover:text-orange-500'
                >
                  What's New
                </Link>
              </li>
              <li>
                <Link
                  to='/#our-mission'
                  className='block text-sm text-black   border-b pb-4 border-gray-200  hover:text-orange-500'
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to='/#our-vision'
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  to='/#our-goals'
                  className='block text-sm text-black pb-4 border-b border-gray-200 hover:text-orange-500  '
                >
                  Our Goals
                </Link>
              </li>
              <li>
                <Link
                  to='/#our-presence-in-the-market'
                  className='block text-sm text-black  hover:text-orange-500  '
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
              className='text-md  text-white   hover:text-orange-500 font-normal'
            >
              About Us
            </Link>
            <ul
              className={`absolute font-normal left-0   mt-0.5 w-64 px-5 py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${isAboutDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <Link
                  to='/about-us/#about-srcpl'
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  About SRCPL
                </Link>
              </li>
              <li>
                <Link 
                to='/about-us/#team-overview'
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  Team Overview
                </Link>
              </li>
              <li>
                <Link
                  to='/about-us/#sr-group-overview'
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  S.R Group Overview
                </Link>
              </li>
              <li>
                <Link
                  to='/about-us/#awards-recognitions'
                  className='block  text-sm text-black  hover:text-orange-500'
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
              className='text-md  text-white   hover:text-orange-500 font-normal'
            >
              Solutions
            </Link>
            <ul
              className={`absolute font-normal left-0   mt-0.5 w-64 px-5 py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50 ${isSolutionsDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <Link
                  to='/solutions/#solutions'
                  className='block  text-sm text-black   hover:text-orange-500'
                >
                  Overall Solutions
                </Link>
              </li>

            </ul>
          </li>


          <li
            className='relative group'
            onMouseEnter={portfolioToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/our-portfolio'
              className='text-md text-white  hover:text-orange-500 font-normal'
            >
              Our Portfolio
            </Link>
            <ul
              className={`absolute font-normal left-0   mt-0.5 w-64 px-5  py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50   ${isPortfolioDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <p
                  onClick={() => handleClick(0)}
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  Mitsubishi Electric
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleClick(1)}
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  Phoenix Contact
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleClick(2)}
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  Control Panels
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleClick(3)}
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  Turnkey Solutions
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleClick(4)}
                  className='block  text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  Services
                </p>
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
              to='/principles'
              className='text-md  text-white   hover:text-orange-500 font-normal'
            >
              Principles
            </Link>
            <ul
              className={`absolute font-normal left-0   mt-0.5 w-64  py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${isPrinciplesDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <Link
                  to='/principles/#mitsubishi-electric-india'
                  className='block py-1 mx-4 text-sm text-black pb-4  border-b border-gray-200 hover:text-orange-500'
                >
                  Mitsubishi Electric India
                </Link>
              </li>
              <li>
                <Link
                  to='/principles/#phoenix-contact-beijer-sick'
                  className='block  py-1 mx-4 text-sm text-black   hover:text-orange-500'
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
              className='text-md text-white hover:text-orange-500 font-normal'
            >
              Contact Us
            </Link>
            <ul
              className={`absolute font-normal left-0   mt-0.5 w-64 px-5 py-5  bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50   ${isContactDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <Link
                  to='/contact-us/#contact-us'
                  className='block  text-sm text-black     hover:text-orange-500'
                >
                  SRCPL Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* mobile menu */}

      <div className={`lg:hidden fixed left-0  bg-white text-black z-10 top-0 h-full w-64 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className='flex flex-row justify-end mx-4 pt-4 '>
          <IoMdClose color='black' className='text-xl  'onClick={closeMenu} />
          </div>

        <ul className="flex flex-col items-start px-4 py-8 space-y-4 ">
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <Link to='/'>Home</Link>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
          <Link to='/about-us'>About Us</Link>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <Link to='/solutions'>Solutions</Link>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <Link to='/our-portfolio'>Our Portfolio</Link>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <Link to='/principles'>Principles</Link>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
      </div>



      <div className="lg:hidden">
        <FiMenu className="text-white text-3xl cursor-pointer  " 
        onClick={toggleMenu}
        
          />
      </div>

      <Link to='/contact-us' className='lg:bg-orange-500 lg:hover:bg-blue-950 lg:px-4 lg:mx-4 lg:py-2 lg:my-4 lg:rounded-md lg:text-sm lg:text-white lg:hover:text-orange-500 lg:font-normal hidden lg:block '>
          Inquiry Now
      </Link>
    </div>
  );
};

export default Navbar;
