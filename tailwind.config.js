module.exports = {
    darkMode: 'class', // <--- importante para el selector de tema
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}', // si usas la app directory de Next.js
    ],
    theme: {
      extend: {},
    },
    plugins: [],
}  