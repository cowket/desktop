import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<any>`
  body {
    background-color: ${(props) => props.theme.colors.body};
  }
`

export default GlobalStyle
