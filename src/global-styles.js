import { createGlobalStyle } from 'styled-components'
import { Neutral } from './utils/colors'

export const GlobalStyles = createGlobalStyle`
  html, body{
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osz-font-smoothing: grayscale;
    margin: 0px;
    background-color: white;
    color: ${Neutral[300]};
    font-size: 16px;
  }
  h1, h2, h3, h4 {
    font-family: 'Lato', sans-serif;
  }
`
