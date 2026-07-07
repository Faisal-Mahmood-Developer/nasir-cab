import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import PricingTable from '../components/PricingTable';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/company';

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Route Pricing"
        subtitle="Transparent, competitive pricing for all routes and vehicle types across Saudi Arabia."
        image="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Pricing"
            title="Complete Route Pricing Table"
            subtitle="All prices are in Saudi Riyal (SAR). Use the vehicle tabs to filter by vehicle type."
          />
          <PricingTable />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Quote?
          </h3>
          <p className="text-dark-200 mb-6 max-w-xl mx-auto">
            For custom routes, group bookings, or long-term contracts, contact us directly for
            personalized pricing.
          </p>
          <a
            href={whatsappLink('Hi, I would like a custom quote for my trip.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <FaWhatsapp className="text-lg" /> Get Custom Quote
          </a>
        </div>
      </section>
    </>
  );
}
