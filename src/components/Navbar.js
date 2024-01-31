import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const [isHomeDropdownOpen, setHomeDropdownopen] = useState(false);
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isPortfolioDropdownOpen, setPortfolioDropdownopen] = useState(false);
  const [isPrinciplesDropdownOpen, setPrinciplesDropdownopen] = useState(false);
  const [isContactDropdownOpen, setContactDropdownopen] = useState(false);


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
    <div className={`flex flex-row justify-between my-0.5 items-center py-8 bg-[#081528] z-50 w-full ${active ? 'fixed -top-1' : ''}`}>


      <Link to='/'>
        <div className='w-64'>
          <img src={logo} className='h-20   py-3 mx-4' />
        </div>
      </Link>


      <div className='my-5'>
        <ul className='flex flex-row gap-10 justify-between items-center'>
          <li
            className='relative group'
            onMouseEnter={homeToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/'
              className='text-lg text-white hover:text-orange-500 font-semibold'
            >
              Home
            </Link>

            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5 py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${isHomeDropdownOpen ? 'block' : 'hidden'

                }`}
            >
              <li>
                <a
                  href='/#whats-new'
                  className='block  text-md text-black  border-b border-gray-500  hover:text-orange-500'
                >
                  What's New
                </a>
              </li>
              <li>
                <a
                  href='/#our-mission'
                  className='block text-md text-black   border-b border-gray-500  hover:text-orange-500'
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href='/#our-vision'
                  className='block  text-md text-black   border-b border-gray-500 hover:text-orange-500'
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href='/#our-goals'
                  className='block text-md text-black border-b border-gray-500 hover:text-orange-500  '
                >
                  Our Goals
                </a>
              </li>
              <li>
                <a
                  href='/#our-presence-in-the-market'
                  className='block text-md text-black  border-b border-gray-500 hover:text-orange-500  '
                >
                  Our Presence in the market
                </a>
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
              className='text-lg  text-white   hover:text-orange-500 font-semibold'
            >
              About Us
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5 py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${isAboutDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <a
                  href='/about-us/#about-srcpl'
                  className='block  text-md text-black  border-b border-gray-500 hover:text-orange-500 '
                >
                  About SRCPL
                </a>
              </li>
              <li>
                <a
                  href='/about-us/#team-overview'
                  className='block text-md text-black  border-b border-gray-500 hover:text-orange-500   '
                >
                  Team Overview
                </a>
              </li>
              <li>
                <a
                  href='/about-us/#sr-group-overview'
                  className='block text-md text-black  border-b border-gray-500 hover:text-orange-500   '
                >
                  S.R Group Overview
                </a>
              </li>
              <li>
                <a
                  href='/about-us/#awards-recognitions'
                  className='block text-md text-black  border-b border-gray-500 hover:text-orange-500   '
                >
                  Awards & Recognitions
                </a>
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
              className='text-lg  text-white   hover:text-orange-500 font-semibold'
            >
              Solutions
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5 py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50 ${isSolutionsDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <a
                  href='/solutions/#solutions'
                  className='block  text-md text-black   hover:text-orange-500'
                >
                  Overall Solutions
                </a>
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
              className='text-lg  text-white  hover:text-orange-500 font-semibold'
            >
              Our Portfolio
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5  py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50   ${isPortfolioDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <p
                  onClick={() => handleClick(0)}
                  className='block cursor-pointer text-md text-black  border-b border-gray-500    hover:text-orange-500'
                >
                  Mitsubishi Electric
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleClick(1)}
                  className='block cursor-pointer text-md text-black  border-b border-gray-500   hover:text-orange-500'
                >
                  Phoenix Contact
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleClick(2)}
                  className='block cursor-pointer text-md text-black  border-b border-gray-500   hover:text-orange-500'
                >
                  Control Panels
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleClick(3)}
                  className='block cursor-pointer text-md text-black   border-b border-gray-500  hover:text-orange-500'
                >
                  Turnkey Solutions
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleClick(4)}
                  className='block cursor-pointer text-md text-black  border-b border-gray-500   hover:text-orange-500'
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
              className='text-lg  text-white   hover:text-orange-500 font-semibold'
            >
              Principles
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64  py-5 bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50  ${isPrinciplesDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <a
                  href='/principles/#mitsubishi-electric-india'
                  className=' block mx-4 py-1 text-md text-black   border-b border-gray-500  hover:text-orange-500'
                >
                  Mitsubishi Electric India
                </a>
              </li>
              <li>
                <a
                  href='/principles/#phoenix-contact-beijer-sick'
                  className='block  py-1 mx-4 text-md text-black   border-b border-gray-500  hover:text-orange-500'
                >
                  Phoenix Contact Beijer Sick
                </a>
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
              className='text-lg  text-white hover:text-orange-500 font-semibold'
            >
              Contact Us
            </Link>
            <ul
              className={`absolute font-semibold left-0   mt-0.5 w-64 px-5 py-5  bg-white border border-gray-300 flex flex-col gap-4 rounded-xl  shadow-lg z-50   ${isContactDropdownOpen ? 'block' : 'hidden'
                }`}
            >
              <li>
                <a
                  href='/contact-us/#contact-us'
                  className='block  text-md text-black     hover:text-orange-500'
                >
                  SRCPL Contact
                </a>
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

      <Link to='/contact-us'>
        <button className='bg-orange-500 hover:bg-blue-950 px-4 mx-4 py-2 my-4 rounded-md text-lg text-white hover:text-orange-500 font-semibold'>
          Inquiry Now
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
