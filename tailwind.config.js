/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        dark: '#020617',
        light: '#F8FAFC',
        accent: '#2563EB',
        secondary: '#38BDF8',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
