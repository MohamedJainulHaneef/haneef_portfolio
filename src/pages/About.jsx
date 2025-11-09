import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaGraduationCap, FaCodeBranch } from 'react-icons/fa'; 
import Img from '../assets/haneef.jpg';

function About() {

    const sectionTransition = { duration: 0.6, ease: "easeOut" };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (

        <section className="w-full min-h-screen flex items-center justify-center" id="about-content">

            <motion.div
                className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-12 bg-white rounded-xl shadow-2xl border border-teal-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                    {/* Left Container */}
                    <div className="lg:w-1/3 flex flex-col items-center justify-center">
                        {/* Image Container */}
                        <motion.div
                            className="relative p-2 border-4 border-teal-500 rounded-2xl mt-4 lg:mt-0 mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={Img}
                                alt="Jainul Haneef, Full Stack Developer"
                                className="w-60 md:w-72 rounded-xl object-cover shadow-xl"
                            />
                            <div className="absolute inset-0 rounded-xl bg-teal-500/10 blur-xl -z-10"></div>
                        </motion.div>
                        {/* Title Block */}
                        <motion.div
                            className="text-center mb-8 w-full"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold text-teal-600 uppercase lg:text-xl">Mohamed Jainul Haneef M I</h3>
                            <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mt-2 lg:text-lg">Full Stack Developer</p>
                        </motion.div>
                        {/* Professional Key Facts - Now Vertical for better fit */}
                        <motion.div
                            className="space-y-4 w-full max-w-sm"
                            initial="hidden"
                            whileInView="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="grid grid-cols-3 gap-4 w-full max-w-sm text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="px-2 py-4 lg:p-4 bg-gray-50 rounded-xl shadow-lg border-t-2 border-teal-500">
                                    <FaLaptopCode className="text-teal-600 text-2xl mx-auto mb-1" />
                                    <p className="text-lg lg:text-xl font-bold text-gray-900 mb-1">2+</p>
                                    <p className="text-xs text-gray-600">Years Exp.</p>
                                </div>
                                <div className="px-2 py-4 lg:p-4 bg-gray-50 rounded-xl shadow-lg border-t-2 border-teal-500">
                                    <FaRocket className="text-teal-600 text-2xl mx-auto mb-1" />
                                    <p className="text-lg lg:text-xl font-bold text-gray-900 mb-1">10+</p>
                                    <p className="text-xs text-gray-600">Projects</p>
                                </div>
                                <div className="px-2 py-4 lg:p-4 bg-gray-50 rounded-xl shadow-lg border-t-2 border-teal-500">
                                    <FaGraduationCap className="text-teal-600 text-2xl mx-auto mb-1" />
                                    <p className="text-lg lg:text-xl font-bold text-gray-900 mb-1">MCA</p>
                                    <p className="text-xs text-gray-600">Graduate</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Container */}
                    <motion.div
                        className="lg:w-2/3 space-y-6 text-gray-700 text-lg leading-relaxed text-left border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-10 pt-8 lg:pt-0"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={sectionTransition}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg text-center lg:text-left md:text-2xl font-bold text-gray-900">
                            The Driving Force Behind Seamless Digital Experiences
                        </h4>
                        <p className="text-base text-center sm:text-lg md:text-justify">
                            I’m a results-driven Full Stack Developer specializing in the MERN Stack, with a strong passion for crafting high-performance, user-focused applications. I excel at bridging complex business logic with clean, intuitive, and visually engaging interfaces using React, TypeScript, and modern frontend technologies.
                        </p>
                        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                            <p className="text-base lg:text-lg text-center lg:text-justify font-semibold text-gray-800">
                                I believe that clean code, fast iteration, and architectural integrity form the backbone of every successful software product.
                            </p>
                        </div>

                        {/* Key Expertise (More structured) */}
                        <h5 className="text-md md:text-xl font-bold text-gray-900 pt-6 border-t mt-8 border-gray-200">
                            Core Expertise :
                        </h5>
                        <ul className="text-gray-700 text-base lg:text-lg space-y-3 list-none">
                            <li className="flex items-start text-justify">
                                <span className="mr-3 text-teal-600 font-bold">&#10003;</span>
                                <span>
                                    <span className="font-semibold text-teal-600">Scalable Frontend :</span>{" "}
                                    Building fast, responsive UIs with React, Next.js, and leveraging state management for complex applications.
                                </span>
                            </li>
                            <li className="flex items-start text-justify">
                                <span className="mr-3 text-teal-600 font-bold">&#10003;</span>
                                <span>
                                    <span className="font-semibold text-teal-600">Robust Backend Development :</span>{" "}
                                    Architecting secure and efficient RESTful APIs using Node.js/Express, focusing on performance.
                                </span>
                            </li>
                            <li className="flex items-start text-justify">
                                <span className="mr-3 text-teal-600 font-bold">&#10003;</span>
                                <span>
                                    <span className="font-semibold text-teal-600">Database Versatility :</span>{" "}
                                   Proficient in both MongoDB for flexible data modeling and PostgreSQL for structured relational needs.
                                </span>
                            </li>
                        </ul>
                        <p className="pt-4 text-gray-600 italic text-center">
                            Currently available for new opportunities to build innovative, impactful applications.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default About;