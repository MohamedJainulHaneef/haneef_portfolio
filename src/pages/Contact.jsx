import React from 'react';

function Contact() {
	return (
		<div className="text-center space-y-6 max-w-xl mx-auto">
			<h2 className="text-3xl font-bold text-blue-400">Contact</h2>
			<p className="text-gray-300 text-lg">
				Have a project in mind, a collaboration idea, or just want to say hello? I'm always open to discussing new opportunities and building meaningful connections.
			</p>
			<p className="text-gray-400 text-base">
				Whether it's frontend development, full-stack consulting, or freelance work — feel free to reach out. Let’s bring your ideas to life!
			</p>
			<a
				href="mailto:yourmail@example.com"
				className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition duration-300"
			>
				Send an Email
			</a>
			<p className="text-sm text-gray-500 mt-2">
				I usually respond within 24 hours.
			</p>
		</div>
	);
}

export default Contact;
