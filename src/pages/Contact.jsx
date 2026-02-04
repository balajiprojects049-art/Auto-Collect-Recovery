import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

import SEO from '../components/SEO';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We'll be in touch shortly.");
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO
                title="Contact Us"
                description="Contact Auto Collect Recovery 24/7. Emergency breakdown hotline, email support, and online inquiry form. Located in Luton, UK."
                image="/images/contact-hero.png"
            />
            {/* Page Hero */}
            <div className="bg-brand-dark py-32 relative overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src="/images/contact-hero.png" alt="Contact Hero" className="w-full h-full object-cover object-[center_35%] opacity-50" />

                </div>

                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact <span className="text-brand-yellow">Auto Collect</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Our team is available round-the-clock for emergency roadside support. Reach us via phone, email, or form for immediate assistance.
                    </p>
                </div>
            </div>

            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Quick Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-brand-dark mb-8">Quick Contact</h2>
                        <div className="space-y-6">
                            <motion.a
                                href="tel:+447384228118"
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-yellow/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-brand-yellow/10 text-brand-dark rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-yellow transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="font-bold mb-1 text-slate-900">Emergency Hotline</div>
                                    <div className="text-2xl font-black text-brand-dark">+44 7384 228118</div>
                                    <div className="text-sm text-slate-500">Available 24/7/365</div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="mailto:info.euaccars@gmail.com"
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-orange/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="font-bold mb-1 text-slate-900">Email</div>
                                    <div className="text-lg font-bold text-brand-orange break-all">info.euaccars@gmail.com</div>
                                    <div className="text-sm text-slate-500">For general inquiries</div>
                                </div>
                            </motion.a>

                            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-brand-dark/5 text-brand-dark rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="font-bold mb-1 text-slate-900">Headquarters</div>
                                    <div className="text-lg font-bold text-brand-dark">Luton, United Kingdom</div>
                                    <div className="text-sm text-slate-500">338 Oakley Road, LU4 9QD</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-brand-dark/5 text-brand-dark rounded-xl flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <div className="font-bold mb-1 text-slate-900">Working Hours</div>
                                    <div className="text-lg font-bold text-brand-dark">24 Hours / 7 Days</div>
                                    <div className="text-sm text-slate-500">365 days a year</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Send Message Form */}
                    <div>
                        <h2 className="text-3xl font-bold text-brand-dark mb-8">Send Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-yellow focus:outline-none transition-colors" placeholder="Enter your name" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-yellow focus:outline-none transition-colors" placeholder="+44 7XXX XXXXXX" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                                <select className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-yellow focus:outline-none transition-colors bg-white">
                                    <option>Car Breakdown Recovery</option>
                                    <option>Car Transportation</option>
                                    <option>Auction Collection</option>
                                    <option>Jump Start</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-yellow focus:outline-none transition-colors resize-none" placeholder="Tell us about your requirement..." required></textarea>
                            </div>
                            <button type="submit" className="w-full btn-primary py-4 text-lg font-bold flex items-center justify-center gap-2">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* 'Why Contact Us' Section - Styled like RSA 'Always Ready' */}
            <div className="mt-8 bg-white py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                            <img src="/images/dispatch-center.png" alt="Dispatcher" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <p className="text-white font-bold text-lg">"We Are Ready 24/7"</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Always Ready to <span className="text-brand-orange">Assist</span></h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our state-of-the-art dispatch process operates around the clock, every day of the year, so you’re never left stranded. With fast deployment and certified operators, help is just a call or click away.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-yellow/20 text-brand-dark rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-dark text-lg">Instant Response</h3>
                                        <p className="text-sm text-slate-500">Rapid assistance with fast arrival times in all covered areas.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-yellow/20 text-brand-dark rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-dark text-lg">Nationwide Coverage</h3>
                                        <p className="text-sm text-slate-500">We operate across the entire UK network for your convenience.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-yellow/20 text-brand-dark rounded-xl flex items-center justify-center shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-dark text-lg">Continuous Availability</h3>
                                        <p className="text-sm text-slate-500">Day or night, our team is always on standby to provide support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="py-20 container-custom">
                <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">Our Location</h2>
                <div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-100">
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39365.68537542157!2d-0.4571932145749206!3d51.89107297127164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876483b3206969d%3A0xe97931f67fec443e!2sLuton%20LU4%209QD%2C%20UK!5e0!3m2!1sen!2sus!4v1709497000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-slate-500 text-sm">📍 Auto Collect Recovery Services - 338 Oakley Road, Luton, LU4 9QD</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
