import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100vh;

    body: {
      display: flex;
      flex-direction: column;
      height: 100vh;
      margin: 0;
      padding: 0;
    }

    #root {
      background: ${theme.colors.background};
      color: ${theme.colors.yellow};
      font-size: 1.5rem;
      display: flex;
      font-family: sans-serif;
      height: 100vh;
      justify-content: center;
      padding: 15px;
    }
  }
`}
`;
