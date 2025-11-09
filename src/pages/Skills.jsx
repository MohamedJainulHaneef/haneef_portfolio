import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGithub, FaAws, FaDatabase, FaServer, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiExpress, SiRedux, SiTypescript, SiNextdotjs } from 'react-icons/si';

const categorizedSkills = [
    {
        category: 'Frontend & UI/UX',
        icon: <FaCode className="text-teal-600" />,
        skills: [
            { name: 'React', icon: <FaReact className="text-cyan-500" />, level: 90 },
            { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800" />, level: 80 },
            { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 85 },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 75 },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" />, level: 95 },
            { name: 'Redux', icon: <SiRedux className="text-purple-600" />, level: 70 },
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 95 },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 80 },
        ]
    },
    {
        category: 'Backend & Databases',
        icon: <FaServer className="text-teal-600" />,
        skills: [
            { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 85 },
            { name: 'Express.js', icon: <SiExpress className="text-gray-600" />, level: 80 },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 70 },
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" />, level: 60 },
            { name: 'MySQL', icon: <SiMysql className="text-blue-700" />, level: 75 },
        ]
    },
    {
        category: 'Tools & Cloud',
        icon: <FaAws className="text-teal-600" />,
        skills: [
            { name: 'GitHub', icon: <FaGithub className="text-gray-800" />, level: 90 },
            { name: 'Git', icon: <FaGithub className="text-orange-500" />, level: 85 },
            { name: 'RESTful APIs', icon: <FaDatabase className="text-red-500" />, level: 85 },
            { name: 'AWS Basics', icon: <FaAws className="text-orange-400" />, level: 50 },
        ]
    },
];

const sectionContainer = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const categoryTitle = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const skillGridContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0.2, staggerChildren: 0.08 },
    },
};

const skillBubble = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 10 } },
};

const SkillBar = ({ level }) => (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden relative group">
        <motion.div
            className="bg-teal-500 h-full rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
        />
        <span className="absolute right-0 top-0 -mt-5 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">{level}%</span>
    </div>
);

function Skills() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center py-10 lg:py-20 bg-gray-50" id="skills">
            <motion.div className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-12 bg-white rounded-2xl shadow-2xl border border-teal-100" variants={sectionContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>

                {/* Heading */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                        My <span className="text-teal-600">Skillset</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                        A focused overview of the technologies I utilize to build modern, scalable, and responsive web applications.
                    </p>
                </div>

                {/* Categorized Skills */}
                <div className="space-y-12">
                    {categorizedSkills.map(category => (
                        <div key={category.category}>
                            <motion.h3 className="flex items-center gap-4 text-2xl lg:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-teal-100"
                                variants={categoryTitle} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                                <span className="text-3xl">{category.icon}</span>
                                {category.category}
                            </motion.h3>

                            <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                                variants={skillGridContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                                {category.skills.map(skill => (
                                    <motion.div key={skill.name} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-teal-100 group"
                                        variants={skillBubble} whileHover={{ y: -5, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}>
                                        <div className="text-4xl mb-2">{skill.icon}</div>
                                        <p className="text-base font-semibold text-gray-800 text-center">{skill.name}</p>
                                        <div className="w-full mt-3"><SkillBar level={skill.level} /></div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Closing CTA */}
                <div className="mt-16 pt-6 border-t border-gray-100 text-center">
                    <p className="text-gray-500 italic text-base lg:text-lg">
                        Continuously learning and exploring new technologies to deliver cutting-edge solutions.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;
