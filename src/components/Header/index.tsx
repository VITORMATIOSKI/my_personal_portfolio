import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import Hamburger from 'hamburger-react'

import { ContainerHeader, ContainerNav, ContainerMobileMenu } from './styles'
import { MdDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

type Props = {
  onChangeTheme: () => void
}
export function Header({ onChangeTheme }: Props) {
  const { name, colors } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  return (
    <ContainerHeader>
      <ContainerNav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">Sobre</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#freelancer">Freelancer</a>
          </li>
          <li>
            <a href="#personal">Projetos</a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5547988059087"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5547988059087"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size={20} />
            </a>
          </li>
        </ul>
      </ContainerNav>
      <ContainerMobileMenu>
        <Hamburger
          duration={0.2}
          onToggle={() => setOpen(!open)}
          color="#FFFFFF"
        />
        {open && (
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">Sobre</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#freelancer">Freelancer</a>
            </li>
            <li>
              <a href="#personal">Projetos</a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5547988059087"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5547988059087"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram size={20} />
              </a>
            </li>
          </ul>
        )}
      </ContainerMobileMenu>
      <div className="content_changetheme">
        <Switch
          onChange={onChangeTheme}
          checked={name === 'dark'}
          height={22}
          width={40}
          checkedIcon={<MdDarkMode />}
          uncheckedIcon={<CiLight />}
          offColor={colors.secondary}
          onColor={colors.secondary}
        />
      </div>
    </ContainerHeader>
  )
}
