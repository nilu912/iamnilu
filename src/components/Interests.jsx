import React from 'react';
import { FaCamera, FaPlane, FaBook, FaGamepad, FaMusic, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Interests = () => {
  const interests = [
    { name: 'Photography', icon: <FaCamera size={40} />, description: 'Capturing moments through my lens, especially street photography and nature.' },
    { name: 'Traveling', icon: <FaPlane size={40} />, description: 'Exploring new cultures, meeting new people, and tasting exotic cuisines.' },
    { name: 'Reading', icon: <FaBook size={40} />, description: 'Diving into science fiction and technical books to keep my imagination and knowledge sharp.' },
    { name: 'Gaming', icon: <FaGamepad size={40} />, description: 'Strategy games and open-world adventures are my favorite ways to unwind.' },
    { name: 'Music', icon: <FaMusic size={40} />, description: 'Playing the guitar and exploring diverse genres of music across the globe.' },
    { name: 'Open Source', icon: <FaCode size={40} />, description: 'Contributing to open-source projects and helping others in the developer community.' },
  ];

  return (
    <section name='interests' className='w-full py-20 bg-primary text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='section-title'>
          <span className='text-secondary font-mono text-xl'>03.</span>
          <h2 className='text-3xl font-bold'>Interests & Hobbies</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='card-glass flex flex-col items-center text-center group'
            >
              <div className='text-secondary mb-4 group-hover:scale-110 transition-transform duration-300'>
                {interest.icon}
              </div>
              <h3 className='text-xl font-bold text-light mb-2'>{interest.name}</h3>
              <p className='text-lighter text-sm'>{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;