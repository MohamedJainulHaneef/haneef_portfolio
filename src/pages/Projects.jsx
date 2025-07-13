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
		tech: ['React', 'Node.js', 'MongoDB'],
		image: attendanceImg,
		link: 'https://your-attendance-app-link.com',
	},
	{
		title: 'Scholarship Portal',
		description: 'Dynamic scholarship application system featuring a student dashboard, admin panel, and real-time tracking of application status and progress.',
		tech: ['React', 'Tailwind CSS', 'Express'],
		image: scholarshipImg,
		link: 'https://your-scholarship-app-link.com',
	},
	{
		title: 'Outcome-Based Education System',
		description: 'Live OBE system for 8000+ students and 510 staff, managing CIA marks and academic reports at Jamal Mohamed College.',
		tech: ['React', 'Tailwind CSS', 'Express'],
		image: obeImg,
		link: 'https://www.jmc.edu/',
	},
	{
		title: 'UPVC Quotation Management',
		description: 'Quotation system for doors, windows, and louvers with customer profiles, printable quotes, reporting, and order tracking used by Champion Products Company.',
		tech: ['React', 'Tailwind CSS', 'Express'],
		image: upvcImg,
		link: '#',
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
		<div className="space-y-10">
			<h2 className="text-3xl font-bold text-blue-400">Projects</h2>
			<div className="grid lg:grid-cols-2 gap-8">
				{projects.map((project, i) => (
					<motion.div
						key={i}
						className="bg-slate-800 rounded-lg lg:rounded-xl p-4 shadow-md hover:shadow-blue-500/40 transition flex flex-col overflow-hidden"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1, duration: 0.5 }}
						viewport={{ once: true }}
					>
						{/* Project Image */}
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover rounded-lg lg:rounded-xl mb-4"
						/>

						{/* Title & Description */}
						<h3 className="text-lg xl:text-xl font-semibold text-white mb-2 flex items-center gap-2">
							{project.title}
						</h3>
						<p className="text-gray-300 mb-4">{project.description}</p>

						{/* Tech Stack with Icons */}
						<div className="flex flex-wrap gap-2 mb-4 justify-between lg:justify-start">
							{project.tech.map((tech, j) => (
								<span
									key={j}
									className="flex items-center gap-1.5 text-xs xl:text-sm font-medium bg-blue-500/10 text-blue-100 px-3 py-1 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition"
								>
									{techIcons[tech]} {tech}
								</span>
							))}
						</div>

						{/* View Project Button with Icon */}
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-auto inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2.5 xl:py-3 rounded-lg lg:rounded-xl justify-center hover:bg-blue-600 transition duration-300"
						>
							<FaExternalLinkAlt />
							<span className='lg:text-md'>View Project</span>
						</a>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Projects;
