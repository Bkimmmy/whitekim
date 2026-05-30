/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '3rem', xl: '4rem' },
      },
      extend: {},
    },
    plugins: [],
  }

  