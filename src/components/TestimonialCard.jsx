import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="card p-6 flex flex-col h-full"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} className="text-gold-500" />
        ))}
      </div>

      {/* Review */}
      <p className="text-dark-500 leading-relaxed flex-1 italic">"{testimonial.review}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-dark-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-200"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-dark-900">{testimonial.name}</p>
          <p className="text-sm text-dark-400">{testimonial.country}</p>
        </div>
      </div>
    </motion.div>
  );
}
