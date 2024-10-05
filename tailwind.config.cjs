/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {

        blueDark: '#1E6F9F',
        bluey: '#4EA8DE',
        purpleDark: '#5E60CE',
        purple: '#8284FA',

        '--gray-700': "#0D0D0D",
        '--gray-600': "#1A1A1A",
        '--gray-500': "#262626",
        '--gray-400':"#333333",
        '--gray-300': "#808080",
        '--gray-200': "#D9D9D9",
        '--gray-100':"#F2F2F2",
        '--green-500':"#00875f",
        '--green-300':"#00837E",
        
        danger:'#F75A68'
        
      }
    },
  },
  plugins: [],
}

