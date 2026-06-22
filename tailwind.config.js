/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#EDF5F0',
          100: '#D4E8DC',
          500: '#6B7C72',
          800: '#1A2420',
          'bg-light': '#F5F0E8',
          'bg-dark': '#122419',
          surface: '#E8E0D4',
          'surface-dark': '#1E2B24',
          muted: '#6B7C72',
          'text-light': '#1A2420',
          'text-dark': '#EDF5F0',
          accent: '#C4622D',
          gold: '#E8B923',
        },
        primary: {
          50: '#EDF5F0',
          100: '#D4E8DC',
          200: '#A8D1B8',
          300: '#6BAF84',
          400: '#4A9468',
          500: '#3D7A52',
          600: '#2D5A3D',
          700: '#244A32',
          800: '#1A3525',
          900: '#122419',
        },
      },
      boxShadow: {
        'soft-lg': '0 18px 45px rgba(26, 36, 32, 0.1)',
        'soft-xl': '0 24px 60px rgba(26, 36, 32, 0.14)',
        glow: '0 0 40px rgba(61, 122, 82, 0.3)',
        'glow-lg': '0 0 60px rgba(61, 122, 82, 0.4)',
        'glass-light': '0 8px 32px rgba(26, 36, 32, 0.06), inset 0 1px 0 rgba(255,255,255,0.7)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(212, 232, 220, 0.08)',
        neumorphic: '8px 8px 16px rgba(26, 36, 32, 0.06), -8px -8px 16px rgba(255, 255, 255, 0.9)',
        'neumorphic-dark': '8px 8px 16px rgba(0, 0, 0, 0.35), -4px -4px 12px rgba(61, 122, 82, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        aurora:
          'linear-gradient(135deg, rgba(61,122,82,0.14) 0%, rgba(196,98,45,0.08) 50%, rgba(18,36,25,0.06) 100%)',
        'hero-gradient':
          'linear-gradient(135deg, #3D7A52 0%, #E8E0D4 50%, #C4622D 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'aurora-shift': 'aurora-shift 12s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-text': 'gradient-text 4s ease infinite',
        'blob-1': 'blob 12s ease-in-out infinite',
        'blob-2': 'blob 14s ease-in-out infinite reverse',
        'blob-3': 'blob 16s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'aurora-shift': {
          '0%': { transform: 'translateX(-5%) rotate(0deg)' },
          '100%': { transform: 'translateX(5%) rotate(3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
      },
      transitionDuration: {
        theme: '500ms',
      },
    },
  },
  plugins: [],
}
