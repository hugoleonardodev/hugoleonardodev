import type { Config } from 'tailwindcss'
import flowbite from 'flowbite-react/tailwind'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    flowbite.content(),
  ],
  prefix: '',
  extend: {
    keyframes: {
      'tilt-slow': {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(45deg)' },
        '50%': { transform: 'rotate(0deg)' },
        '75%': { transform: 'rotate(-45deg)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'tilt-slow': 'tilt-slow 0.2s infinite',
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  plugins: [require('tailwindcss-animate'), flowbite.plugin()],
} satisfies Config

export default config
