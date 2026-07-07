import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Reviews() {
  return (
    <>
      <PageHero
        title="Customer Reviews"
        subtitle="Real experiences from travelers who chose Nasir Makkah Cab for their journeys."
        image="https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            subtitle="We are proud to have served thousands of satisfied customers from around the world."
          />

          {/* Rating summary */}
          <div className="flex flex-col items-center justify-center gap-4 mb-12 bg-gold-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-3xl text-gold-500">★</span>
              ))}
            </div>
            <p className="text-3xl font-bold text-dark-900">5.0 Rating</p>
            <p className="text-dark-400">Based on reviews from satisfied customers worldwide</p>
          </div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
