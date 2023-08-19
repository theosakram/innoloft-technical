/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#272e71',
        'brand-grey': '#f9fafb',
        'brand-border': '#E5E7EB',
      },
    },
  },
  plugins: [],
};
