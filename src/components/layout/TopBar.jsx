import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function TopBar() {

	const [menuVisible, setMenuVisible] = useState(false);

	const menus =
		[
			{ name: 'Home', path: '/home' },
			{ name: 'About', path: '/about' },
			{ name: 'Skills', path: '/skills' },
			{ name: 'Projects', path: '/projects' },
			{ name: 'Contact', path: '/contact' },
		]

	return (
		<header className="sticky top-0 z-50 backdrop-blur-md">
			<div className="flex items-center justify-between">
				<h1 className="text-xl md:text-2xl font-bold tracking-tight text-indigo-400">
					Haneef<span className="text-white ml-1 lg:ml-2">Portfolio</span>
				</h1>
				<nav className="hidden md:flex space-x-8">
					{menus.map((menu) => (
						<NavLink
							key={menu.name}
							to={menu.path}
							className={
								({ isActive }) => `relative font-semibold text-lg transition duration-200 after:absolute after:left-0 after:bottom-0 
								after:h-[2px] after:bg-indigo-500 after:transition-all after:duration-300 after:ease-in-out 
								${isActive ? 'text-indigo-400 after:w-full' : 'text-gray-300 hover:text-white after:w-0 hover:after:w-full'}`
							}
						>
							{menu.name}
						</NavLink>
					))}
				</nav>
				{/* Mobile Menu Button */}
				<button
					onClick={() => setMenuVisible(!menuVisible)}
					className="md:hidden p-1.5 rounded-md hover:ring-2 text-white ring-indigo-500 transition"
				>
					<Menu size={24} />
				</button>
			</div>
			{/* Mobile Dropdown Menu */}
			<div
				className={
					`md:hidden overflow-hidden mt-3 transition-all duration-300 ease-in-out 
					${menuVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`
				}
			>
				<div className="bg-slate-800 px-4 py-4 space-y-2 rounded-b-md">
					{menus.map((menu) => (
						<NavLink
							key={menu.name}
							to={menu.path}
							onClick={() => setMenuVisible(false)}
							className={
								({ isActive }) => `block text-base font-semibold px-3 py-2 rounded-md transition 
								${isActive ? 'bg-indigo-500 text-white' : 'text-gray-300 hover:bg-slate-700 hover:text-white'}`
							}
						>
							{menu.name}
						</NavLink>
					))}
				</div>
			</div>
		</header>
	);
}

export default TopBar;
