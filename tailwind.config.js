export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#0f4c81',
        amber: {
          bud: '#d4760a',
        },
      },
      boxShadow: {
        soft: '0 25px 80px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
