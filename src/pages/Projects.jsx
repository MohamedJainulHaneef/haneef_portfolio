


import React from 'react';
import { motion } from 'framer-motion';
import attendanceImg from '../assets/attendance.png';
import scholarshipImg from '../assets/scholarship.png';
import obeImg from '../assets/obe.png';
import upvcImg from '../assets/upvc.png';
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiExpress } from 'react-icons/si';

const projects = [
    {
        title: 'Outcome-Based Education System',
        description: 'Comprehensive Outcome-Based Education (OBE) system used by 8000+ students and 510 staff at Jamal Mohamed College. The platform manages CIA marks, assignments, ESE scores, and other exam components, evaluating student performance across High, Medium, and Low Order Thinking skills. It calculates Student Outcomes (SO), Course Outcomes (CO), and Program Specific Outcomes (PSO), offering extensive management options for academic reports and performance tracking.',
        tech: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
        image: obeImg,
        liveLink: 'https://www.jmc.edu/',
        githubLink: '#',
        note: 'Used internally by the institution.',
    },
    {
        title: 'Scholarship Portal',
        description: 'Dynamic web application for managing alumni scholarships, allowing students to apply and track their applications through a personalized dashboard. Awards are allocated based on academic performance, class attendance, and Deeniyath/moral attendance, ensuring transparent distribution of donor funds to deserving students.',
        tech: ['React', 'Tailwind CSS', 'Express', 'MySQL'],
        image: scholarshipImg,
        liveLink: 'https://your-scholarship-app-link.com',
        githubLink: '#',
    },
    {
        title: 'Attendance Management System',
        description: 'Full-stack web application to manage daily attendance manually for 50+ students across two daily classes, specifically designed for efficiently handling the Aalim course. Features batch-wise tracking, seamless data entry, and comprehensive reporting to simplify academic record management.',
        tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        image: attendanceImg,
        liveLink: 'https://your-attendance-app-link.com',
        githubLink: '#',
    },
];

const techIcons = {
    React: <FaReact className="text-blue-500" />,
    'Node.js': <FaNodeJs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    MySQL: <SiMysql className="text-blue-600" />,
    'Tailwind CSS': <SiTailwindcss className="text-teal-500" />,
    Express: <SiExpress className="text-gray-600" />,
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 12 } },
};

function Projects() {
    return (
        <section className="w-full bg-gray-50" id="projects">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {/* Project Image */}
                            <div className="relative h-50 lg:h-74 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full transition-transform duration-500 transform hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col grow gap-4">
                                <h3 className="text-lg lg:text-2xl font-bold text-gray-900">{project.title}</h3>
                                <p className="text-gray-700 text-sm lg:text-[16px] grow text-justify">{project.description}</p>
                                {/* Tech Stack */}
                                <div className="flex flex-wrap grow gap-2">
                                    {project.tech.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                                        >
                                            {techIcons[tech]} {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 text-sm lg:text-[16px] inline-flex items-center justify-center gap-2 px-3 py-3 rounded-lg font-semibold transition-colors duration-300 ${project.liveLink === '#'
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-70'
                                            : 'bg-teal-600 text-white hover:bg-teal-700'
                                            }`}
                                    >
                                        <FaExternalLinkAlt /> Live Preview
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 text-sm lg:text-[16px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 font-semibold transition-colors duration-300 ${project.githubLink === '#'
                                            ? 'border-gray-200 text-gray-400 cursor-not-allowed opacity-70'
                                            : 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
                                            }`}
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;