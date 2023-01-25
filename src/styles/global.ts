import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

     *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Roboto Mono', monospace;
     }

     body{
          width: 100%;
          height: 100vh;
          background-color: ${({ theme }) => theme.colors.backgroundColor};
          -webkit-font-smoothing: antialiased;
     }
`
