/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      '2xl': "1460px",
    },

    extend: {
      colors: {
        "purple": "#7E33E0",
        "light-purple": "#F2F0FF",
        "light-gray": "#F1F1F1",
        "light-gray-2": "#F6F7FB",
        "light-gray-3": "#F7F7F7",
        "dark-gray": "#B7BACB",
        "light-skin": "#FFF6FB",
        "gray-text": "#8A8FB9",
        "pink": "#FB2E86",
        "off-blue": "#151875",
        "dark-blue": "#1A0B5B",
        "panton-purple": "#E0D3F5",
        "red": "#FB2448",
        "off-purple": "#9F63B5",
        "off-purple-2": "#9877E7",
        "light-green": "#08D15F",
      },
      boxShadow: {
        'style-1': '0 8px 22px 0 rgba(49, 32, 138, 0.15)',
      },
      backgroundImage: {
        "newsletter": "url('/src/assets/newsletter_image.svg')"
      }
    },
  },
  plugins: [],
};
