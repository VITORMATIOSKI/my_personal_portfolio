import { TypeAnimation } from 'react-type-animation'
import { ButtonDirect } from '../BottomDirect'
import { YodaAnimation } from '../LottieAnimation/yodaAnimation'

import { ContenteHomePage } from './style'

export function HomePage() {
  return (
    <ContenteHomePage id="home">
      <div className="Text">
        <h1>Vitor Matheus Matioski</h1>
        <div className="text_dev">
          <h2>Desenvolvedor,</h2>
          <TypeAnimation
            sequence={['Full Stack', 2000, 'Front-end', 2000, 'Back-end', 2000]}
            className="type_name"
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>

        <p>
          Try not. Do… or do not. There is no try <br />{' '}
          <span>Mestre Yoda</span>
        </p>
        <YodaAnimation />
        <ButtonDirect
          text="Baixar Currículo"
          link="https://docs.google.com/uc?export=download&id=1dmZ7yxw9GsuMzNy6ZuilMgpLSKPtNeA9"
        />
      </div>
    </ContenteHomePage>
  )
}
