const theme  = {
  colors: {
    primary: '#000',
    textPrimary: '#fff',
    bgHover: '#282828',
    secondary: '#1ED760',
    cardLight: '#303030',
    cardDark: '#171717',
    gradientStart: '#222222',
    sideBarBg: '#121212',
    textSecondary: '#B3B3B3',
    accentLight: '#C4C4C4',
    panel: '#181818',
    songCardBg: '#313130',
    inputBg: '#323232',
  },

  background: {
    gradient: 'linear-gradient(to bottom, #222222, #121212)',
  },

  breakpoints: ['400px', '600px', '750px', '900px'],

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

  buttons: {
    primary: {
      color: 'black',
      backgroundColor: 'white',
      borderRadius: '2rem',
      cursor: 'pointer',
      fontWeight: '600'
    },
    secondary: {
      color: 'white',
      backgroundColor: '#313130',
      borderRadius: '1rem',
      cursor: 'pointer',
      fontWeight: '600'
    },
    textButton: {
      color: 'white',
      backgroundColor: 'transparent',
      borderRadius: '1rem',
      cursor: 'pointer',
      fontWeight: '600'   
    },
    submit: {
      color: 'white',
      backgroundColor: '#1ED760',
      borderRadius: '1.3rem',
      cursor: 'pointer',
      fontWeight: '600',
      paddingBlock: '10px',
      fontSize: '20px'
    },

    iconButton: {
      color: '#B3B3B3',
      backgroundColor: 'transparent',
      borderRadius: '1.3rem',
      cursor: 'pointer',
      paddingBlock: '10px',
      fontSize: '11px'
    }

  },

  forms: {
    primary: {
      border: 'none',
      outline: 'none',
      fontSize: '18px',
      color: 'white',
      background: '#323232',
    }
  }


}


export default theme;