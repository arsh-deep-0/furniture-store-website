import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
    
      fontFamily: { 'lexend-peta': ['Lexend Peta', 'sans'],
            'frank': ['Frank Ruhl Libre', 'sans'],
        'helvetica': ['Helvetica Neue', 'sans'],
        raleway: ['Raleway', 'sans'],
        
      },
      backgroundImage: {
        
      },
    },
  },
  plugins: [],
};

export default config;
