import styled from 'styled-components'

export const ContainerCards = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.colors.textColor};
    padding-bottom: 2rem;
  }
`
