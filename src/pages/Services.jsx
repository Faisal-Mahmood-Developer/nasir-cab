import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive transport solutions for pilgrims, families, and business travelers across Saudi Arabia."
        image="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Offer"
            title="Premium Transport Services"
            subtitle="From airport pickups to Ziyarat tours, we provide reliable and comfortable transport for every occasion."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Service highlights */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Our Services Stand Out"
            title="Built on Trust and Excellence"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Flight Tracking', desc: 'We monitor your flight to ensure on-time pickup, even with delays.' },
              { title: 'Meet & Greet', desc: 'Our drivers meet you at the arrivals hall with a name sign.' },
              { title: 'Knowledgeable Guides', desc: 'Drivers who know the history and significance of every Ziyarat site.' },
              { title: 'Flexible Booking', desc: 'Book via WhatsApp or phone, anytime, with instant confirmation.' },
            ].map((item, i) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-heading text-lg font-bold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
