import { ButtonContent } from './style'

interface ButtonDirectProps {
  link: string
  text: string
}

export function ButtonDirect({ link, text }: ButtonDirectProps) {
  return (
    <ButtonContent>
      <a className="btn" href={link} rel="noreferrer" target="_blank">
        {text}
      </a>
    </ButtonContent>
  )
}
