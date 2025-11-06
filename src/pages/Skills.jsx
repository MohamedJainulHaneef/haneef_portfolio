import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGithub, FaAws, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiExpress, SiRedux } from 'react-icons/si';

// Define the skills structure with categories and a "level" for perceived strength
const categorizedSkills = [
	{
		category: 'Frontend & UI/UX',
		skills: [
			{ name: 'React', icon: <FaReact className="text-cyan-400" />, level: 90 },
			{ name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 85 },
			{ name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, level: 95 },
			{ name: 'Redux', icon: <SiRedux className="text-purple-500" />, level: 75 },
			{ name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: 95 },
			{ name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: 80 },
		]
	},
	{
		category: 'Backend & Databases',
		skills: [
			{ name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 85 },
			{ name: 'Express.js', icon: <SiExpress className="text-gray-300" />, level: 80 },
			{ name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 70 },
			{ name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" />, level: 60 },
			{ name: 'MySQL', icon: <SiMysql className="text-blue-800" />, level: 75 },
		]
	},
	{
		category: 'Tools & DevOps',
		skills: [
			{ name: 'GitHub', icon: <FaGithub className="text-white" />, level: 90 },
			{ name: 'Git', icon: <FaGithub className="text-orange-500" />, level: 85 },
			{ name: 'RESTful APIs', icon: <FaDatabase className="text-red-400" />, level: 85 },
			{ name: 'Cloud (AWS Basics)', icon: <FaAws className="text-orange-400" />, level: 50 }, // Example of a lower skill
		]
	},
];

// Animation definitions
const categoryContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger categories slightly
        },
    },
};

const skillItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const SkillBar = ({ level }) => (
    <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
            className="bg-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ maxWidth: '100%' }} // Safety net
        />
    </div>
);


function Skills() {
	return (
		<section id="skills" className="w-full py-20 bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto px-4">
                
				{/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                        Core Competencies
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A focused overview of the technologies I utilize to build modern, scalable, and responsive web applications.
                    </p>
                </div>
                
				{/* Categorized Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                    variants={categoryContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {categorizedSkills.map((categoryData, catIndex) => (
                        <motion.div 
                            key={categoryData.category}
                            className="space-y-6 bg-gray-800 p-6 rounded-xl shadow-2xl border-t-4 border-blue-600"
                            variants={skillItem}
                        >
                            <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-3 mb-4">
                                {categoryData.category}
                            </h3>
                            
                            {/* Individual Skills with Progress Bars */}
                            <div className="space-y-6">
                                {categoryData.skills.map((skill, skillIndex) => (
                                    <div key={skill.name} className='flex flex-col'>
                                        {/* Skill Name and Percentage */}
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-3 text-lg font-medium text-gray-300">
                                                <span className="text-2xl">{skill.icon}</span>
                                                {skill.name}
                                            </div>
                                            <span className="text-blue-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <SkillBar level={skill.level} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* Closing CTA */}
                <div className='mt-16 text-center'>
                    <p className="text-gray-400 text-md">
                        Need a custom stack? I'm a fast learner—let's discuss your specific technology requirements.
                    </p>
                </div>
			</div>
		</section>
	)
}

export default Skills;