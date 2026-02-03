import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Clock, ShieldCheck, Star, MapPin } from 'lucide-react';
import servicesData from '../data/services.json';
import ServiceCard from '../components/ServiceCard';

import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Helmet>
                <title>Auto Collect Recovery Services | 24/7 Vehicle Recovery UK</title>
                <meta name="description" content="Fast, reliable & professional vehicle recovery across the UK. 24/7 emergency breakdown service, auction collection, and vehicle transportation." />
                <meta name="keywords" content="vehicle recovery, breakdown service, car transport, auction collection, jump start, UK recovery" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-brand-dark overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615900119312-2acd3a71f3ad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/80 to-brand-dark"></div>
                </div>

                <div className="container-custom relative z-10 pt-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1 bg-brand-yellow/20 text-brand-yellow rounded-full text-sm font-bold mb-6 border border-brand-yellow/20 backdrop-blur-sm">
                                24/7 NATIONWIDE RECOVERY
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                                Fast, Reliable <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">Vehicle Recovery</span>
                            </h1>
                            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                                Professional breakdown recovery and transportation services across the UK. We get you back on the road, anytime, anywhere.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:+447384228118" className="btn-primary text-center flex items-center justify-center gap-2">
                                    <Phone size={20} /> Call Now
                                </a>
                                <Link to="/quote" className="btn-secondary text-center">
                                    Get a Free Quote
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center gap-8 text-slate-400 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <Clock className="text-brand-yellow" size={18} /> <span>Avg. 45 min response</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="text-brand-yellow" size={18} /> <span>Fully Insured</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            {/* Illustration / Image placeholder */}
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
                                <div className="bg-gradient-to-tr from-slate-800 to-slate-900 aspect-[4/3] flex items-center justify-center relative">
                                    {/* Using a placeholder image for now, later user can replace */}
                                    <img src="/images/hero-truck.png" alt="Recovery Truck" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:bg-white/20 transition-colors">
                                            <div className="bg-green-500 rounded-full p-3 animate-pulse">
                                                <Phone size={24} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">Emergency Line</p>
                                                <p className="text-white font-bold text-2xl tracking-tight">+44 7384 228118</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements behind */}
                            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-yellow/30 rounded-2xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Our Premium Services</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">We offer a comprehensive range of vehicle recovery and transportation solutions tailored to your needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.slice(0, 3).map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-block text-brand-dark font-bold border-b-2 border-brand-yellow hover:text-brand-orange hover:border-brand-orange transition-colors pb-1 text-lg">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    src="/images/jump-start.png" className="rounded-2xl shadow-lg mt-8 border border-white" alt="Recovery"
                                />
                                <motion.img
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    src="/images/transporter.png" className="rounded-2xl shadow-lg border border-white" alt="Transport"
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-dark">Why Choose <br /><span className="text-brand-orange">Auto Collect</span>?</h2>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                With over 5 years of industry experience, we have built a reputation for reliability, speed, and professionalism. We treat every vehicle as if it were our own, ensuring a stress-free experience.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: '24/7 Availability', desc: 'Round-the-clock emergency support, 365 days a year.' },
                                    { title: 'Fast Response Time', desc: 'We prioritize emergencies to get you safe quickly.' },
                                    { title: 'Nationwide Coverage', desc: 'Operating across the entire UK network.' },
                                    { title: 'Professional Team', desc: 'Fully trained and insured recovery specialists.' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="bg-brand-yellow p-3 rounded-full h-fit shadow-md shrink-0">
                                            <ShieldCheck className="text-brand-dark w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 text-brand-dark">{item.title}</h4>
                                            <p className="text-slate-500">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Fleet Section */}
            <section className="py-24 bg-brand-dark overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-brand-yellow/20 text-brand-yellow rounded-full text-sm font-bold mb-6 border border-brand-yellow/20">
                            MODERN EQUIPMENT
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Modern <span className="text-brand-orange">Fleet</span></h2>
                        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                            We invest in the latest recovery technology to ensure your vehicle is handled with the utmost care. From rapid response vans to heavy-duty lifters.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Flatbed Transporters", img: "/images/fleet-flatbed.png", desc: "Perfect for luxury cars and severe damage recovery with zero-contact loading." },
                            { title: "Heavy Recovery Units", img: "/images/fleet-heavy.png", desc: "Capable of moving buses, trucks, and large commercial vehicles effortlessly." },
                            { title: "Rapid Response Vans", img: "/images/fleet-van.png", desc: "Equipped with diagnostic tools and batteries for instant roadside repairs." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-slate-900 border border-slate-700/50 rounded-2xl z-0"></div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-dark">How It <span className="text-brand-orange">Works</span></h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">Getting help is simple. Here is our 3-step process to get you safe.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10 border-t-2 border-dashed border-slate-300"></div>

                        {[
                            { step: "01", title: "Contact Us", desc: "Call our 24/7 emergency line or request a quote online.", icon: Phone },
                            { step: "02", title: "We Dispatch", desc: "We locate our nearest response unit and send them to you.", icon: MapPin },
                            { step: "03", title: "You're Safe", desc: "We repair your vehicle or transport it to your destination.", icon: ShieldCheck }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center relative group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-24 h-24 mx-auto bg-brand-dark rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white relative z-10 group-hover:scale-110 transition-transform">
                                    <item.icon className="text-brand-yellow w-10 h-10" />
                                    <div className="absolute -top-2 -right-2 bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="inline-block px-4 py-1 bg-brand-yellow/20 text-brand-yellow rounded-full text-sm font-bold mb-6">
                                COMMAND QUESTIONS
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-dark">Frequently Asked <span className="text-brand-orange">Questions</span></h2>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                Have questions? We have answers. If you can't find what you're looking for, give our team a call.
                            </p>
                            <a href="tel:+447384228118" className="btn-primary inline-flex items-center gap-2">
                                <Phone size={18} /> Ask a Question
                            </a>
                        </div>

                        <div className="space-y-4">
                            {[
                                { q: "How quickly can you reach me?", a: "Our average response time is 45 minutes, depending on traffic and your location. We prioritize dangerous roadside situations." },
                                { q: "Do you operate 24/7?", a: "Yes, we operate 24 hours a day, 7 days a week, 365 days a year including all public holidays." },
                                { q: "How much does recovery cost?", a: "Prices vary based on distance and vehicle type. Contact us for a free, no-obligation quote instantly." },
                                { q: "Can you transport my car to any garage?", a: "Yes, we can transport your vehicle to any destination of your choice across the UK, be it a garage, home, or workplace." },
                                { q: "Are you fully insured?", a: "Absolutely. We hold comprehensive motor trade and goods in transit insurance to ensure your vehicle is fully protected." }
                            ].map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border border-slate-200 rounded-xl p-6 hover:border-brand-orange/50 transition-colors bg-slate-50 hover:bg-white shadow-sm hover:shadow-md cursor-pointer"
                                >
                                    <h3 className="font-bold text-lg text-brand-dark mb-2 flex items-center justify-between">
                                        {faq.q}
                                        {/* <ChevronDown size={20} className="text-slate-400" /> */}
                                    </h3>
                                    <p className="text-slate-600 text-sm">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Emergency Banner */}
            < section className="py-20 bg-brand-dark relative overflow-hidden" >
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stuck on the side of the road?</h2>
                    <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">Don't panic. Our emergency team is ready to deploy immediately to your location.</p>
                    <a href="tel:+447384228118" className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-5 rounded-full font-bold text-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/50 hover:scale-105 active:scale-95 animate-pulse">
                        <Phone className="animate-wiggle" /> 07384 228118
                    </a>
                </div>

                {/* Abstract shapes */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute -left-20 -top-20 w-96 h-96 border-[20px] border-white/20 rounded-full"></div>
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 border-[20px] border-brand-yellow/20 rounded-full"></div>
                </div>
            </section >

            {/* Testimonials */}
            < section className="py-24 bg-slate-50" >
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">What Our Customers Say</h2>
                        <div className="flex justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-yellow text-brand-yellow" size={24} />)}
                        </div>
                        <p className="text-slate-500">Rated 5/5 by our verified customers</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "James Wilson", text: "Absolutely brilliant service. Arrived within 30 minutes and got my car to the garage safely. Highly recommended!", loc: "Luton" },
                            { name: "Sarah Jenkins", text: "Professional and friendly. They transported my classic car with great care. Will definitely use again.", loc: "London" },
                            { name: "Mike Thompson", text: "Saved me at 2am on the M1. Fair price and very reassuring service during a stressful breakdown.", loc: "Milton Keynes" }
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 italic relative"
                            >
                                <div className="text-6xl text-brand-yellow/20 absolute top-4 right-6 font-serif">"</div>
                                <div className="flex gap-1 mb-4 text-brand-yellow">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-600 mb-6 relative z-10">"{t.text}"</p>
                                <div>
                                    <p className="font-bold text-brand-dark">{t.name}</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">{t.loc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
}
