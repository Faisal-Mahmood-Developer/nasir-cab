// Centralized company information used across the site.
export const company = {
  name: 'Nasir Makkah Cab',
  owner: 'Muhammad Nasir',
  tagline: 'Safe • Comfortable • Affordable',
  email: 'Na0589878@gmail.com',
  phone: '+966548764790',
  phoneAlt: '+966544687476',
  phoneDisplay: '+966 54 876 4790',
  phoneAltDisplay: '+966 54 468 7476',
  whatsapp: '966548764790',
  whatsappAlt: '966544687476',
  facebookPage: 'Nasir Nasir',
  facebookId: 'Nasir Kamboh Nasir',
  facebookUrl: 'https://www.facebook.com/',
  location: 'Makkah, Saudi Arabia',
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Services', path: '/services' },
  { name: 'Ziyarat', path: '/ziyarat' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

// Helper to build a WhatsApp deep link with a prefilled message.
export const whatsappLink = (message = 'Hello, I would like to book a taxi.') =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${company.phone}`;
