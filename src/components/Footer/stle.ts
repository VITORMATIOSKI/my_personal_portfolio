import styled from 'styled-components'

export const ContentFoote = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
