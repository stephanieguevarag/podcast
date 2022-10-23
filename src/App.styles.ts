import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root{
    --font-family-roboto: 'Roboto', sans-serif;
  }
  body {
    box-sizing: border-box;
    font-family: var(--font-family-roboto)
  }
`;
