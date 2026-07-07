import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/company';

export default function RouteCard({ route, index = 0 }) {
  const bookMsg = `Hi, I would like to book a taxi from ${route.from} to ${route.to}. Please confirm availability and price.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="card group relative overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={route.image}
          alt={`${route.from} to ${route.to}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-2 font-heading text-lg font-bold">
            <span>{route.from}</span>
            <FaArrowRight className="text-gold-400 text-sm" />
            <span>{route.to}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-sm text-dark-400 mb-3">{route.description}</p>
        <a
          href={whatsappLink(bookMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold-500 font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          <FaWhatsapp /> Book This Route
        </a>
      </div>
    </motion.div>
  );
}
