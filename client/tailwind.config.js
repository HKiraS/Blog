/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Certifique-se de incluir todos os arquivos do src
  theme: {
    extend: {
      colors: {
        'gray-1': '#374151',
        'gray-2': '#6b7280',
        'gray-3': '#d1d5db',
        'gray-4': '#f3f4f6',
        'color-white': '#f9fafb',
        'color-black': '#1f2937',
        'color-purple': '#9747ff',
        'color-orange': '#fb923c',
        'color-blue': '#3b82f6',
      },
      backgroundColor:{
        'purple': '#9747ff',
        'orange': '#fb923c',
        'blue': '#3b82f6',
        'gray-1': '#374151',
        'gray-2': '#6b7280',
        'gray-3': '#d1d5db',
        'gray-4': '#f3f4f6',
        'color-white': '#f9fafb',
        'color-black': '#1f2937',
      }
    },
  },
  plugins: [],
};
