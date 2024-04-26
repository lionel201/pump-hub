import { ThemeOptions } from '@mui/material'

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
}

export const basicTheme: ThemeOptions = {
  breakpoints,
  palette: {
    mode: 'dark',
    background: {
      paper: '#1D202B',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Inconsolata', // ['Inter', 'Arial'].join(','), // ['courier', 'courier new', 'serif'].join(','),
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflow: 'overlay',
        },
        body: {
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9,
          textTransform: 'initial',
          fontSize: '1rem',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
}
