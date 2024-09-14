/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      // black
      black1: '#fcfcfc',
      black2: '#f0f0f0',
      black3: '#bfbfbf',
      black4: '#595959',
      black5: '#262626',
      black6: '#141414',
      
      // orange
      orange1: '#ffd08a',
      orange2: '#ff9800',
      
      // red
      red1: '#ffb299',
      red2: '#ff5722',
    }
  },
  plugins: []
};
