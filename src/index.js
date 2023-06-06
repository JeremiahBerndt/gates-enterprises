import 'reset-css';
import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from "./ScrollToTop";
import { createTheme, ThemeProvider } from '@mui/material/styles';
require('dotenv').config();

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Poppins"
        }
      }
    }
  },
  typography: {
    fontFamily: "Poppins,sans-serif",
    // subtitle1: {},
    // body1: {},
    h2: {
      padding: '1rem',
      fontWeight: 600
    },
    button: {
      fontWeight: 800
    }
    // h3: {
    //   fontSize: '1.2rem',
    //   '@media (min-width:600px)': {
    //     fontSize: '1.5rem',
    //   },
    // }
  },
  palette: {
    primary: {
      // darkblue
      main: '#062841',
    },
    secondary: {
      // gold
      main: '#c9a32c'
    },
    tertiary: {
      main: 'whitesmoke'
    }
  },
  pageSection: {
    height: '60rem'
  }
});



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
