import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/company';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  const bookMsg = `Hi, I am interested in your ${service.title} service. Please provide more details.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="card group p-6 flex flex-col"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-gold-500">
        <Icon className="text-2xl text-gold-500 transition-colors duration-300 group-hover:text-black" />
      </div>

      <h3 className="font-heading text-xl font-bold text-dark-900 mb-2">{service.title}</h3>
      <p className="text-dark-400 text-sm leading-relaxed flex-1">{service.description}</p>

      <a
        href={whatsappLink(bookMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gold-500 font-semibold text-sm mt-4 hover:gap-3 transition-all duration-200"
      >
        <FaWhatsapp /> Inquire Now
      </a>
    </motion.div>
  );
}
