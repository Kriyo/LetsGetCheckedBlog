import { createGlobalStyle } from 'styled-components'
import { Neutral } from './utils/colors'

export const GlobalStyles = createGlobalStyle`
  html, body{
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osz-font-smoothing: grayscale;
    margin: 0px;
    background-color: white;
    color: ${Neutral[200]};
    font-size: 16px;
  }
`
