/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ki: {
          navy:   '#1E1348',
          purple: '#4B3F8F',
          violet: '#7C6FC7',
          light:  '#EAE8F5',
          cream:  '#FAF9F6',
          gold:   '#F5A623',
          green:  '#4CAF7D',
          sage:   '#7FAF96',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
