import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md py-4">
            <div className="container-custom flex justify-between items-center">
                <Link to="/" className="flex items-center group" aria-label="Auto Collect Recovery">
                    <img
                        src="/images/auto-collect-logo.jpg"
                        alt="Auto Collect Recovery logo"
                        className="h-16 md:h-20 w-auto rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 cursor-pointer"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`font-semibold text-sm uppercase tracking-wide hover:text-brand-orange transition-colors focus:outline-none px-2 py-1 rounded ${location.pathname === link.path
                                        ? 'text-brand-orange'
                                        : 'text-slate-700'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/quote" className="btn-primary flex items-center gap-2 text-sm font-bold uppercase tracking-wider shadow-brand-yellow/50">
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden transition-colors text-brand-dark hover:text-brand-orange p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-yellow/60"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        id="mobile-menu"
                        className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-semibold ${location.pathname === link.path ? 'text-brand-orange' : 'text-slate-700'} focus:outline-none rounded px-2 py-1`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/quote" className="btn-primary text-center w-full justify-center flex">Get a Quote</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
