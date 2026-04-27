import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const navLinks = [
    { id: 1, title: 'Home', target: 'home' },
    { id: 2, title: 'About', target: 'about' },
    { id: 3, title: 'Skills', target: 'skills' },
    { id: 4, title: 'Work', target: 'work' },
    { id: 5, title: 'Contact', target: 'contact' },
  ];

  return (
    <nav className={`fixed w-full h-20 z-[100] transition-all duration-300 ${shadow ? 'bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-xl' : 'bg-transparent'}`}>
      <div className='max-w-[1240px] mx-auto px-6 flex justify-between items-center h-full'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-2xl font-bold text-secondary cursor-pointer hover:scale-105 transition-transform duration-300'>
            &lt; Portfolio /&gt;
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          <ul className='flex gap-8'>
            {navLinks.map(({ id, title, target }) => (
              <li key={id}>
                <Link 
                  to={target} 
                  smooth={true} 
                  duration={500} 
                  className='nav-link text-light text-sm font-mono tracking-widest'
                >
                  <span className='text-secondary mr-2'>0{id}.</span>{title}
                </Link>
              </li>
            ))}
          </ul>
          <a 
            href="https://drive.google.com/file/d/1ZFoX_6p_2VpgF8PE4dG8XeGnfYf5KFtR/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className='px-5 py-2 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors duration-300 font-mono text-sm'
          >
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 text-secondary cursor-pointer'>
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='fixed top-0 left-0 w-full h-screen bg-primary/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden'
          >
            <ul className='flex flex-col gap-10 items-center'>
              {navLinks.map(({ id, title, target }) => (
                <li key={id}>
                  <Link 
                    onClick={handleClick}
                    to={target} 
                    smooth={true} 
                    duration={500} 
                    className='text-3xl font-mono text-light hover:text-secondary'
                  >
                    <span className='text-secondary text-xl mr-2'>0{id}.</span>{title}
                  </Link>
                </li>
              ))}
              <a 
                href="https://drive.google.com/file/d/1ZFoX_6p_2VpgF8PE4dG8XeGnfYf5KFtR/view?usp=drive_link"
                target="_blank" 
                rel="noopener noreferrer"
                className='px-10 py-4 border-2 border-secondary text-secondary rounded-lg font-mono text-xl hover:bg-secondary/10'
              >
                Resume
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social icons - Side bar */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-50'>
        <ul>
          {[
            { id: 1, title: 'Linkedin', icon: <FaLinkedin size={25} />, color: 'bg-[#0077b5]', link: 'https://linkedin.com/in/nilu912' },
            { id: 2, title: 'Github', icon: <FaGithub size={25} />, color: 'bg-[#333]', link: 'https://github.com/nilu912' },
            { id: 3, title: 'Email', icon: <HiOutlineMail size={25} />, color: 'bg-[#6fc2b0]', link: 'mailto:panchalnilu91@gmail.com' },
            { id: 4, title: 'Resume', icon: <BsFillPersonLinesFill size={25} />, color: 'bg-[#565f69]', link: 'https://drive.google.com/file/d/1ZFoX_6p_2VpgF8PE4dG8XeGnfYf5KFtR/view?usp=drive_link' },
          ].map(({ id, title, icon, color, link }) => (
            <li key={id} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${color} rounded-r-lg`}>
              <a 
                className='flex justify-between items-center w-full text-gray-300 px-4 font-semibold' 
                href={link}
                target={id !== 3 ? "_blank" : "_self"} 
                rel="noopener noreferrer"
              >
                {title} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;