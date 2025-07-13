import React from 'react';
import { motion } from 'framer-motion';
import Img from '../assets/Haneef.jpg';

function About() {

	return (
		<div className="flex flex-col gap-12">
			{/* Heading */}
			<h2 className="text-3xl font-bold text-blue-400">About Me</h2>

			<div className='flex flex-col lg:flex-row gap-12 xl:gap-6 items-center'>
				{/* Image */}
				<motion.div
					className="w-full lg:w-[30%] flex justify-center"
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<img
						src={Img}
						alt="Haneef"
						className="w-64 xl:w-80 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
					/>
				</motion.div>
				
				{/* Text */}
				<motion.div
					className="w-full lg:w-[70%] space-y-6 xl:pr-16 text-gray-300 text-lg xl:text-xl leading-relaxed xl:leading-10 text-justify"
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<p>
						I'm a <span className="text-blue-400 font-semibold">Frontend-focused Full Stack Developer</span>
						passionate about building clean, responsive, and high-performance web applications. I work with technologies
						like <strong className="text-white">React</strong> and <strong className="text-white">Node.js</strong>
						to create user-friendly digital experiences.
					</p>

					<p>
						My journey is shaped by <span className="text-blue-400 font-semibold">real-world projects</span>
						that demand a balance of aesthetic design and solid backend logic. I enjoy turning ideas into scalable,
						interactive solutions.
					</p>

					<p>
						Whether it's designing sleek interfaces or building dynamic APIs, I strive to create web apps that not
						only work well but <span className="text-blue-300 italic">feel right</span> to use.
					</p>
				</motion.div>
			</div>
		</div>
	)
}

export default About;
