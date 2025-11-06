import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'; // Added useful icons

function Contact() {
	return (
		// Container with padding, background, and centered content
		<section className="w-full" id="contact">
			<div className="mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
						Get In Touch
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Ready to turn an idea into reality? Whether it's a full-stack project, frontend consulting, or a collaborative venture, let's start the conversation.
					</p>
				</div>

				{/* Two-Column Layout (Info on one side, CTA/Form on the other) */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

					{/* 1. Contact Information Block (Left) */}
					<div className="md:col-span-1 space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl h-full">
                        <h3 className="text-2xl font-semibold text-white border-b border-blue-600 pb-3">My Details</h3>
                        
                        {/* Email */}
						<div className="flex items-start space-x-4">
							<FaEnvelope className="text-blue-400 text-2xl mt-1 flex-shrink-0" />
							<div>
								<h4 className="text-lg font-medium">Email Address</h4>
								<a href="mailto:jainulhaneef03@gmail.com" className="text-gray-400 hover:text-blue-300 transition break-words">
									jainulhaneef03@gmail.com
								</a>
							</div>
						</div>

                        {/* LinkedIn */}
                        <div className="flex items-start space-x-4">
							<FaLinkedin className="text-blue-400 text-2xl mt-1 flex-shrink-0" />
							<div>
								<h4 className="text-lg font-medium">LinkedIn</h4>
								<a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition">
									Connect Professionally
								</a>
							</div>
						</div>
                        
                        {/* GitHub */}
                        <div className="flex items-start space-x-4">
							<FaGithub className="text-blue-400 text-2xl mt-1 flex-shrink-0" />
							<div>
								<h4 className="text-lg font-medium">GitHub</h4>
								<a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition">
									View My Code
								</a>
							</div>
						</div>
                        
                        {/* Location (Optional, adds a human touch) */}
                        <div className="flex items-start space-x-4">
							<FaMapMarkerAlt className="text-blue-400 text-2xl mt-1 flex-shrink-0" />
							<div>
								<h4 className="text-lg font-medium">Location</h4>
								<p className="text-gray-400">Madurai, Tamil Nadu, India (Remote-friendly)</p>
							</div>
						</div>
					</div>


					{/* 2. Primary Call to Action / Form Area (Right) */}
					<div className="md:col-span-2 space-y-6 bg-gray-800 p-8 rounded-xl shadow-2xl">
                        <h3 className="text-2xl font-semibold text-white">Send Me a Message</h3>
                        <p className="text-gray-400 mb-4">
                            The best way to start is by email. I prioritize all serious inquiries and aim to reply within one business day.
                        </p>
                        
                        {/* The Enhanced Call-to-Action Link */}
                        <a
                            href="mailto:jainulhaneef03@gmail.com"
                            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] shadow-xl"
                        >
                            <FaEnvelope /> Let's Talk About Your Project
                        </a>
                        
                        {/* Professional Note */}
                        <div className="pt-6 border-t border-gray-700 mt-6">
                            <p className="text-sm text-gray-500">
                                **Note:** If you are a recruiter, please include the job title in the subject line. For project inquiries, include a brief scope and desired timeline.
                            </p>
                        </div>
                        
                        {/* Placeholder for future form implementation */}
                        <form className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                                <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                                <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
                                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition">Send Message</button>
                            </form> 
                       
					</div>

				</div>
			</div>
		</section>
	);
}

export default Contact;