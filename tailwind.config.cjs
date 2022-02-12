const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      screens: {
        'md': '768px',
        'lg': '1024px',
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;
