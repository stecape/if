import Head from 'next/head'
import App from './layouts/App'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const theme = createMuiTheme({
  palette: {
    primary:  {
      main: '#bc2000',
      light: '#bc2000',
      dark: '#bc2000',
      contrastText: '#fff'
    },
    secondary:  {
      main: '#bc2000',
      light: '#bc2000',
      dark: '#bc2000',
      contrastText: '#fff'
    }
  }
})

export default () => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>IF</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <App />
  </ThemeProvider>
)