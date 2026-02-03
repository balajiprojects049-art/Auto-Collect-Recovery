import { motion } from 'framer-motion';
import { CarFront, Truck, Gavel, Container, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
    CarFront,
    Truck,
    Gavel,
    Container,
    Zap
};

export default function ServiceCard({ service, index }) {
    const Icon = iconMap[service.icon] || CarFront;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
        >
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="text-brand-dark w-8 h-8 group-hover:text-brand-orange transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark group-hover:text-brand-orange transition-colors">{service.title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{service.description}</p>
            <Link
                to={`/services/${service.id}`}
                className="text-brand-dark font-bold flex items-center gap-2 group-hover:text-brand-orange transition-all text-sm uppercase tracking-widest mt-auto group-hover:translate-x-2"
            >
                View Details <span>&rarr;</span>
            </Link>
        </motion.div>
    );
}
