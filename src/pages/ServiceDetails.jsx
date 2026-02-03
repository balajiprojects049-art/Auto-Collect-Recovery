import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import servicesData from '../data/services.json';

export default function ServiceDetails() {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="pt-12 pb-24 min-h-screen bg-slate-50">
            <div className="container-custom">
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange mb-8 font-medium transition-colors">
                    <ArrowLeft size={20} /> Back to Services
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="grid lg:grid-cols-2">
                        {/* Image Side */}
                        <div className="relative h-64 lg:h-auto overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                                    Premium Service
                                </div>
                                <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {service.longDescription}
                                </p>

                                <div className="mb-10">
                                    <h3 className="text-xl font-bold mb-4 text-brand-dark border-b border-slate-100 pb-2">Key Features</h3>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-700">
                                                <CheckCircle className="text-brand-orange shrink-0 mt-0.5" size={20} />
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/quote"
                                        state={{ service: service.title }}
                                        className="btn-primary text-center flex items-center justify-center gap-2"
                                    >
                                        Book This Service
                                    </Link>
                                    <a
                                        href="tel:+447384228118"
                                        className="btn-secondary text-center flex items-center justify-center gap-2"
                                    >
                                        <Phone size={18} /> Emergency Call
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
