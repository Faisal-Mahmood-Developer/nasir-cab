import { motion } from 'framer-motion';

// Reusable section heading with eyebrow, title, and subtitle.
// Animates into view on scroll.
export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      {eyebrow && (
        <span className="inline-block text-gold-500 font-semibold tracking-widest uppercase text-sm mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-dark-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-dark-200' : 'text-dark-400'}`}>
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
    </motion.div>
  );
}
