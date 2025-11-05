import React, { useState } from 'react';
import TopBar from '../layout/TopBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Main() {

	const [menuVisible, setMenuVisible] = useState(false);

	return (
		<div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
			<TopBar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
			{menuVisible && (
				<div
					className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
					onClick={() => setMenuVisible(false)}
				/>
			)}
			<main className="min-h-screen p-6 md:p-10 2xl:p-16 space-y-32">
				<section id="home"><Home /></section>
				<section id="about"><About /></section>
				<section id="skills"><Skills /></section>
				<section id="projects"><Projects /></section>
				<section id="contact"><Contact /></section>
			</main>
		</div>
	)
}

export default Main;