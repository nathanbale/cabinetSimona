/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#2563eb',
      },
      boxShadow: {
        'blue-sm': '0 4px 20px rgba(37,99,235,0.08)',
        'green-sm': '0 4px 20px rgba(34,197,94,0.15)',
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
