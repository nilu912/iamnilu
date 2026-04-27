import React from 'react';
import { 
  FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaDatabase, FaPython, FaJava, FaCube, FaLink 
} from 'react-icons/fa';
import { 
  SiTypescript, SiSolidity, SiEthereum, SiIpfs, SiRust, SiExpress, SiMongodb, SiMysql, 
  SiSpring,
  SiPostgresql,
  SiFoundryvirtualtabletop,
  SiCplusplus
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { BiSolidHardHat } from 'react-icons/bi';
import { FaC } from 'react-icons/fa6';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Solidity', icon: <SiSolidity size={40} color='#e6e6e6' /> },
        { name: 'C', icon: <FaC size={40} color='#b07219' /> },
        { name: 'C++', icon: <SiCplusplus size={40} color='#b07219' /> },
        { name: 'JavaScript', icon: <FaJsSquare size={40} color='#f7df1e' /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} color='#3178c6' /> },
        // { name: 'Rust', icon: <SiRust size={40} color='#dea584' /> },
        { name: 'Python', icon: <FaPython size={40} color='#3776ab' /> },
        { name: 'Java', icon: <FaJava size={40} color='#b07219' /> },
      ],
    },
    {
      title: 'Blockchain & Web3',
      skills: [
        { name: 'Ethereum', icon: <SiEthereum size={40} color='#8c8c8c' /> },
        { name: 'Hardhat', icon: <BiSolidHardHat size={40} color='#f4f4f4' /> },
        { name: 'Foundry', icon: <SiFoundryvirtualtabletop size={40} color='#f4f4f4' /> },
        { name: 'Ethers.js / Web3.js', icon: <FaLink size={40} color='#4a90e2' /> },
        { name: 'IPFS', icon: <SiIpfs size={40} color='#65c2cb' /> },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'ReactJS', icon: <FaReact size={40} color='#61dafb' /> },
        { name: 'Node.js', icon: <FaNodeJs size={40} color='#339933' /> },
        { name: 'Express.js', icon: <SiExpress size={40} color='#ffffff' /> },
        { name: 'HTML/CSS', icon: <FaHtml5 size={40} color='#e34f26' /> },
        { name: 'Spring Boot', icon: <SiSpring size={40} color='#61dafb' /> },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb size={40} color='#47a248' /> },
        { name: 'MySQL', icon: <SiMysql size={40} color='#4479a1' /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={40} color='#4479a1' /> },
        { name: 'Git', icon: <FaGithub size={40} color='#ffffff' /> },
        { name: 'Cryptography', icon: <FaDatabase size={40} color='#a0aec0' /> },
      ],
    },
  ];

  return (
    <section name='skills' className='w-full py-20 bg-primary text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='section-title'>
            <span className='text-secondary font-mono text-xl'>04.</span>
            <h2 className='text-3xl font-bold'>Skills & Technologies</h2>
          </div>
          <p className='text-lg leading-relaxed mb-10'>// Architecting decentralized solutions, secure smart contracts, and scalable MERN applications.</p>

          <div className='space-y-12'>
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className='text-xl font-bold text-light mb-6 flex items-center gap-2'>
                  <span className='w-2 h-2 bg-secondary rounded-full'></span>
                  {category.title}
                </h3>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center'>
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div 
                      key={skillIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                      viewport={{ once: true }}
                      className='shadow-lg shadow-[#040c16] bg-[#112240] p-6 rounded-lg hover:scale-110 duration-500 flex flex-col items-center justify-center gap-4 group'
                    >
                      <div className='group-hover:drop-shadow-[0_0_10px_rgba(100,255,218,0.5)] transition-all duration-300'>
                        {skill.icon}
                      </div>
                      <p className='font-mono text-sm text-light'>{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Skills;