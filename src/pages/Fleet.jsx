import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';

export default function Fleet() {
  return (
    <>
      <PageHero
        title="Our Vehicle Fleet"
        subtitle="A diverse range of premium vehicles to suit every group size and travel need."
        image="https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Premium Fleet"
            title="Choose Your Perfect Ride"
            subtitle="From luxury sedans to spacious coasters, every vehicle is well-maintained, air-conditioned, and driven by professional chauffeurs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Capacity overview */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Capacity Guide"
            title="Vehicle Capacity Overview"
            subtitle="Quick reference to help you choose the right vehicle for your group size and luggage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Hyundai Tucson', seats: '4 Persons', luggage: '3 Large, 3 Small' },
              { name: 'Sedan Camry / Sonata', seats: '4 Persons', luggage: '3 Luggage' },
              { name: 'Hyundai H-1 / Staria', seats: '7 Persons', luggage: '7 Large, 7 Small' },
              { name: 'GMC Yukon-XL / Suburban', seats: '7 Persons', luggage: '5 Large, 5 Small' },
              { name: 'Toyota Hiace', seats: '9 Persons', luggage: '8 Large, 8 Small' },
              { name: 'Toyota Coaster', seats: '18 Persons', luggage: '14 Large, 10 Small' },
            ].map((v, i) => (
              <div key={v.name} className="card p-6">
                <h3 className="font-heading text-lg font-bold text-dark-900 mb-3">{v.name}</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-dark-500">
                    <span className="font-semibold text-dark-700">Seating:</span> {v.seats}
                  </p>
                  <p className="text-dark-500">
                    <span className="font-semibold text-dark-700">Luggage:</span> {v.luggage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
