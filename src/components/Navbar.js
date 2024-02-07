import React, { useState } from 'react';
import logo from '../assets/logo-new.png';
import { Link, a, useNavigate } from 'react-router-dom';
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


  const ToggleMenu = () => {
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
    props.handleProductsData(data)
    navigate('/products-page')
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

  const linkButtonStyle = 'text-md font-semibold text-orange-500 hover:text-black font-normal'

  return (
    <div className={`flex flex-row justify-between px-5  my-0.5 items-center py-2 bg-[#fff] z-50 w-full ${active ? 'fixed -top-1' : ''} shadow `}>

      <Link to='/'>
        <div className='w-64'>
          <img src={logo} className='h-20   py-4 mx-4' />
        </div>
      </Link>

      {/* large screen menu */}
      <div className='my-5 '>
        <ul className='lg:flex lg:flex-row lg:gap-14 lg:justify-between lg:items-center hidden'>
          <li
            className='relative group'
            onMouseEnter={homeToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/'
              className={linkButtonStyle}
            >
              Home
            </Link>

          </li>

          <li
            className='relative group'
            onMouseEnter={aboutToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/about-us'
              className={linkButtonStyle}
            >
              About Us
            </Link>
          </li>

          {/* Solutions Dropdown */}
          <li
            className='relative group'
            onMouseEnter={solutionsToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/solutions'
              className={linkButtonStyle}
            >
              Solutions
            </Link>
          </li>


          <li
            className='relative group'
            onMouseEnter={portfolioToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/products'
              className={linkButtonStyle}
            >
              Products
            </Link>
          </li>
          <li
            className='relative group'
            onMouseEnter={principlesToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/principles'
              className={linkButtonStyle}
            >
              Principles
            </Link>
          </li>
          <li
            className='relative group'
            onMouseEnter={contactToggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to='/contact-us'
              className={linkButtonStyle}
            >
              Contact Us
            </Link>

          </li>
        </ul>
      </div>
      {/* mobile menu */}

      <div className={`lg:hidden fixed left-0  bg-white text-black z-10 hrefp-0 h-full w-64 ${menuOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-row justify-end mx-4 pt-4 '>
          <IoMdClose color='black' className='text-xl  ' onClick={closeMenu} />
        </div>

        <ul className="flex flex-col items-start px-4 py-8 space-y-4 ">
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <a href='/'>Home</a>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <a href='/about-us'>About Us</a>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <a href='/solutions'>Solutions</a>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <a href='/our-portfolio'>Our Portfolio</a>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <a href='/principles'>Principles</a>
          </li>
          <li className=' hover:text-orange-500   px-2 py-2 rounded-lg cursor-pointer' onClick={closeMenu} >
            <a href='/contact-us'>Contact Us</a>
          </li>
        </ul>
      </div>



      <div className="lg:hidden">
        <FiMenu className="text-white text-3xl cursor-pointer  "
          onClick={ToggleMenu}

        />
      </div>

      <a href='/contact-us' className='lg:bg-orange-500 lg:hover:bg-[#02111e] lg:px-3 lg:mx-8 lg:py-2 lg:my-4 lg:rounded-md lg:text-md lg:font-bold lg:text-white lg:hover:text-white  hidden lg:block '>
        Inquiry Now
      </a>
    </div>
  );
};

export default Navbar;
