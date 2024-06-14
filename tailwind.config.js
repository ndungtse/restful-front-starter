/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#1B60AC',
            secondary: '#F1F1FB',
         },
         fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
         },
      },
   },
   plugins: [],
};