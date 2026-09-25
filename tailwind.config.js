/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#E6EAF0',
          100: '#C8D0D8',
          500: '#5A6570',
          800: '#14181F',
          'bg-light': '#DCE2E8',
          'bg-dark': '#0A0E14',
          surface: '#C8D0D8',
          'surface-dark': '#141A22',
          muted: '#5A6570',
          'text-light': '#14181F',
          'text-dark': '#E6EAF0',
          accent: '#9A6B3F',
          brass: '#C4A574',
          mist: '#6B9B94',
          ink: '#0A0E14',
        },
        primary: {
          50: '#E8F2F0',
          100: '#C5DED9',
          200: '#9BC4BC',
          300: '#6B9B94',
          400: '#4A7F78',
          500: '#2F5F5A',
          600: '#264E4A',
          700: '#1E3E3B',
          800: '#162E2C',
          900: '#0F1F1D',
        },
      },
      boxShadow: {
        'soft-lg': '0 18px 45px rgba(10, 14, 20, 0.12)',
        'soft-xl': '0 24px 60px rgba(10, 14, 20, 0.18)',
        glow: '0 0 40px rgba(47, 95, 90, 0.25)',
        'glow-lg': '0 0 60px rgba(47, 95, 90, 0.35)',
        'glass-light': '0 8px 32px rgba(10, 14, 20, 0.06), inset 0 1px 0 rgba(255,255,255,0.55)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(230, 234, 240, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        aurora:
          'linear-gradient(135deg, rgba(47,95,90,0.16) 0%, rgba(154,107,63,0.08) 50%, rgba(10,14,20,0.06) 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'aurora-shift': 'aurora-shift 14s ease-in-out infinite alternate',
        'fog-drift': 'fog-drift 22s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'blob-1': 'blob 14s ease-in-out infinite',
        'blob-2': 'blob 16s ease-in-out infinite reverse',
        'blob-3': 'blob 18s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'aurora-shift': {
          '0%': { transform: 'translateX(-4%) rotate(0deg)' },
          '100%': { transform: 'translateX(4%) rotate(2deg)' },
        },
        'fog-drift': {
          '0%': { transform: 'translate3d(-2%, 0, 0) scale(1)' },
          '100%': { transform: 'translate3d(3%, -1%, 0) scale(1.04)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(24px, -16px) scale(1.04)' },
          '66%': { transform: 'translate(-16px, 12px) scale(0.96)' },
        },
      },
      transitionDuration: {
        theme: '500ms',
      },
    },
  },
  plugins: [],
}
