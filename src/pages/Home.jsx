import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaCodeBranch, FaRegLightbulb } from 'react-icons/fa';

function Home() {

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.9, y: 10 },
		visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1,
			}
		}
	};

	const techStack = ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Framer Motion', 'TypeScript'];

	return (

		<section className="w-full min-h-screen flex items-center justify-center">
			<motion.div
				className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-12 bg-white rounded-xl shadow-2xl border border-teal-100"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
			>
				<header className="text-center md:text-left border-b pb-5 mb-6 border-gray-200">
					<motion.h1
						className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						Hi, I'm <span className="text-teal-600">Jainul Haneef</span>
					</motion.h1>

					<motion.p
						className="text-lg uppercase lg:text-2xl text-teal-600 font-semibold mt-2 xl:mt-3"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1, duration: 0.5 }}
					>
						Full Stack Developer
					</motion.p>
				</header>

				<div className="grid md:grid-cols-3 gap-8 md:gap-8 lg:my-6">
					<div className="md:col-span-2 space-y-6">
						<motion.p
							className="text-gray-800 text-base text-center sm:text-lg leading-relaxed lg:text-justify"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.6 }}
						>
							<FaRegLightbulb className="inline text-teal-500 mr-2 text-xl align-sub" />
							Full Stack Developer passionate about building fast, reliable, and intuitive applications.
							I craft seamless digital experiences with clean, maintainable code and a focus on performance.
							Every project reflects precision, creativity, and a drive to push technology forward.
						</motion.p>
						<motion.ul
							className="text-gray-700 text-sm sm:text-base space-y-3 list-none pt-2"
							variants={containerVariants}
							initial="hidden"
							animate="visible"
						>
							<motion.li variants={itemVariants} className='flex items-start'>
								<FaCodeBranch className='mr-3 mt-1 text-teal-500' /> Architecting robust RESTful APIs with Node.js and Express.
							</motion.li>
							<motion.li variants={itemVariants} className='flex items-start'>
								<FaCodeBranch className='mr-3 mt-1 text-teal-500' /> Expertise in component-based UI development using React and TypeScript.
							</motion.li>
							<motion.li variants={itemVariants} className='flex items-start'>
								<FaCodeBranch className='mr-3 mt-1 text-teal-500' /> MCA Graduate focusing on modern software engineering practices.
							</motion.li>
						</motion.ul>
					</div>
					<motion.div
						className="space-y-4 bg-gray-100 p-5 rounded-xl border border-teal-300 flex flex-col justify-center"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						<h3 className="text-sm font-bold uppercase text-center lg:text-lg tracking-wider text-teal-600">Tech Stack</h3>
						<div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
							{techStack.map((tech, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-white border border-teal-400 rounded-full text-gray-800 text-xs lg:text-[15px] font-semibold shadow-sm"
								>
									{tech}
								</span>
							))}
						</div>
					</motion.div>
				</div>

				<footer className="pt-6 mt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4"> 
					<motion.div
						className="flex flex-col sm:flex-row justify-start gap-6 w-full md:w-auto" 
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.a
							href="#contact"
							className="flex items-center justify-center gap-2 bg-teal-600 text-white w-full sm:w-48 p-3 rounded-xl hover:bg-teal-700 transition duration-300 transform hover:scale-[1.02] font-semibold shadow-md text-sm sm:text-base"
							variants={itemVariants}
						>
							<FaEnvelope /> Contact Me
						</motion.a>
						<motion.a
							href="/path/to/YOUR_RESUME_FILE.pdf" 
							download
							className="flex items-center justify-center gap-2 border border-teal-500 text-teal-600 w-full sm:w-48 p-3 rounded-xl hover:bg-teal-600 hover:text-white transition duration-300 transform hover:scale-[1.02] font-semibold text-sm sm:text-base"
							variants={itemVariants}
						>
							<FaFileDownload /> View Resume
						</motion.a>
					</motion.div>
					<motion.div
						className="flex justify-center gap-4 text-xl sm:text-2xl text-gray-500 mt-4 md:mt-0" 
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.9, duration: 0.5 }}
					>
						<a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition transform hover:scale-110">
							<FaLinkedin />
						</a>
						<a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition transform hover:scale-110">
							<FaGithub />
						</a>
						<a href="mailto:jainulhaneef03@gmail.com" className="hover:text-teal-600 transition transform hover:scale-110">
							<FaEnvelope />
						</a>
					</motion.div>
				</footer>
			</motion.div> 
		</section>
	)
}

export default Home;