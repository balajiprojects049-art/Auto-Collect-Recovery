import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award } from 'lucide-react';

import { Helmet } from 'react-helmet-async';

export default function About() {
    return (

        <div className="bg-slate-50 min-h-screen">
            <Helmet>
                <title>About Us | Auto Collect Recovery Services</title>
                <meta name="description" content="Learn about Auto Collect Recovery Services. 5+ years of experience in vehicle recovery and transportation across the UK. Fast, safe, and reliable." />
            </Helmet>
            {/* Page Hero */}
            <div className="bg-brand-dark py-32 relative overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src="/images/about-hero.png" alt="About Hero" className="w-full h-full object-cover object-[center_35%] opacity-50" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About <span className="text-brand-yellow">Auto Collect</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Auto Collect Recovery Services, a proud brand of EUAC Ltd, has been delivering top-notch vehicle recovery and transportation solutions for over 5 years.
                    </p>
                </div>
            </div>

            <div className="container-custom py-24">

                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                            Our mission is simple: to provide the fastest, safest, and most reliable vehicle recovery service in the UK. We understand that a breakdown can be stressful, which is why we prioritize rapid response and professional care.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                            Whether it's a roadside emergency, auction collection, or vehicle transportation, we treat every vehicle with the utmost respect and ensure it reaches its destination safely.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center shadow-sm">
                                <h3 className="text-4xl font-bold text-brand-orange mb-2">5+</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Years Experience</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center shadow-sm">
                                <h3 className="text-4xl font-bold text-brand-orange mb-2">10k+</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Recoveries</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img src="/images/hero-truck.png" className="rounded-2xl shadow-2xl" alt="About Us" />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <Shield className="text-green-600" size={24} />
                                </div>
                                <p className="font-bold text-brand-dark">Fully Licensed</p>
                            </div>
                            <p className="text-xs text-slate-500">We are fully insured and licensed for all types of vehicle recovery.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Clock, title: "Reliability", desc: "We turn up when we say we will." },
                            { icon: Shield, title: "Safety First", desc: "Rigorous safety protocols for every job." },
                            { icon: Users, title: "Customer Focus", desc: "Your peace of mind is our priority." },
                            { icon: Award, title: "Excellence", desc: "Top-tier standards in every recovery." }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform"
                            >
                                <div className="bg-brand-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <val.icon className="text-brand-orange" size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-3">{val.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
