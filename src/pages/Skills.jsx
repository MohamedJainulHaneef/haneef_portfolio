import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

const skills = [
	{ name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl lg:text-6xl" /> },
	{ name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-5xl lg:text-6xl" /> },
	{ name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-5xl lg:text-6xl" /> },
	{ name: 'SQL', icon: <SiMysql className="text-blue-800 text-5xl lg:text-6xl" /> },
	{ name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl lg:text-6xl" /> },
	{ name: 'React', icon: <FaReact className="text-cyan-400 text-5xl lg:text-6xl" /> },
	{ name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-5xl lg:text-6xl" /> },
	{ name: 'GitHub', icon: <FaGithub className="text-gray-300 text-5xl lg:text-6xl" /> },
]

const fadeIn = {
	hidden: { opacity: 0, y: 40 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.6,
			ease: 'easeOut',
		},
	}),
}

function Skills() {
	return (
		<section id="skills" className="w-full py-16 lg:py-24 text-white">
			<div className="max-w-6xl mx-auto px-6">
				{/* Heading */}
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold text-blue-400 sm:text-4xl mb-8">Tech Stack</h2>
					<p className="text-gray-300 text-lg mx-auto">
						Tools and technologies I work with to build scalable and high-quality web applications.
					</p>
				</div>
				{/* Skill Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.name}
							className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-blue-500/40 transition duration-300 flex flex-col items-center justify-center group"
							variants={fadeIn}
							initial="hidden"
							whileInView="visible"
							custom={index}
							viewport={{ once: true }}
						>
							<div className="mb-4 transform group-hover:scale-110 transition duration-300">
								{skill.icon}
							</div>
							<h3 className="text-white text-lg font-medium">{skill.name}</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills;