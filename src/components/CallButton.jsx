import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { telLink } from '../data/company';

export default function CallButton() {
  return (
    <motion.a
      href={telLink}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gold-500 text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-gold-lg"
      aria-label="Call us"
    >
      <FaPhone className="text-xl" />
    </motion.a>
  );
}
