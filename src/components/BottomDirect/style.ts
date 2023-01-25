import styled from 'styled-components'

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  .btn {
    display: block;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textColor};
    padding: 10px 23px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 110%;
      height: 0;
      background-color: ${({ theme }) => theme.colors.secondary};
      z-index: -1;
      transition: 0.7s ease;
    }

    &:hover {
      transform: scale(1.2);
      &::before {
        height: 550%;
      }
    }
  }

  @media (max-width: 1024px) {
    button {
      width: 150px;
      height: 50px;
    }
  }
`
