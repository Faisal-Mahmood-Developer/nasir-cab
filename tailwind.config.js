/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbea',
          100: '#fff3c0',
          200: '#ffe680',
          300: '#ffd633',
          400: '#ffc800',
          500: '#F5B400',
          600: '#d99e00',
          700: '#b37f00',
          800: '#8c6300',
          900: '#664800',
        },
        dark: {
          50:  '#f5f5f5',
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#424242',
          600: '#2d2d2d',
          700: '#1a1a1a',
          800: '#111111',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #F5B400 0%, #d99e00 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(245, 180, 0, 0.25)',
        'gold-lg': '0 8px 40px rgba(245, 180, 0, 0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
