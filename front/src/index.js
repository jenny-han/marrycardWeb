import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { theme } from './lib/styles/theme'
import './lib/styles/_fonts.css'
import './lib/styles/_more.css'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </ThemeProvider>
)

reportWebVitals()
