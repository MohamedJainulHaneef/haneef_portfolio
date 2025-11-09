import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TopBar from './layout/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

    const [menuVisible, setMenuVisible] = useState(false);
    const sectionTransition = { duration: 0.6, ease: "easeOut" };

    return (

        <div className="bg-gray-50 min-h-screen text-gray-900">

            <TopBar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />

            {/* Mobile Menu Backdrop */}
            {menuVisible && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                    onClick={() => setMenuVisible(false)}
                />
            )}

            <main className='max-w-7xl mx-auto'>

                {/* HOME SECTION */}
                <section id="home" className="p-6">
                    <Home />
                </section>
                <div className="mx-auto my-12 border-t border-gray-300 max-w-xs lg:max-w-4xl" />

                {/* ABOUT SECTION */}
                <motion.h2
                    className="text-2xl sm:text-4xl md:text-5xl my-19 font-extrabold text-center text-gray-900"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={sectionTransition}
                    viewport={{ once: true }}
                >
                    <span className="text-teal-600">About Me</span> & My Journey
                </motion.h2>
                <section id="about" className="p-6">
                    <About />
                </section>
                <div className="mx-auto my-24 border-t border-gray-300 max-w-xs lg:max-w-4xl" />

                {/* SKILLS SECTION */}
                <motion.h2
                    className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={sectionTransition}
                    viewport={{ once: true }}
                >
                    My <span className="text-teal-600">Skillset</span> 
                </motion.h2>
                <section id="skills" className="p-6">
                    <Skills />
                </section>
                <div className="mx-auto my-12 border-t border-gray-300 max-w-xs lg:max-w-4xl" />

                {/* PROJECTS SECTION */}
                <section id="projects" className="p-6">
                    <Projects />
                </section>
                <div className="mx-auto my-12 border-t border-gray-300 max-w-xs lg:max-w-4xl" />

                {/* CONTACT SECTION */}
                <section id="contact" className="p-6 mb-10">
                    <Contact />
                </section>

            </main>

            {/* Optional: Add a simple Footer here */}
            <footer className="text-center py-4 text-sm text-gray-500 border-t border-gray-200">
                © {new Date().getFullYear()} Haneef Jainul. All rights reserved.
            </footer>
        </div>
    );
}

export default App;