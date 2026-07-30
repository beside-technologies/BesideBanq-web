/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '2.5rem',
        xl: '3rem',
      },
    },
    extend: {
      maxWidth: {
        '7xl': '1280px',
        '8xl': '1440px',
      },
      colors: {
        // ─── Besidebanq Brand Palette (from design assets) ───────────────────
        brand: {
          primary:   '#2C2B9A',   // Deep Indigo — CTA buttons, banners
          mid:       '#4B3FD0',   // Mid Violet — hover states
          violet:    '#7B5CF5',   // Vibrant Violet — gradient mid, onboarding
          lavender:  '#C4C8F0',   // Soft Lavender — gradient top, highlights
          teal:      '#0AECD1',   // Teal — accent, phone border, highlights
          navy:      '#1A1B6B',   // Deep Navy — dark sections, gradient bottom
          // Legacy aliases for any existing class usage
          indigo:    '#2C2B9A',
          purple:    '#7B5CF5',
          electric:  '#0AECD1',
          cyan:      '#0AECD1',
        },
        // Background shades
        bg: {
          primary:  '#F0F1FF',   // Main light lavender screen background
          pure:     '#EEEEFF',   // Softer lavender (hero areas)
          dark:     '#0D0D24',   // Near-black
          'dark-card': '#16183A',
        },
        // Text palette
        ink: {
          900: '#0D0D24',
          700: '#3C3C6E',
          500: '#6B6B9A',
          300: '#9898C0',
        },
      },
      fontFamily: {
        display: ['"Bagel Fat One"', 'cursive', 'sans-serif'],
        heading: ['"Nunito"', 'sans-serif'],
        body: ['"Host Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand':   'linear-gradient(160deg, #C4C8F0 0%, #7B5CF5 45%, #2C2B9A 75%, #1A1B6B 100%)',
        'gradient-primary': 'linear-gradient(135deg, #2C2B9A 0%, #4B3FD0 50%, #7B5CF5 100%)',
        'gradient-teal':    'linear-gradient(135deg, #0AECD1 0%, #4B3FD0 100%)',
      },
      boxShadow: {
        'brand-sm':   '0 4px 12px rgba(44, 43, 154, 0.06)',
        'brand-md':   '0 8px 24px rgba(44, 43, 154, 0.12)',
        'brand-lg':   '0 20px 40px rgba(44, 43, 154, 0.16)',
        'brand-glow': '0 0 40px rgba(123, 92, 245, 0.4)',
        'teal-glow':  '0 0 30px rgba(10, 236, 209, 0.35)',
      },
      animation: {
        'float':      'floatAnimation 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'fade-up':    'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        floatAnimation: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(10, 236, 209, 0.3)' },
          '50%':       { boxShadow: '0 0 45px rgba(10, 236, 209, 0.65)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
