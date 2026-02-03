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
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container-custom flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold font-sans tracking-tighter text-brand-dark flex flex-col group">
                    <span className="group-hover:text-brand-orange transition-colors">Auto Collect</span>
                    <span className="text-brand-yellow text-xs font-bold tracking-[0.2em] -mt-1 uppercase">Recovery Services</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-semibold text-sm uppercase tracking-wide hover:text-brand-orange transition-colors ${location.pathname === link.path ? 'text-brand-orange' : 'text-slate-700'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/quote" className="btn-primary flex items-center gap-2 text-sm font-bold uppercase tracking-wider shadow-brand-yellow/50">
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-brand-dark hover:text-brand-orange transition-colors" onClick={() => setIsOpen(!isOpen)}>
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
                        className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-semibold ${location.pathname === link.path ? 'text-brand-orange' : 'text-slate-700'}`}
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
