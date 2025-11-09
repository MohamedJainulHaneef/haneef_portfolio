import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

function Contact() {

	const sectionContainer = {
		visible: {
			opacity: 1, y: 0,
			transition: { duration: 0.7 }
		},
		hidden: { opacity: 0, y: 30 },
	};

	const contactInfoItem = {
		visible: {
			opacity: 1, x: 0,
			transition: { duration: 0.5, ease: "easeOut" }
		},
		hidden: { opacity: 0, x: -20 },
	};

	return (
		// The main section container
		<section className="w-full min-h-screen flex items-center justify-center bg-gray-50" id="contact">
			<motion.div
				className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-12 bg-white rounded-2xl shadow-2xl border border-gray-100"
				variants={sectionContainer}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{/* Section Header */}
				<div className="text-center mb-10 md:mb-10">
					<p className="text-gray-500 text-lg  mx-auto">
						Ready to turn an idea into reality? Let's start the conversation about your next project or opportunity.
					</p>
				</div>

				{/* Two-Column Layout (Info on one side, CTA/Form on the other) */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

					{/* 1. Contact Information Block (Left - Highlighted background) */}
					<motion.div
						className="md:col-span-1 space-y-8 bg-teal-50 p-8 rounded-xl shadow-lg h-full border border-teal-200"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-semibold text-teal-700 border-b border-teal-300 pb-3">My Details</h3>

						{/* Email */}
						<motion.div className="flex items-start space-x-4" variants={contactInfoItem}>
							<FaEnvelope className="text-teal-600 text-2xl mt-0.5 w-5" />
							<div>
								<h4 className="text-md lg:text-md font-medium text-gray-800">Email Address</h4>
								<a href="mailto:jainulhaneef03@gmail.com" className="text-gray-600 hover:text-teal-500 transition wrap-break-words text-sm lg:text-base">
									jainulhaneef03@gmail.com
								</a>
							</div>
						</motion.div>

						{/* LinkedIn */}
						<motion.div className="flex items-start space-x-4" variants={contactInfoItem}>
							<FaLinkedin className="text-teal-600 text-2xl mt-0.5 w-5" />
							<div>
								<h4 className="text-md lg:text-lg font-medium text-gray-800">LinkedIn</h4>
								<a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-500 transition text-sm lg:text-base">
									Connect Professionally
								</a>
							</div>
						</motion.div>

						{/* GitHub */}
						<motion.div className="flex items-start space-x-4" variants={contactInfoItem}>
							<FaGithub className="text-teal-600 text-2xl mt-0.5 w-6" />
							<div>
								<h4 className="text-md lg:text-lg font-medium text-gray-800">GitHub</h4>
								<a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-500 transition text-sm lg:text-base">
									View My Code
								</a>
							</div>
						</motion.div>

						{/* Location */}
						<motion.div className="flex items-start space-x-4" variants={contactInfoItem}>
							<FaMapMarkerAlt className="text-teal-600 text-2xl mt-0.5 w-7" />
							<div>
								<h4 className="text-md lg:text-lg font-medium text-gray-800">Location</h4>
								<p className="text-gray-600  text-sm lg:text-base">Tiruchirappalli, Tamil Nadu, India (Remote-friendly)</p>
							</div>
						</motion.div>
					</motion.div>


					{/* 2. Primary Call to Action / Form Area (Right) */}
					<motion.div
						className="md:col-span-2 space-y-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-semibold text-gray-900">Send Me a Message</h3>
						<p className="text-gray-600">
							The best way to start is by email. I prioritize all serious inquiries and aim to reply within one business day.
						</p>

						{/* The Enhanced Call-to-Action Link */}
						<motion.a
							href="mailto:jainulhaneef03@gmail.com"
							className="inline-flex items-center gap-3 bg-teal-600 text-white px-4 lg:px-6 py-3 rounded-lg font-bold text-sm lg:text-md hover:bg-teal-700 transition duration-300 transform hover:scale-[1.02] shadow-xl"
							whileHover={{ scale: 0.95 }}
							whileTap={{ scale: 0.95 }}
						>
							<FaPaperPlane /> Let's Talk About Your Project
						</motion.a>

						{/* Professional Note */}
						<div className="pt-6 mt-3 border-t border-gray-200">
							<p className="text-sm text-gray-500">
								Note : If you are a recruiter, please include the job title in the subject line. For project inquiries, include a brief scope and desired timeline.
							</p>
						</div>

						{/* Placeholder for future form implementation (styled to match light theme) */}
						<form className="space-y-4">
							<input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition placeholder:text-gray-500 text-gray-800" />
							<input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition placeholder:text-gray-500 text-gray-800" />
							<textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition placeholder:text-gray-500 text-gray-800"></textarea>
							<button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700 transition shadow-md">Send Message</button>
						</form>

					</motion.div>

				</div>
			</motion.div>
		</section>
	);
}

export default Contact;