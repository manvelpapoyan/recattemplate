import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material'

import generalCSS from '@styles/general'
import GlobalStyles from '@mui/material/GlobalStyles'
import theme from './theme'

import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={generalCSS} />
    <App />
  </ThemeProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
