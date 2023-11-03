/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html",'Certs.html'],
  theme: {
    extend: {
      width: {
        'custom': '47rem',
      },
      colors: {
        'custom-gray': '#C0C0C0',
        'primary-color': '#0B0C10',
        'secondary-color': '#1F2833',
        'text-color1': '#66FCF1',
        'text-color2': '#C5C6C7'
      },
      animation: {
        "fade-in-1": "fadeIn 1.5s ease-in-out",
        "fade-in-2": "fadeIn 2.5s ease-in-out",
        'fade-in-menu': "fadeIn 4s ease-in-out",
        'wave': 'wave 2s linear infinite',
        'slide-right': 'SlideRight 2s ease-in-out',
        'slide-left': 'SlideLeft 2s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        SlideRight:{
          '0%':{transform: 'translateX(100%)', opacity: '0'},
          '100%':{transform: 'translateX(0%)', opacity: '1'},
        },
        SlideLeft:{
          '0%':{transform: 'translateX(-100%)', opacity: '0'},
          '100%':{transform: 'translateX(0%)', opacity: '1'},
        }
      },
    },
  },
  plugins: [],
}

