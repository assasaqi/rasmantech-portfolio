/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Skema warna natural (Slate Warm & Stone)
        natural: {
          50: '#f8faf9',
          100: '#edf1ef',
          200: '#dbe3df',
          300: '#beccc5',
          400: '#92a89d',
          500: '#6f8a7e',
          600: '#546f63',
          700: '#43584f',
          800: '#384842',
          900: '#2f3b37',
          950: '#18211e',
        },
        // Warna aksen hijau botani / emerald lembut
        accent: {
          light: '#10b981',
          DEFAULT: '#059669',
          dark: '#047857',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
}
