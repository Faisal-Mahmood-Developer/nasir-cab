import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="A visual journey through our vehicles, the holy cities, and the travelers we serve."
        image="https://images.pexels.com/photos/5965644/pexels-photo-5965644.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments & Memories"
            subtitle="Browse our collection of vehicles, holy cities, hotels, and happy travelers. Click any image to view full size."
          />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
