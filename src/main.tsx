import React from 'react'
import ReactDOM from 'react-dom/client'

import { Scheduler } from './componentes/calendario/Scheduler'
import { ThemeProvider } from '@mui/material'
import { SincoTheme } from './Theme'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      <Scheduler />
    </React.StrictMode>,
  </ThemeProvider>
)
