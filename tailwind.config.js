/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-banner": "url('assets/images/image-hero-desktop.jpg')",
        "mobile-banner": "url('assets/images/image-hero-mobile.jpg')",
      },
      fontFamily: {
        comissioner: ["Comissioner", "sans-serif"],
      },
    },
  },
  plugins: [],
};
