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
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 shadow-lg transition-all border-b border-gray-100">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 lg:px-10 2xl:px-16">
                <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-teal-600 2xl:text-3xl">
                    Haneef<span className="text-gray-900 ml-1 lg:ml-2">Portfolio</span>
                </h1>
                <nav className="hidden md:flex space-x-8">
                    {menus.map((menu) => (
                        <ScrollLink
                            key={menu.name}
                            to={menu.path}
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            activeClass="text-teal-600 after:w-full"
                            className="relative cursor-pointer font-semibold text-lg text-gray-700 hover:text-teal-600 transition-all duration-200
                                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-teal-600 after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-full 2xl:text-xl"
                        >
                            {menu.name}
                        </ScrollLink>
                    ))}
                </nav>

                {/* Mobile Menu Button - Dark text, Teal ring on hover */}
                <button
                    onClick={() => setMenuVisible(!menuVisible)}
                    className="md:hidden p-2 rounded-full hover:ring-2 hover:ring-teal-500 transition text-gray-800"
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
                    }`
				}
            >
                {/* Mobile Menu: Dark background for contrast, light text */}
                <div className="bg-gray-800/95 backdrop-blur-sm border-t border-gray-700 shadow-inner px-4 py-4 space-y-3 rounded-b-lg">
                    {menus.map((menu) => (
                        <ScrollLink
                            key={menu.name} to={menu.path}
                            spy={true}  smooth={true}
                            offset={offset} duration={500}
                            onClick={() => setMenuVisible(false)}
                            className="block text-md font-medium text-gray-100 px-3 py-2 rounded-lg hover:bg-gray-700/50 hover:text-white transition-colors duration-200"
                            activeClass="text-teal-400 font-semibold bg-gray-700/70"
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