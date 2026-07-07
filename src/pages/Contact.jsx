import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { company, whatsappLink, telLink } from '../data/company';

const contactItems = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: company.phoneDisplay,
    sub: company.phoneAltDisplay,
    href: telLink,
    href2: `tel:${company.phoneAlt}`,
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: company.phoneDisplay,
    sub: 'Chat with us instantly',
    href: whatsappLink(),
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: company.email,
    sub: 'We reply within 24 hours',
    href: `mailto:${company.email}`,
  },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    value: company.facebookPage,
    sub: company.facebookId,
    href: company.facebookUrl,
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us via WhatsApp, phone, email, or the form below. We are available 24/7."
        image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Contact info cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact Information"
            subtitle="Reach out to us through any of these channels. We are here to help."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="card p-6 text-center block"
                >
                  <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-2xl text-gold-500" />
                  </div>
                  <h3 className="font-semibold text-dark-900 mb-1">{item.label}</h3>
                  <p className="text-dark-500 text-sm break-all">{item.value}</p>
                  {item.sub && <p className="text-dark-400 text-xs mt-1">{item.sub}</p>}
                </motion.a>
              );
            })}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-dark-900 mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-dark-900 mb-6">
                Find Us on the Map
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-card h-full min-h-[400px] bg-dark-100">
                <iframe
                  title="Makkah Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.252!2d39.8262!3d21.4225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74c28e417%3A0x8c7e1e1e1e1e1e1e!2sMakkah!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
