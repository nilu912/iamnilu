import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section name='contact' className='w-full py-20 bg-primary flex justify-center items-center p-4'>
      <div className='max-w-[1000px] w-full'>
        <div className='section-title'>
          <span className='text-secondary font-mono text-xl'>06.</span>
          <h2 className='text-3xl font-bold'>Get In Touch</h2>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mt-10'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className='text-lg leading-relaxed mb-6'>
              I’m currently looking for new opportunities, my inbox is always open. 
              Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary'>
                  <span className='font-mono'>@</span>
                </div>
                <div>
                  <p className='text-sm text-lighter font-mono'>Email</p>
                  <p className='text-light'>panchalnilu91@gmail.com</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary'>
                  <span className='font-mono'>in</span>
                </div>
                <div>
                  <p className='text-sm text-lighter font-mono'>LinkedIn</p>
                  <p className='text-light'>linkedin.com/in/nilu912</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary'>
                  <span className='font-mono'>#</span>
                </div>
                <div>
                  <p className='text-sm text-lighter font-mono'>Phone</p>
                  <p className='text-light'>+91-9081575637</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            method='POST' 
            action="" 
            className='flex flex-col space-y-4'
          >
            <div className='grid grid-cols-2 gap-4'>
              <input 
                className='bg-[#112240] p-4 rounded text-light border border-transparent focus:border-secondary outline-none transition-colors' 
                type="text" 
                placeholder='Name' 
                name='name' 
                required
              />
              <input 
                className='bg-[#112240] p-4 rounded text-light border border-transparent focus:border-secondary outline-none transition-colors' 
                type="email" 
                placeholder='Email' 
                name='email' 
                required
              />
            </div>
            <input 
              className='bg-[#112240] p-4 rounded text-light border border-transparent focus:border-secondary outline-none transition-colors' 
              type="text" 
              placeholder='Subject' 
              name='subject' 
            />
            <textarea 
              className='bg-[#112240] p-4 rounded text-light border border-transparent focus:border-secondary outline-none transition-colors' 
              name="message" 
              rows="6" 
              placeholder='Message'
              required
            ></textarea>
            <button className='text-secondary border-2 border-secondary hover:bg-secondary/10 px-8 py-4 mt-4 rounded font-mono transition-all duration-300 self-start'>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;