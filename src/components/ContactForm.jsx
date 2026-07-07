import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { whatsappLink, company } from '../data/company';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static: send the message via WhatsApp instead of a backend.
    const msg = `New Inquiry%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${msg}`, '_blank');
    setSent(true);
    setForm({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="card p-6 md:p-8 space-y-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+966 5X XXX XXXX"
            className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-dark-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-dark-700 mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          placeholder="Tell us about your trip, pickup location, date, and vehicle preference..."
          className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none"
        />
      </div>
      <button type="submit" className="btn-gold w-full justify-center">
        <FaWhatsapp className="text-lg" /> Send via WhatsApp
      </button>
      {sent && (
        <p className="text-center text-green-600 font-medium flex items-center justify-center gap-2">
          <FaPaperPlane /> Opening WhatsApp with your message...
        </p>
      )}
    </motion.form>
  );
}
