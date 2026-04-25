import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'MSc in Blockchain Technology',
      institution: 'MIT World Peace University, Pune',
      period: 'Expected 2026',
      achievements: [
        'CGPA (till 3rd Sem): 8.47/10.00',
        'Conducted a research study to design a secure and transparent voting system using blockchain technology.',
        'Applied full research methodology: problem identification, literature review, gap analysis, and solution design.',
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Gujarat University',
      period: '2021 - 2024',
      achievements: [
        'CGPA: 8.17/10.00',
      ],
    },
  ];

  return (
    <section name='education' className='w-full py-20 bg-primary text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='section-title'>
          <span className='text-secondary font-mono text-xl'>02.</span>
          <h2 className='text-3xl font-bold'>Education</h2>
        </div>

        <div className='mt-10 space-y-12'>
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='relative pl-8 border-l border-secondary/30'
            >
              <div className='absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(100,255,218,0.5)]'></div>
              <div className='flex flex-col md:flex-row md:justify-between md:items-baseline'>
                <h3 className='text-xl font-bold text-light'>{item.degree}</h3>
                <span className='text-secondary font-mono text-sm'>{item.period}</span>
              </div>
              <p className='text-lg text-lighter mt-1'>{item.institution}</p>
              <ul className='mt-4 space-y-2'>
                {item.achievements.map((achievement, i) => (
                  <li key={i} className='flex items-start gap-2'>
                    <span className='text-secondary mt-1'>▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;