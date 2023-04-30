const theme  = {
  colors: {
    primary: '#000',
    textPrimary: '#fff',
    bgHover: '#282828',
    secondary: '#1ED760',
    cardLight: '#303030',
    cardDark: '#171717',
    gradientStart: '#222222',
    gradientEnd: '#121212',
    textSecondary: '#B3B3B3',
    accentLight: '#C4C4C4',
    panel: '#181818',
    songCardBg: '#313130',
  },

  background: {
    gradient: 'linear-gradient(to bottom, #222222, #121212)',
  },

  breakpoints: ['600px', '750px', '900px'],

  fontSizes: {
    xs: '15px',
    sm: '18px', 
    md: '21px',
    lg: '25px'
  },

  fonts: {
    dmSans: 'DM Sans',
  },

  fontWeights: {
    bold: '800',
    semiBold: '600'
  },

  variants: {
    buttons: {
      primary: {
        color: 'black',
        backgroundColor: 'blue',
      },
      secondary: {
        color: 'red',
        backgroundColor: 'red',
      },
      danger: {
        color: 'red',
        backgroundColor: 'red',    
      },
    }
  }
  

}


export default theme;