module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '1024': '64rem',
        '100vh': '100vh',
        '135vh': '135vh',
      },
      zIndex: {
        'index-1': '1'
      },
      colors: {
        'rgba-opacity': 'rgba(0,0,0, 0.4)', 
        'rgba-opacity-08': 'rgba(0,0,0, 0.8)',
        'borderColor': '#282c2d'
      },
      backgroundImage:{
        'linear': "linear-gradient(to top, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)",
        
      },
      padding: {
        t8: '8%',        
      },
      margin:{
        t5: '5%'
      },
      borderWidth:{
        '1': '1px'
      },
      screens: {
        'max-xs': {'max': '769px'}, // @media (max-width: 639px)
      },
    },
  },
  plugins: [],
}