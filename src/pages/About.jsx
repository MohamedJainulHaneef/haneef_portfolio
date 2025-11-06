import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaGraduationCap } from 'react-icons/fa'; // Icons for key facts
import Img from '../assets/Haneef.jpg';

function About() {

	return (
        <section className="w-full py-20 bg-gray-900" id="about">
            <div className="max-w-6xl mx-auto px-4">
                
                {/* Section Header */}
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    About Me & My Journey
                </motion.h2>

                <div className='flex flex-col gap-12 lg:flex-row lg:gap-16 items-center'>
                    
                    {/* Image & Key Facts Column (L-Hand Side) */}
                    <div className="w-full lg:w-[40%] flex flex-col items-center space-y-8">
                        
                        {/* Image Container with Styled Border */}
                        <motion.div
                            className="relative p-2 border-4 border-blue-600 rounded-3xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={Img}
                                alt="Haneef, Full Stack Developer"
                                className="w-72 md:w-80 rounded-2xl object-cover shadow-2xl transition duration-300"
                            />
                            {/* Subtle Blue glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl -z-10"></div>
                        </motion.div>

                        {/* Professional Key Facts (New Element) */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 w-full max-w-sm md:max-w-md text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-3 bg-gray-800 rounded-lg shadow-lg border-t-2 border-blue-600">
                                <FaLaptopCode className="text-blue-400 text-2xl mx-auto mb-1" />
                                <p className="text-xl font-bold text-white">2+</p>
                                <p className="text-xs text-gray-400">Years Exp.</p>
                            </div>
                            <div className="p-3 bg-gray-800 rounded-lg shadow-lg border-t-2 border-blue-600">
                                <FaRocket className="text-blue-400 text-2xl mx-auto mb-1" />
                                <p className="text-xl font-bold text-white">10+</p>
                                <p className="text-xs text-gray-400">Projects</p>
                            </div>
                            <div className="p-3 bg-gray-800 rounded-lg shadow-lg border-t-2 border-blue-600">
                                <FaGraduationCap className="text-blue-400 text-2xl mx-auto mb-1" />
                                <p className="text-xl font-bold text-white">MCA</p>
                                <p className="text-xs text-gray-400">Graduate</p>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* Text Content Column (R-Hand Side) */}
                    <motion.div
                        className="w-full lg:w-[60%] space-y-6 text-gray-300 text-lg leading-relaxed text-left"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Hi, I'm Haneef—a problem-solver obsessed with digital performance.
                        </h3>
                        
                        <p>
                            My core expertise lies in the **MERN Stack**, where I operate as a <span className="text-blue-400 font-semibold">Full Stack Developer with a strong focus on the Frontend</span>. I excel at translating complex requirements into highly functional, pixel-perfect user interfaces using **React** and **Next.js**.
                        </p>

                        <p>
                            What truly drives me is **scalability and clean architecture**. I don't just write code; I build systems designed for maintainability and speed, ensuring a seamless user experience across all devices.
                        </p>
                        
                        {/* Key Focus/Skills as a bulleted list for quick reading */}
                        <ul className="space-y-2 text-gray-400 pl-5 list-disc">
                            <li>**Frontend Mastery:** Deep experience in React hooks, state management (Redux/Context), and modern styling (Tailwind CSS).</li>
                            <li>**Backend Proficiency:** Building robust and secure RESTful APIs with Node.js and Express.</li>
                            <li>**Data Handling:** Practical knowledge of both NoSQL (MongoDB) and relational databases (PostgreSQL/MySQL).</li>
                        </ul>
                        
                        <p className="pt-4 border-t border-gray-700">
                            I am currently seeking challenging roles that leverage cutting-edge technologies to deliver real business value.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
	)
}

export default About;