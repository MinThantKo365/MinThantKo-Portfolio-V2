/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d8efff',
          200: '#b9e3ff',
          300: '#89d1ff',
          400: '#52b4ff',
          500: '#2f90ff',
          600: '#1f70f5',
          700: '#1858d8',
          800: '#1848ac',
          900: '#173e89',
        },
        accent: {
          400: '#f97316',
          500: '#ea580c',
        },
      },
      boxShadow: {
        'soft-lg': '0 18px 45px rgba(15,23,42,0.35)',
      },
      backgroundImage: {
        'radial-soft':
          'radial-gradient(circle at top, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at bottom, rgba(236,72,153,0.2), transparent 55%)',
        'radial-soft-dark':
          'radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 55%), radial-gradient(circle at bottom, rgba(129,140,248,0.25), transparent 55%)',
      },
    },
  },
  plugins: [],
}

