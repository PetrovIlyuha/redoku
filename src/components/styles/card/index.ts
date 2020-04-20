import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 15px;
    display: flex;
    flex: 1;
    color: black;
    flex-direction: column;
    max-height: fit-content;
    padding: 20px;
    margin: 0 30px;
  `}
`;
