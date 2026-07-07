import { motion } from 'framer-motion';
import { FaUsers, FaSuitcase, FaSnowflake, FaStar, FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/company';

export default function VehicleCard({ vehicle, index = 0 }) {
  const bookMsg = `Hi, I would like to book the ${vehicle.name}. Please provide availability and pricing.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="card group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 right-3 bg-gold-500 text-black text-xs font-bold px-2 py-1 rounded-full">
          {vehicle.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-dark-900 mb-3">{vehicle.name}</h3>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <FaUsers className="text-gold-500 shrink-0" />
            <span>{vehicle.passengers} Persons</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <FaSuitcase className="text-gold-500 shrink-0" />
            <span>{vehicle.luggage}</span>
          </div>
          {vehicle.ac && (
            <div className="flex items-center gap-2 text-sm text-dark-500">
              <FaSnowflake className="text-gold-500 shrink-0" />
              <span>Air Conditioned</span>
            </div>
          )}
          {vehicle.luxury && (
            <div className="flex items-center gap-2 text-sm text-dark-500">
              <FaStar className="text-gold-500 shrink-0" />
              <span>Luxury Interior</span>
            </div>
          )}
        </div>

        {/* Book button */}
        <a
          href={whatsappLink(bookMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full justify-center text-sm"
        >
          <FaWhatsapp className="text-lg" /> Book Now
        </a>
      </div>
    </motion.div>
  );
}
