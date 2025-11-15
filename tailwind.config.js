/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e10600',
          50: '#ffe5e5',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#e10600',
          600: '#cc0500',
          700: '#b80400',
          800: '#990300',
          900: '#7a0200',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          50: '#1a1a1a',
          100: '#2a2a2a',
          200: '#3a3a3a',
          300: '#4a4a4a',
          400: '#5a5a5a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Bebas Neue', 'Impact', 'Arial Black', 'sans-serif'],
        body: ['Roboto', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'octagon': '0',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px rgba(0, 0, 0, 0.2)',
        'cage': '0 0 20px rgba(225, 6, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.clip-octagon': {
          'clip-path': 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        },
        '.cage-bg': {
          'background-image': 'url(/assets/cage-pattern.svg)',
          'background-repeat': 'repeat',
          'background-size': '200px 200px',
        },
      })
    },
  ],
}

