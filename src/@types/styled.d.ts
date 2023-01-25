import 'styled-components'
import { defaultTheme } from '../styles/themes/defauls'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string

    colors: {
      textColor: string
      backgroundColor: string
      primary: string
      secondary: string
      icon: string
      header: string
    }
  }
}
