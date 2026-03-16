export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          900: '#172554',
        },
        sand: '#f8f5ef',
      },
      boxShadow: {
        card: '0 24px 60px -28px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
};
