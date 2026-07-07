import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaTaxi,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { company, navLinks, whatsappLink, telLink } from '../data/company';

export default function Footer() {
  const services = [
    'Airport Transfers',
    'Hotel Transfers',
    'Umrah Transport',
    'Hajj Transport',
    'Ziyarat Tours',
    'VIP Transport',
  ];

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                <FaTaxi className="text-black text-xl" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-lg">Nasir Makkah</span>
                <span className="text-xs text-gold-400">Cab Service</span>
              </div>
            </Link>
            <p className="text-dark-300 text-sm leading-relaxed mb-4">
              Premium taxi service across Saudi Arabia. Safe, comfortable, and affordable
              transport for Umrah, Hajj, airport transfers, and Ziyarat tours.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-700 hover:bg-gold-500 hover:text-black flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={company.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-700 hover:bg-gold-500 hover:text-black flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={telLink}
                className="w-10 h-10 rounded-lg bg-dark-700 hover:bg-gold-500 hover:text-black flex items-center justify-center transition-all duration-300"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-gold-400">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-dark-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-gold-400">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaPhone className="text-gold-500 mt-1 shrink-0" />
                <div>
                  <a href={telLink} className="text-dark-300 hover:text-gold-400 transition-colors block">
                    {company.phoneDisplay}
                  </a>
                  <a href={`tel:${company.phoneAlt}`} className="text-dark-300 hover:text-gold-400 transition-colors block">
                    {company.phoneAltDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold-500 shrink-0" />
                <a href={`mailto:${company.email}`} className="text-dark-300 hover:text-gold-400 transition-colors break-all">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gold-500 shrink-0" />
                <span className="text-dark-300">{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved. Owned by {company.owner}.
          </p>
          <p className="text-dark-400 text-sm">
            Designed with premium care for Saudi Arabia's transport needs.
          </p>
        </div>
      </div>
    </footer>
  );
}
