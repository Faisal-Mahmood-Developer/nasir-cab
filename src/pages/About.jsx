import { motion } from 'framer-motion';
import {
  FaUserTie,
  FaCar,
  FaClock,
  FaTags,
  FaShieldAlt,
  FaCrown,
  FaWhatsapp,
} from 'react-icons/fa';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { company, whatsappLink } from '../data/company';

const whyChooseUs = [
  { icon: FaUserTie, title: 'Professional Drivers', desc: 'Experienced, licensed, and courteous drivers who know every route.' },
  { icon: FaCar, title: 'Licensed Vehicles', desc: 'Well-maintained, registered, and insured fleet for your peace of mind.' },
  { icon: FaClock, title: '24/7 Availability', desc: 'Round-the-clock service, every day of the year, whenever you need us.' },
  { icon: FaTags, title: 'Affordable Prices', desc: 'Transparent, competitive pricing with no hidden charges.' },
  { icon: FaShieldAlt, title: 'Safe Journey', desc: 'Your safety is our top priority on every single trip.' },
  { icon: FaCrown, title: 'Premium Service', desc: 'First-class customer experience from booking to drop-off.' },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Premium taxi service dedicated to safe, comfortable, and affordable transport across Saudi Arabia."
        image="https://images.pexels.com/photos/5965644/pexels-photo-5965644.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-3 block">
              Our Story
            </span>
            <h2 className="section-heading text-left">Company Introduction</h2>
            <p className="text-dark-400 leading-relaxed mb-4">
              {company.name} is a premium taxi service based in Makkah, Saudi Arabia, owned and
              operated by {company.owner}. We specialize in providing safe, comfortable, and
              affordable transport for pilgrims, families, and business travelers across the Kingdom.
            </p>
            <p className="text-dark-400 leading-relaxed mb-4">
              With years of experience in the transport industry, we understand the unique needs of
              travelers visiting the holy cities of Makkah and Madinah. Our services include airport
              transfers, hotel transfers, Umrah and Hajj transport, Ziyarat tours, and VIP transport.
            </p>
            <p className="text-dark-400 leading-relaxed">
              We pride ourselves on our professional drivers, well-maintained vehicles, and
              commitment to customer satisfaction. Whether you are a solo traveler or a large group,
              we have the perfect vehicle for your journey.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/5717417/pexels-photo-5717417.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Makkah city"
              className="rounded-2xl shadow-card-hover w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold-500 text-black p-6 rounded-2xl shadow-gold-lg hidden md:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm font-medium">Years of Service</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Owner Introduction */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src="/og-image.jpg"
              alt={company.owner}
              className="rounded-2xl shadow-card-hover w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-3 block">
              Meet the Owner
            </span>
            <h2 className="section-heading text-left">Owner Introduction</h2>
            <p className="text-dark-400 leading-relaxed mb-4">
              {company.owner} is the founder and owner of {company.name}. With a passion for
              hospitality and a deep understanding of the needs of pilgrims and travelers in Saudi
              Arabia, he built this company on the principles of safety, reliability, and customer
              satisfaction.
            </p>
            <p className="text-dark-400 leading-relaxed mb-6">
              Under his leadership, the company has grown from a small operation to a trusted name
              in premium taxi services, serving thousands of satisfied customers from around the
              world.
            </p>
            <a
              href={whatsappLink(`Hello ${company.owner}, I would like to speak with you.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <FaWhatsapp className="text-lg" /> Contact Owner
            </a>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-8 border-t-4 border-gold-500"
          >
            <h3 className="font-heading text-2xl font-bold text-dark-900 mb-4">Our Mission</h3>
            <p className="text-dark-400 leading-relaxed">
              To provide safe, comfortable, and affordable transport services to pilgrims and
              travelers across Saudi Arabia, ensuring every journey is a pleasant and memorable
              experience. We strive to exceed customer expectations through professionalism,
              reliability, and genuine care.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-8 border-t-4 border-dark-900"
          >
            <h3 className="font-heading text-2xl font-bold text-dark-900 mb-4">Our Vision</h3>
            <p className="text-dark-400 leading-relaxed">
              To be the most trusted and preferred taxi service in Saudi Arabia, recognized for our
              premium quality, customer-first approach, and contribution to making every pilgrim's
              and traveler's journey seamless and spiritually fulfilling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Nasir Makkah Cab Advantage"
            subtitle="Six reasons why thousands of travelers choose us for their transport needs."
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
                  className="card p-6"
                >
                  <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mb-4">
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
    </>
  );
}
