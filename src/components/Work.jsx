import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Blockchain-based Voting System',
      description: 'A decentralized e-voting application utilizing Solidity smart contracts for immutable election records. Includes 2-step authentication and real-time cryptographic tracking.',
      tech: ['Solidity', 'ReactJS', 'Ethers.js', 'MongoDB'],
      github: 'https://github.com/nilu912/blockchain-voting-system',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      title: 'Blockchain Password Manager',
      description: 'A decentralized password manager leveraging a "Trust No One" architecture. Implements local AES encryption before deploying hashes to the Ethereum blockchain for mathematical security.',
      tech: ['ReactJS', 'Solidity', 'Hardhat', 'Ethers.js'],
      github: 'https://github.com/password-manager',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      title: 'Apang Seva Kendra Web Portal',
      description: 'A full-stack MERN web application for a non-profit organization serving disabled individuals. Features a highly accessible, responsive UI to streamline resource allocation.',
      tech: ['MongoDB', 'Express.js', 'ReactJS', 'Node.js'],
      github: '#',
      demo: 'https://apangsevakendrasangli.org',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628ce27df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 4,
      title: 'NFT-Based Ticketing System',
      description: 'A decentralized Web3 platform for event ticketing, utilizing ERC-721 standards to prevent fraud. Integrated Ethereum smart contracts with a ReactJS frontend for wallet-based access.',
      tech: ['Solidity', 'ERC-721', 'ReactJS', 'Node.js'],
      github: 'https://github.com/nilu912/nft-ticketing-system',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 5,
      title: 'NFT Media Vault',
      description: 'A decentralized media vault for minting diverse media formats as NFTs. Integrated IPFS via Pinata for decentralized storage and deployed to the Ethereum Sepolia testnet.',
      tech: ['ReactJS', 'Solidity', 'IPFS', 'Hardhat'],
      github: 'https://github.com/nilu912/Media Vault',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ];

  return (
    <section name='work' className='w-full py-20 text-gray-300 bg-primary'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='section-title'>
          <span className='text-secondary font-mono text-xl'>05.</span>
          <h2 className='text-3xl font-bold'>Some Things I’ve Built</h2>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='card-glass group relative flex flex-col h-full bg-[#112240] rounded-md p-4'
            >
              <div className='relative overflow-hidden rounded-md h-48 mb-6'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100'
                />
                <div className='absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-300'></div>
              </div>

              <div className='flex flex-col flex-grow'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-xl font-bold text-light group-hover:text-secondary transition-colors duration-300'>
                    {project.title}
                  </h3>
                  <div className='flex gap-4 text-light'>
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noreferrer" className='hover:text-secondary'>
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className='hover:text-secondary'>
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className='text-lighter text-sm mb-6 leading-relaxed'>
                  {project.description}
                </p>

                <ul className='flex flex-wrap gap-x-4 gap-y-2 mt-auto font-mono text-xs text-secondary/70'>
                  {project.tech.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;