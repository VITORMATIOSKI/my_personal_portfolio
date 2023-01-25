import { ContainerSkills } from './style'

import {
  DiJava,
  DiJsBadge,
  DiNodejsSmall,
  DiNpm,
  DiVisualstudio,
  DiReact,
  DiSass,
  DiPhotoshop,
  DiHtml5,
  DiGithubBadge,
  DiCss3,
  DiJqueryLogo,
  DiBootstrap,
} from 'react-icons/di'
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiPrisma,
  SiExpo,
  SiFlathub,
  SiMinds,
  SiMocha,
} from 'react-icons/si'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { FaUserClock, FaSearch, FaPeopleArrows } from 'react-icons/fa'
import { GrGraphQl } from 'react-icons/gr'
import { BiBrain } from 'react-icons/bi'
import { AiOutlineComment } from 'react-icons/ai'

export function Skill() {
  return (
    <ContainerSkills className="flex">
      <h1>Habilidades</h1>
      <div className="container_content flex">
        <div className="content_all flex">
          <h2>Hard Skills</h2>
          <div className="content_skills flex">
            <DiJava />
            <DiJsBadge />
            <DiNodejsSmall />
            <SiTailwindcss />
          </div>
          <div className="content_skills flex">
            <DiNpm />
            <DiVisualstudio />
            <DiReact />
            <DiJqueryLogo />
            <SiExpo />
          </div>
          <div className="content_skills flex">
            <DiSass />
            <DiPhotoshop />
            <DiHtml5 />
            <DiBootstrap />
            <GrGraphQl />
          </div>
          <div className="content_skills flex">
            <DiGithubBadge />
            <DiCss3 />
            <SiStyledcomponents />
            <SiPrisma />
          </div>
        </div>
        <div className="content_all flex">
          <h2>Soft Skills</h2>
          <div className="content_skills flex">
            <SiFlathub />
            <SiMinds />
            <BiBrain />
          </div>
          <div className="content_skills flex">
            <HiOutlineUserGroup />
            <FaUserClock />
            <FaSearch />
          </div>
          <div className="content_skills flex">
            <SiMocha />
            <AiOutlineComment />
            <FaPeopleArrows />
          </div>
        </div>
      </div>
    </ContainerSkills>
  )
}
