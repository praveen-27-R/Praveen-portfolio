/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#101010',
        accent: '#ff2d55',
        grey: '#cfcfcf',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: { '50%': { opacity: 0 } },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(255,45,85,0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgba(255,45,85,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255,45,85,0)' },
        },
        driftSlow: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(-8%,6%) scale(1.12)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scrollDrip: {
          '0%': { top: '-100%' },
          '60%': { top: '100%' },
          '100%': { top: '100%' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(.16,.8,.2,1) forwards',
        blink: 'blink 1s step-end infinite',
        pulseDot: 'pulseDot 2.2s infinite',
        driftSlow: 'driftSlow 26s ease-in-out infinite alternate',
        spinSlow: 'spinSlow 14s linear infinite',
        scrollDrip: 'scrollDrip 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
