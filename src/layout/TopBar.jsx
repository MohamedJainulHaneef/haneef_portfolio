import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

function useResponsiveOffset() {
	const [offset, setOffset] = useState(-100);
	useEffect(() => {
		const calculateOffset = () => {
			const newOffset = window.innerWidth < 768 ? -300 : -70;
			setOffset(newOffset);
		};
		calculateOffset();
		window.addEventListener('resize', calculateOffset);
		return () => window.removeEventListener('resize', calculateOffset);
	}, []);
	return offset;
}

function TopBar({ menuVisible, setMenuVisible }) {
	const offset = useResponsiveOffset();

	const menus = [
		{ name: 'Home', path: 'home' },
		{ name: 'About', path: 'about' },
		{ name: 'Skills', path: 'skills' },
		{ name: 'Projects', path: 'projects' },
		{ name: 'Contact', path: 'contact' },
	];

	return (
		<header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-br from-slate-900/70 to-slate-800/70 shadow-md transition-all">
			<div className="flex items-center justify-between px-4 py-3.5 lg:px-10 2xl:px-16">
				<h1 className="text-xl md:text-2xl font-bold tracking-tight text-blue-400 2xl:text-3xl">
					Haneef<span className="text-white ml-1 lg:ml-2">Portfolio</span>
				</h1>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8">
					{menus.map((menu) => (
						<ScrollLink
							key={menu.name}
							to={menu.path}
							spy={true}
							smooth={true}
							offset={offset}
							duration={500}
							activeClass="text-blue-400 after:w-full"
							className="relative cursor-pointer font-semibold text-lg text-gray-300 hover:text-white transition-all duration-200
								after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full 2xl:text-2xl"
						>
							{menu.name}
						</ScrollLink>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setMenuVisible(!menuVisible)}
					className="md:hidden p-2 rounded-full hover:ring-2 hover:ring-blue-500 transition text-white"
					aria-label="Toggle navigation"
					aria-expanded={menuVisible}
				>
					{menuVisible ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			<div
				className={`md:hidden transition-all duration-500 ease-in-out transform overflow-hidden
				${menuVisible
						? 'max-h-screen opacity-100 translate-y-0'
						: 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
					}`}
			>
				<div className="bg-white/5 backdrop-blur-xl border-t border-white/10 shadow-inner px-4 py-4 space-y-3 rounded-b-lg">
					{menus.map((menu) => (
						<ScrollLink
							key={menu.name}
							to={menu.path}
							spy={true}
							smooth={true}
							offset={offset}
							duration={500}
							onClick={() => setMenuVisible(false)}
							className="block text-md font-medium text-gray-100 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors duration-200"
							activeClass="text-blue-400 font-semibold"
						>
							{menu.name}
						</ScrollLink>
					))}
				</div>
			</div>
		</header>
	);
}

export default TopBar;
