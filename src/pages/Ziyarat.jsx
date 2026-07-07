import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { ziyaratTours } from '../data/ziyarat';
import { whatsappLink } from '../data/company';

export default function Ziyarat() {
  return (
    <>
      <PageHero
        title="Ziyarat Tours"
        subtitle="Spiritually enriching tours to the sacred and historical sites of Islam."
        image="https://images.pexels.com/photos/7679706/pexels-photo-7679706.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Sacred Journeys"
            title="Explore the Holy Sites"
            subtitle="Join us on guided tours of the most significant sites in and around Makkah, Madinah, Taif, and Badr."
          />

          <div className="space-y-16">
            {ziyaratTours.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="rounded-2xl shadow-card-hover w-full h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gold-500 text-black px-6 py-3 rounded-xl shadow-gold-lg">
                    <p className="font-heading font-bold text-lg">{tour.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark-900 mb-4">
                    {tour.title}
                  </h3>
                  <p className="text-dark-400 leading-relaxed mb-6">{tour.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="font-semibold text-dark-700 mb-3">Tour Highlights:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {tour.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-dark-500">
                          <FaCheckCircle className="text-gold-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappLink(`Hi, I would like to book the ${tour.title} tour.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    <FaWhatsapp className="text-lg" /> Book via WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
