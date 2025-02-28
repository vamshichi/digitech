/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // ✅ For Next.js App Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Components folder
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // ✅ For Pages Router (if used)
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
