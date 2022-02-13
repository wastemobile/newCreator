const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      'md': '768px',
      'lg': '1024px',
    },
    extend: {},
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;
