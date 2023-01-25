import { useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { darkTheme } from '../styles/themes/darkTheme'

export function useTheme() {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme)

  function handleTheme(newTheme: DefaultTheme) {
    setTheme(newTheme)
  }

  return { theme, handleTheme }
}
