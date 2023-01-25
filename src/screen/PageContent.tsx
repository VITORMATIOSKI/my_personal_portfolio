import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '../hook/UseTheme'
import { darkTheme } from '../styles/themes/darkTheme'
import { lightTheme } from '../styles/themes/ligthTheme'

import 'animate.css'

import { Header } from '../components/Header'
import { CardProject } from '../components/FreelancerProject'
import { HomePage } from '../components/HomePage/Index'
import { AboutMe } from '../components/AboutMe'
import { PersonalProjects } from '../components/PersonalProjectCard'
import { GlobalContent } from './styled'
import { Skill } from '../components/Skill'
import { Footer } from '../components/Footer'

export function PageContent() {
  const { theme, handleTheme } = useTheme()

  const onChangeTheme = () => {
    handleTheme(theme.name === 'dark' ? lightTheme : darkTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <Header onChangeTheme={onChangeTheme} />
      <GlobalContent>
        <HomePage />
        <AboutMe />
        <Skill />
        <CardProject />
        <PersonalProjects />
      </GlobalContent>
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}
