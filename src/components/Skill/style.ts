import styled from 'styled-components'

export const ContainerSkills = styled.div`
  .container_content {
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textColor};
    padding-bottom: 2rem;
  }

  h2 {
    text-align: top;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textColor};
    padding-bottom: 2rem;
  }

  .flex {
    display: flex;
  }

  .content_all {
    width: 30%;
    height: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content_all:first-child {
    border-right: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  .content_skills {
    justify-content: flex-start;
    flex-direction: row;

    svg {
      color: ${({ theme }) => theme.colors.textColor};
      width: 70px;
      height: 70px;
      margin: 1rem 1rem;
    }
  }
`
