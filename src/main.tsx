import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material'
import { SincoTheme } from './Theme'
import { Calendario } from '.'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      <Calendario />
    </React.StrictMode>,
  </ThemeProvider>
)
