import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {

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
					className="flex justify-center gap-4 mt-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.5 }}
				>
					<a
						href="#contact"
						className="bg-blue-500 text-white w-40 p-3 rounded-full hover:bg-blue-600 transition"
					>
						Contact Me
					</a>
					<a
						href="/Haneef_Resume.pdf" // Replace with your actual resume path
						download
						className="border border-blue-400 text-blue-300 w-40 p-3 rounded-full hover:bg-blue-500 hover:text-white transition"
					>
						Download Resume
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