import styled from 'styled-components'

export const ContainerHeader = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  padding-top: 2rem;
  z-index: 1;
  position: fixed;

  svg {
    color: ${({ theme }) => theme.colors.textColor};
  }

  @media (max-width: 990px) {
    justify-content: space-between;
  }
`

export const ContainerNav = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    list-style: none;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    padding-right: 2rem;
    color: ${({ theme }) => theme.colors.textColor};
  }

  @media (max-width: 990px) {
    display: none;
  }
`

export const ContainerMobileMenu = styled.nav`
  display: none;

  @media (max-width: 990px) {
    display: flex;
    z-index: 1;

    ul {
      position: fixed;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      list-style: none;
      z-index: 1;
      margin-left: 4rem;
      background-color: ${({ theme }) => theme.colors.secondary};
    }

    li {
      padding-top: 1.5rem;
    }

    a {
      text-decoration: none;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textColor};
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`
