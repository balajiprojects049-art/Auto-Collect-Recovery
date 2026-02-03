import { motion } from 'framer-motion';
import servicesData from '../data/services.json';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Hero */}
            <div className="bg-brand-dark py-32 relative overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src="/images/services-hero.png" alt="Services Hero" className="w-full h-full object-cover object-[center_35%] opacity-50" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <div className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Complete <span className="text-brand-orange">Recovery Solutions</span></h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        From emergency breakdown recovery to scheduled vehicle transportation, we have the fleet and expertise to handle it all.
                    </p>
                </div>
            </div>

            <div className="container-custom py-24">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
