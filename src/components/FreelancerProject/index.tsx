import { ButtonDirect } from '../BottomDirect'
import { ContainerCards } from './style'

import { DiReact, DiJavascript, DiCss3, DiHtml5 } from 'react-icons/di'
import { SiStyledcomponents, SiEslint } from 'react-icons/si'
import { FaFigma } from 'react-icons/fa'

import alvor from '../../assets/alvor.png'
import vfhair from '../../assets/vfhair.svg'
import easyway from '../../assets/easywaydev.png'

export function CardProject() {
  return (
    <ContainerCards>
      <h1>Freelancer</h1>
      <div className="content_container flex">
        <div className="content_image flex">
          <img src={alvor} alt="Logo da empresa Alvor" />
          <ButtonDirect link="" text="Click here" />
        </div>
        <div className="content_information flex">
          <h1>Alvor</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit doloremque unde tempore voluptatem voluptate ipsum hic
            error eos ea nam quasi aperiam consequatur cupiditate recusandae
            repellat, laudantium culpa sapiente in.
          </p>
          <div className="content_language">
            <DiJavascript />
            <DiCss3 />
            <DiHtml5 />
          </div>
        </div>
      </div>
      <div className="content_container flex">
        <div className="content_image flex">
          <img src={vfhair} alt="Logo da empresa Alvor" />
          <ButtonDirect link="" text="Click here" />
        </div>
        <div className="content_information flex">
          <h1>Vf_hair</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit doloremque unde tempore voluptatem voluptate ipsum hic
            error eos ea nam quasi aperiam consequatur cupiditate recusandae
            repellat, laudantium culpa sapiente in.
          </p>
          <div className="content_language">
            <DiReact />
            <SiStyledcomponents />
            <SiEslint />
            <FaFigma />
          </div>
        </div>
      </div>
      <div className="content_container flex">
        <div className="content_image flex">
          <img src={easyway} alt="Logo da empresa Alvor" />
          <ButtonDirect link="https://easywaydev.com/" text="Click here" />
        </div>
        <div className="content_information flex">
          <h1>Easy way dev</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit doloremque unde tempore voluptatem voluptate ipsum hic
            error eos ea nam quasi aperiam consequatur cupiditate recusandae
            repellat, laudantium culpa sapiente in.
          </p>
          <div className="content_language">
            <DiReact />
            <SiStyledcomponents />
            <SiEslint />
          </div>
        </div>
      </div>
    </ContainerCards>
  )
}
