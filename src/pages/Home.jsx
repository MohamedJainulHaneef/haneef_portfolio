import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

function Home() {


	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
	};
	return (
		<section className="w-full min-h-screen flex items-center justify-center py-20">
			<div className="text-center max-w-3xl mx-auto space-y-6 px-4">
				{/* Title */}
				<motion.h1
					className="text-4xl md:text-6xl font-extrabold text-blue-400"
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Hi, I'm Haneef 👋
				</motion.h1>

				{/* Subheading */}
				<motion.p
					className="text-gray-300 text-lg md:text-xl leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					I'm a passionate <span className="text-blue-300 font-semibold">Full Stack Developer</span> who builds fast, accessible, and user-friendly web applications. I focus on the latest technologies like <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">MongoDB</span> to solve real-world problems with clean code and strong UI/UX.
				</motion.p>

				{/* Tech Stack Badges */}
				<motion.div
					className="flex justify-center gap-4 flex-wrap mt-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.7 }}
				>
					{['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Framer Motion'].map((tech, index) => (
						<span
							key={index}
							className="px-3 py-1 border border-blue-400 rounded-full text-gray-200 text-sm hover:bg-blue-500 hover:text-white transition"
						>
							{tech}
						</span>
					))}
				</motion.div>

				{/* Quick Bio List */}
				<motion.ul
					className="text-gray-400 text-[16px] md:text-base text-left max-w-lg mx-auto space-y-2 mt-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
				>
					<li>🔹 MCA Graduate with a focus on frontend development</li>
					<li>🔹 Experienced in building responsive UI and RESTful APIs</li>
					<li>🔹 Strong focus on real-world project scalability and maintainability</li>
				</motion.ul>

				{/* CTA Buttons */}
				<motion.div
					className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
					variants={itemVariants}
				>
					<a
						href="#contact"
						className="flex items-center justify-center gap-2 bg-blue-600 text-white w-full sm:w-52 p-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 font-semibold shadow-xl"
					>
						<FaEnvelope /> Contact Me
					</a>
					<a
						download
						className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-300 w-full sm:w-52 p-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105 font-semibold"
					>
						<FaFileDownload /> Download Resume
					</a>
				</motion.div>

				{/* Social Links */}
				<motion.div
					className="flex justify-center gap-6 mt-8 text-2xl text-gray-400"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.5 }}
				>
					<a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
						<FaLinkedin />
					</a>
					<a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
						<FaGithub />
					</a>
					<a href="mailto:jainulhaneef03@gmail.com" className="hover:text-white transition">
						<FaEnvelope />
					</a>
				</motion.div>
			</div>
		</section>
	);
}

export default Home;