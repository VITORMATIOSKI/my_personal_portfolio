import { ContainerMyAbout } from './style'
import { useLottie } from 'lottie-react'

import spaceMan from '../../assets/LottieJSON/spaceman.json'

import { BsLinkedin, BsYoutube, BsGithub } from 'react-icons/bs'

import perfil from '../../assets/vitor.png'

export function AboutMe() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceMan,
  }

  const style = {
    width: 200,
    height: 200,
  }

  const { View } = useLottie(defaultOptions, style)
  return (
    <ContainerMyAbout id="aboutme">
      <div className="content_perfil">
        <div className="container_perfil">
          <img src={perfil} alt="" />
          <h1>Vitor M. Matioski</h1>
          {View}
        </div>
      </div>
      <div className="content_about">
        <h1>Sobre Mim</h1>
        <h2>Conheça um pouco sobre mim</h2>
        <p>
          Estudando para me tornar um programador Full Stack, formado bacharel
          em Direito e cursando análise e desenvolvimento de sistemas, ministrei
          aulas de inglês pelo período de 1 ano onde tive destaque na posição
          sendo reconhecido pela empresa e pelos alunos, hoje trabalho com
          freelancer para adquirir experiência e conhecimento alinhado com muito
          estudo e dedicação diárias para alcançar minha oportunidade de
          demostrar meus conhecimentos e comprometimento com os objetos pessoais
          e profissionais.
        </p>
        <div className="complement_content">
          <div className="principal_content">
            <p>
              Podem acompanhar minha rotina de estudos e conclusões de cursos
              em:
            </p>
            <a href="">
              <BsLinkedin />
            </a>
          </div>
          <div className="principal_content">
            <p>E para acessa meu conteúdo no youtube em:</p>
            <a href="">
              <BsYoutube />
            </a>
          </div>
        </div>
        <div className="complement_content">
          <div className="principal_content">
            <p>
              Se quiser dar uma olhada no meu Repositório github pode acessar
              em:
            </p>
            <a href="">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </ContainerMyAbout>
  )
}
