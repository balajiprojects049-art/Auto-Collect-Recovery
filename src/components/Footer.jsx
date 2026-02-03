import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-slate-300 pt-16 pb-8">
            <div className="container-custom grid md:grid-cols-4 gap-12 mb-12">
                <div>
                    <h3 className="text-white text-2xl font-bold mb-4">Auto Collect <span className="text-brand-yellow">Recovery</span></h3>
                    <p className="text-sm leading-relaxed mb-6">
                        Professional vehicle recovery and transportation services across the UK. Available 24/7 for emergencies.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300"><Facebook size={20} /></a>
                        <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300"><Instagram size={20} /></a>
                        <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300"><Twitter size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-yellow">Quick Links</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li><Link to="/" className="hover:text-brand-yellow transition-colors hover:pl-2 duration-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-brand-yellow transition-colors hover:pl-2 duration-300">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-brand-yellow transition-colors hover:pl-2 duration-300">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-brand-yellow transition-colors hover:pl-2 duration-300">Contact</Link></li>
                        <li><Link to="/quote" className="hover:text-brand-yellow transition-colors hover:pl-2 duration-300">Get a Quote</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-yellow">Our Services</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li className="hover:text-brand-yellow transition-colors cursor-pointer">Car Breakdown Recovery</li>
                        <li className="hover:text-brand-yellow transition-colors cursor-pointer">Car Transportation</li>
                        <li className="hover:text-brand-yellow transition-colors cursor-pointer">Auction Collection</li>
                        <li className="hover:text-brand-yellow transition-colors cursor-pointer">Jump Start Services</li>
                        <li className="hover:text-brand-yellow transition-colors cursor-pointer">Vehicle Storage</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-yellow">Contact Us</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li className="flex gap-3 items-start">
                            <MapPin className="text-brand-yellow shrink-0 mt-1" size={18} />
                            <span>338 Oakley Road, Luton, LU4 9QD</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="text-brand-yellow shrink-0" size={18} />
                            <a href="tel:+447384228118" className="hover:text-white transition-colors">+44 7384 228118</a>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail className="text-brand-yellow shrink-0" size={18} />
                            <a href="mailto:info.euaccars@gmail.com" className="hover:text-white transition-colors">info.euaccars@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                <p>&copy; {new Date().getFullYear()} Auto Collect Recovery Services. A brand of EUAC Ltd.</p>
                <div className="flex gap-4">
                    <Link to="#" className="hover:text-slate-300">Privacy Policy</Link>
                    <Link to="#" className="hover:text-slate-300">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
}
