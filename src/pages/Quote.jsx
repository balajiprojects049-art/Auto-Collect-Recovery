import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import SEO from '../components/SEO';

export default function Quote() {
    // ... existing hooks
    const location = useLocation();
    const [isEmergency, setIsEmergency] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [selectedService, setSelectedService] = useState(location.state?.service || "");

    const handleSubmit = (e) => {
        // ... (keep existing handleSubmit)
        e.preventDefault();

        const formData = new FormData(e.target);

        const message = `NEW QUOTE REQUEST
--------------------------------
Emergency : ${isEmergency ? 'YES' : 'No'}
Name      : ${formData.get('name')}
Phone     : ${formData.get('phone')}
Vehicle   : ${formData.get('vehicleType')}
Car Model : ${formData.get('carModel')}
Year      : ${formData.get('carYear')}
Pickup    : ${formData.get('pickup')}
Drop-off  : ${formData.get('dropoff')}
Service   : ${formData.get('service')}
${formData.get('passengers') ? `Passengers: ${formData.get('passengers')}` : ''}
--------------------------------`;

        const whatsappUrl = `https://wa.me/447384228118?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setSubmitted(true);
        window.scrollTo(0, 0);
    };

    if (submitted) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center pt-20 pb-20">
                <SEO title="Quote Submitted" />
                <motion.div
                    // ... (rest of submitted view)
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg mx-4 border border-slate-100"
                >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-green-500 w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-brand-dark">Quote Request Received!</h2>
                    <p className="text-slate-600 mb-8">
                        Thank you for your request. One of our team members will review your details and contact you within 20 to 30 minutes with a comprehensive quote.
                    </p>
                    <a href="/" className="btn-primary block w-full text-center">Back to Home</a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-12 pb-24 bg-slate-50 min-h-screen">
            <SEO
                title="Get a Free Quote"
                description="Request a free, no-obligation quote for vehicle recovery and transportation. Transparent pricing and fast response times."
            />
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark">Request a <span className="text-brand-orange">Quote</span></h1>
                    <p className="text-xl text-slate-600">
                        Transparent pricing with no hidden fees. Fill out the form below for an instant estimate.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
                >
                    <div className="mb-8 flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors duration-300" style={{ backgroundColor: isEmergency ? '#fee2e2' : '#f8fafc' }}>
                        <div className="flex items-center gap-3">
                            <AlertTriangle className={`w-6 h-6 ${isEmergency ? 'text-red-500' : 'text-slate-400'}`} />
                            <div>
                                <p className={`font-bold ${isEmergency ? 'text-red-700' : 'text-brand-dark'}`}>Is this an emergency?</p>
                                <p className="text-xs text-slate-500">Priority response for breakdowns</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={isEmergency} onChange={(e) => setIsEmergency(e.target.checked)} className="sr-only peer" />
                            <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <input type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="Enter your name" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="Enter phone number" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Vehicle Type</label>
                            <select name="vehicleType" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white" required>
                                <option value="">Select vehicle type...</option>
                                <option value="car">Car (Sedan/Hatchback)</option>
                                <option value="suv">SUV / 4x4</option>
                                <option value="van">Van / Light Commercial</option>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Car Name & Model</label>
                                <input type="text" name="carModel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="e.g. Ford Focus" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Year of Car</label>
                                <input type="number" name="carYear" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="e.g. 2018" min="1900" max="2099" required />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Pickup Location</label>
                                <input type="text" name="pickup" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="Postcode or City" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Drop-off Location</label>
                                <input type="text" name="dropoff" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="Postcode or City" required />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                                <select
                                    name="service"
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-white"
                                    required
                                >
                                    <option value="">Select service...</option>
                                    <option value="Car Breakdown Recovery">Car Breakdown Recovery</option>
                                    <option value="Car Transportation">Car Transportation</option>
                                    <option value="Auction Pull Out">Auction Pull Out</option>
                                    <option value="Auction Collection & Delivery">Auction Collection & Delivery</option>
                                    <option value="Jump Start Services">Jump Start Services</option>
                                </select>
                            </div>

                            {selectedService === "Car Breakdown Recovery" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="pt-2"
                                >
                                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Number of Passengers</label>
                                    <input
                                        type="text"
                                        name="passengers"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all bg-brand-yellow/5"
                                        placeholder="Are there any passengers? (e.g. 2 adults)"
                                        required={selectedService === "Car Breakdown Recovery"}
                                    />
                                    <p className="text-[10px] text-slate-400 mt-1 italic">* This helps us send the right recovery vehicle for everyone's safety.</p>
                                </motion.div>
                            )}
                        </div>

                        <button type="submit" className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 ${isEmergency ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse' : 'btn-primary'}`}>
                            {isEmergency ? 'REQUEST EMERGENCY ASSISTANCE' : 'Submit Quote'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
