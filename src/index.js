import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'

let theme = createMuiTheme({
  palette:{
    primary:{
      main:"#f5f5f5"
    }
  },
  typography:{
    fontFamily: [
      "Open Sans",
      "sans-serif"
    ].join(','),
  }
})

theme = responsiveFontSizes(theme)

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
