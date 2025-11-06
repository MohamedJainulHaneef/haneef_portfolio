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
		title: 'Attendance Management System',
		description: 'Full-stack web app to manage student attendance with batch-wise tracking, daily entries, and semester-based reporting.',
		tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
		image: attendanceImg,
		liveLink: 'https://your-attendance-app-link.com',
        githubLink: '#', // Placeholder for GitHub link
	},
	{
		title: 'Scholarship Portal',
		description: 'Dynamic scholarship application system featuring a student dashboard, admin panel, and real-time tracking of application status and progress.',
		tech: ['React', 'Tailwind CSS', 'Express', 'MySQL'], // Added MySQL for database example
		image: scholarshipImg,
		liveLink: 'https://your-scholarship-app-link.com',
        githubLink: '#',
	},
	{
		title: 'Outcome-Based Education System',
		description: 'Live OBE system for 8000+ students and 510 staff, managing CIA marks and academic reports at Jamal Mohamed College.',
		tech: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
		image: obeImg,
		liveLink: 'https://www.jmc.edu/',
        githubLink: '#',
        note: 'This project is complex and used internally by the institution.' // Special Note
	},
	{
		title: 'UPVC Quotation Management',
		description: 'Quotation system for doors, windows, and louvers with customer profiles, printable quotes, reporting, and order tracking used by Champion Products Company.',
		tech: ['React', 'Tailwind CSS', 'Express', 'Node.js'],
		image: upvcImg,
		liveLink: '#',
        githubLink: '#',
	},
];

const techIcons = {
	React: <FaReact className="text-blue-400" />,
	'Node.js': <FaNodeJs className="text-green-400" />,
	MongoDB: <SiMongodb className="text-green-500" />,
	MySQL: <SiMysql className="text-blue-300" />,
	'Tailwind CSS': <SiTailwindcss className="text-cyan-300" />,
	Express: <SiExpress className="text-gray-300" />,
}


function Projects() {

	return (
		<section className="w-full py-20 bg-gray-900" id="projects">
            <div className="max-w-6xl mx-auto px-4 space-y-12">
                
                {/* Section Header */}
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-800 rounded-xl p-0 overflow-hidden shadow-2xl transition duration-500 hover:shadow-blue-500/40 transform hover:-translate-y-1 flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* Project Image - Higher Aspect Ratio */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                {/* Image Overlay for Polish */}
                                <div className='absolute inset-0 bg-black/20'></div>
                            </div>
                            
                            {/* Content */}
                            <div className='p-6 flex flex-col flex-grow'>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                
                                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                                
                                {project.note && (
                                    <p className='text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded-lg mb-4'>
                                        <span className='font-semibold'>Note:</span> {project.note}
                                    </p>
                                )}

                                {/* Tech Stack - Visually Grouped */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="flex items-center gap-1.5 text-sm font-medium bg-blue-600/20 text-blue-200 px-3 py-1 rounded-full"
                                        >
                                            {techIcons[tech]} {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons - Dual CTA */}
                                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700">
                                    
                                    {/* Live Link Button */}
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition duration-300 ${
                                            project.liveLink === '#'
                                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-70' // Disabled style
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                    >
                                        <FaExternalLinkAlt /> Live Preview
                                    </a>
                                    
                                    {/* GitHub Button */}
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 inline-flex items-center justify-center gap-2 border-2 border-blue-600 px-4 py-3 rounded-lg font-semibold transition duration-300 ${
                                            project.githubLink === '#'
                                            ? 'text-gray-400 border-gray-600 cursor-not-allowed opacity-70' // Disabled style
                                            : 'text-blue-400 hover:bg-blue-600 hover:text-white'
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