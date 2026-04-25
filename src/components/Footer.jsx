import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full py-8 bg-dark text-lighter flex flex-col items-center justify-center border-t border-white/5'>
      <div className='flex gap-6 mb-4 md:hidden'>
        {/* Social icons for mobile footer */}
        <a href='#' className='hover:text-secondary transition-colors duration-300'>LinkedIn</a>
        <a href='#' className='hover:text-secondary transition-colors duration-300'>GitHub</a>
        <a href='#' className='hover:text-secondary transition-colors duration-300'>Email</a>
      </div>
      <p className='font-mono text-sm'>
        Designed & Built by <span className='text-secondary'>Your Name</span>
      </p>
      <p className='text-xs mt-2 opacity-50'>
        © 2024 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;