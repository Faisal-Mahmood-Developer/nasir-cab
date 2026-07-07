import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt,
  FaClock,
  FaUserTie,
  FaCar,
  FaTags,
  FaHeadset,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import VehicleCard from '../components/VehicleCard';
import ServiceCard from '../components/ServiceCard';
import RouteCard from '../components/RouteCard';
import TestimonialCard from '../components/TestimonialCard';
import { vehicles } from '../data/vehicles';
import { services } from '../data/services';
import { popularRoutes } from '../data/routes';
import { testimonials } from '../data/testimonials';
import { galleryImages } from '../data/gallery';
import { whatsappLink, telLink, company } from '../data/company';

const whyChooseUs = [
  { icon: FaUserTie, title: 'Professional Drivers', desc: 'Experienced, licensed, and courteous drivers.' },
  { icon: FaCar, title: 'Licensed Vehicles', desc: 'Well-maintained, registered, and insured fleet.' },
  { icon: FaClock, title: '24/7 Availability', desc: 'Round-the-clock service, every day of the year.' },
  { icon: FaTags, title: 'Affordable Prices', desc: 'Transparent, competitive pricing with no hidden fees.' },
  { icon: FaShieldAlt, title: 'Safe Journey', desc: 'Your safety is our top priority on every trip.' },
  { icon: FaHeadset, title: 'Premium Service', desc: 'First-class customer experience from booking to drop-off.' },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Excellence in Every Journey"
            subtitle="We deliver premium transport services with a commitment to safety, comfort, and reliability."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="card p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-2xl text-gold-500" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-dark-400 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Transport Solutions"
            subtitle="From airport transfers to Ziyarat tours, we cover all your travel needs in Saudi Arabia."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline-gold">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Fleet"
            title="Premium Vehicles for Every Need"
            subtitle="From sedans to coasters, choose from our diverse fleet of well-maintained vehicles."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.slice(0, 6).map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/fleet" className="btn-outline-gold">
              View Full Fleet <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Popular Routes"
            title="Trusted Routes Across the Kingdom"
            subtitle="We serve the most popular routes between holy cities, airports, and tourist destinations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, i) => (
              <RouteCard key={route.id} route={route} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent & Competitive Rates"
            subtitle="Clear pricing for every route and vehicle type. No hidden charges."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { label: 'Makkah Ziyarat', price: '150' },
              { label: 'Airport to Makkah', price: '250' },
              { label: 'Makkah to Madinah', price: '350' },
              { label: 'Madinah Ziyarat', price: '150' },
              { label: 'Taif Tour', price: '400' },
              { label: 'Badr Tour', price: '400' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-dark-800 rounded-xl p-4 text-center border border-dark-700 hover:border-gold-500 transition-colors"
              >
                <p className="text-gold-400 text-2xl font-bold">{item.price}</p>
                <p className="text-dark-200 text-xs mt-1">SAR</p>
                <p className="text-white text-sm mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/pricing" className="btn-gold">
              View Full Pricing <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            subtitle="Real reviews from satisfied customers who traveled with us across Saudi Arabia."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.slice(0, 4).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-outline-gold">
              Read All Reviews <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Gallery"
            title="Glimpses of Our Service"
            subtitle="A visual showcase of our vehicles, holy cities, and happy travelers."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryImages.slice(0, 6).map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-outline-gold">
              View Full Gallery <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/5717417/pexels-photo-5717417.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Book Your <span className="text-gradient-gold">Journey?</span>
            </h2>
            <p className="text-dark-200 text-lg mb-8 max-w-2xl mx-auto">
              Contact us now via WhatsApp or phone. Our team is available 24/7 to serve you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <FaWhatsapp className="text-xl" /> WhatsApp Us
              </a>
              <a href={telLink} className="btn-outline-gold">
                <FaPhone /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Map Placeholder */}
      <section className="bg-white">
        <div className="container-custom py-12">
          <SectionHeading
            eyebrow="Find Us"
            title="Our Location"
            subtitle="Based in Makkah, serving all of Saudi Arabia."
          />
          <div className="rounded-2xl overflow-hidden shadow-card h-96 bg-dark-100 flex items-center justify-center">
            <iframe
              title="Makkah Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.252!2d39.8262!3d21.4225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74c28e417%3A0x8c7e1e1e1e1e1e1e!2sMakkah!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
