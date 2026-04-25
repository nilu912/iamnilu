import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section name='about' className='w-full py-20 bg-primary text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4'>
          <div className='section-title'>
            <span className='text-secondary font-mono text-xl'>01.</span>
            <h2 className='text-3xl font-bold'>About Me</h2>
          </div>
          
          <div className='grid md:grid-cols-2 gap-12 mt-10'>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <p className='text-lg leading-relaxed'>
                Hello! My name is <span className='text-secondary'>Lexus</span>. My journey into tech hasn't been a straight line. 
                After taking some time to figure out my path early in my education, I discovered a deep passion for computers. 
                Starting my BCA in 2021 changed everything. I transformed into someone who loved uncovering how things work 
                behind the scenes—diving into networking, fundamentals, and programming languages like C, C++, and Java.
              </p>
              <p className='text-lg leading-relaxed'>
                I found a special love for Data Structures and Algorithms, particularly the elegance of Linked Lists. 
                Realizing that a blockchain is fundamentally a complex, cryptographic linked list, my path felt clear. 
                I stepped entirely out of my comfort zone, moving from Ahmedabad to MIT Pune to pursue my Master's in Blockchain Technology. 
              </p>
              <p className='text-lg leading-relaxed'>
                Now in my final semester, I am working full-time as a <span className='text-secondary'>React Frontend Developer Intern</span>. 
                While my ultimate goal is Web3 development, I am deliberately honing my frontend skills to bridge the gap 
                between complex decentralized logic and seamless, intuitive user interfaces.
              </p>
              <p className='text-lg leading-relaxed italic border-l-4 border-secondary pl-4 py-2 my-4 bg-secondary/10 rounded-r-md'>
                "Finding my path wasn't easy, but code gave me a voice and a direction. Today, I strive to build impactful experiences for the future."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='relative flex justify-center'
            >
              <div className='group relative w-64 h-64 sm:w-80 sm:h-80'>
                <div className='absolute inset-0 border-2 border-secondary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300 rounded'></div>
                <div className='relative w-full h-full bg-secondary/20 rounded overflow-hidden'>
                  <div className='w-full h-full bg-primary/40 group-hover:bg-transparent transition-colors duration-300'>
                    {/* Placeholder for Photo */}
                    <div className='w-full h-full flex items-center justify-center text-secondary/30'>
                      {/* <span className='font-mono text-sm'>[ Your Photo ]</span> */}
                      <img 
                        src="https://drive.google.com/file/d/12xuEO1mO-l_1aciPoaN1zHvmJLcaWuqS/view?usp=sharing"  
                        alt="Lexus" 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className='grid md:grid-cols-2 gap-8 mt-20'>
            <div className='card-glass p-6 rounded-lg border border-gray-700 hover:border-secondary transition-colors'>
              <h3 className='text-secondary font-mono mb-4 text-xl'>Personal Background</h3>
              <p className='leading-relaxed'>
                Based in Ahmedabad, my academic journey shifted from a Bachelor of Computer Applications to an M.Sc. in Blockchain Technology. I enjoy combining my technical foundation in cryptography and data structures with modern tools like React.js and Solidity to build tangible, decentralized applications.
              </p>
            </div>
            <div className='card-glass p-6 rounded-lg border border-gray-700 hover:border-secondary transition-colors'>
              <h3 className='text-secondary font-mono mb-4 text-xl'>Growth & Goals</h3>
              <p className='leading-relaxed'>
                My early academic life was difficult; I was the quiet kid who struggled to keep up, eventually stepping away from school for two years to reset. Returning to finish my education and discovering programming was a turning point. Transforming from a struggling student to a passionate developer pursuing a Master's degree taught me resilience. Today, my goal is to keep pushing my limits, learn relentlessly, and bring that drive to a forward-thinking company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section name='about' className='w-full py-20 bg-primary text-gray-300'>
//       <div className='flex flex-col justify-center items-center w-full h-full'>
//         <div className='max-w-[1000px] w-full px-4'>
//           <div className='section-title'>
//             <span className='text-secondary font-mono text-xl'>01.</span>
//             <h2 className='text-3xl font-bold'>About Me</h2>
//           </div>
          
//           <div className='grid md:grid-cols-2 gap-12 mt-10'>
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className='space-y-4'
//             >
//               <p className='text-lg leading-relaxed'>
//                 Hello! My name is <span className='text-secondary'>Nilu Panchal</span> and I enjoy creating things that live on the internet. 
//                 My interest in web development started back in 2021 when I Started Bachelor of Computer Applications (BCA) at 
//                 Gujarat University. after learning the basics of programming, I was eager to build something tangible and quickly. 
//                 so  
//                 decided to try editing custom Tumblr themes — turns out 
//                 hacking together a custom reblog button taught me a lot about HTML & CSS!
//               </p>
//               <p className='text-lg leading-relaxed'>
//                 Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, 
//                 and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences 
//                 at <span className='text-secondary'>My Company</span> for a variety of clients.
//               </p>
//               <p className='text-lg leading-relaxed italic'>
//                 "I believe that code is a tool to solve human problems, and I strive to make my work as impactful as it is efficient."
//               </p>
//             </motion.div>

//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className='relative flex justify-center'
//             >
//               <div className='group relative w-64 h-64 sm:w-80 sm:h-80'>
//                 <div className='absolute inset-0 border-2 border-secondary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300 rounded'></div>
//                 <div className='relative w-full h-full bg-secondary/20 rounded overflow-hidden'>
//                   <div className='w-full h-full bg-primary/40 group-hover:bg-transparent transition-colors duration-300'>
//                     {/* Placeholder for Photo */}
//                     <div className='w-full h-full flex items-center justify-center text-secondary/30'>
//                       <span className='font-mono text-sm'>[ Your Photo ]</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
          
//           <div className='grid md:grid-cols-2 gap-8 mt-20'>
//             <div className='card-glass'>
//               <h3 className='text-secondary font-mono mb-4'>Personal Background</h3>
//               <p>Based in New York City, I have a background in Design and Computer Science. I love blending the creative and technical worlds to build things that are both beautiful and functional.</p>
//             </div>
//             <div className='card-glass'>
//               <h3 className='text-secondary font-mono mb-4'>Goals & Personality</h3>
//               <p>I am a lifelong learner with a passion for emerging technologies. When I'm not coding, you'll find me exploring the city, reading science fiction, or working on my latest photography project.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;