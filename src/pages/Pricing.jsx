import { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { FaWhatsapp, FaCar, FaMapMarkerAlt } from 'react-icons/fa'; // Combined and removed duplicates
import { whatsappLink } from '../data/company';
import { pricingRoutes, vehicleColumns } from '../data/pricing';

export default function Pricing() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter to let users quickly search for their destination
  const filteredRoutes = pricingRoutes.filter((routeObj) =>
    routeObj.route.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <PageHero
        title="Route Pricing"
        subtitle="Transparent, competitive pricing for all routes and vehicle types across Saudi Arabia."
        image="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Pricing Plans"
            title="Complete Route Pricing"
            subtitle="All prices are fixed and displayed in Saudi Riyal (SAR). Select your desired route and contact us to book instantly."
          />

          {/* Interactive Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaMapMarkerAlt />
              </span>
              <input
                type="text"
                placeholder="Search your route (e.g. Makkah, Madinah)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none shadow-sm transition-all text-gray-700 bg-white"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((routeObj, idx) => {
              // FIX: Define bookMsg dynamically based on the current route
              const bookMsg = `Hi, I would like to book transport for the route: ${routeObj.route}.`;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Card Header */}
                  <div className="p-6 bg-gradient-to-br from-dark-900 to-gray-800 text-white">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/10 rounded-lg text-gold mt-1 shrink-0">
                        <FaMapMarkerAlt className="text-lg text-amber-400" />
                      </div>
                      <h4 className="font-heading font-bold text-lg leading-snug">
                        {routeObj.route}
                      </h4>
                    </div>
                  </div>

                  {/* Card Pricing Content */}
                  <div className="p-6 flex-grow space-y-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Available Fleet & Rates
                    </p>

                    {vehicleColumns.map((col) => {
                      const price = routeObj[col.key];
                      // Skip rendering if route is not available for this vehicle type
                      if (price === null || price === undefined) return null;

                      return (
                        <div
                          key={col.key}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-amber-50/50 border border-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <FaCar className="text-gray-400 text-sm" />
                            <span className="text-gray-700 font-medium text-sm">
                              {col.label}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-400 font-medium mr-1">SAR</span>
                            <span className="text-base font-bold text-dark-900">{price}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Action Button */}
                  <div className="p-6 pt-0">
                    <a
                      href={whatsappLink(bookMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full justify-center text-sm"
                    >
                      <FaWhatsapp className="text-lg" /> Book Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State if Search filters everything out */}
          {filteredRoutes.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No routes found matching your search. Try looking for "Makkah" or "Airport".
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Quote?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            For custom routes, group bookings, or long-term contracts, contact us directly for
            personalized pricing.
          </p>
          <a
            href={whatsappLink('Hi, I would like a custom quote for my trip.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <FaWhatsapp className="text-lg" /> Get Custom Quote
          </a>
        </div>
      </section>
    </>
  );
}