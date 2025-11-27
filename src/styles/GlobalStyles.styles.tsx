import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --light: #fff;
    --dark: #000;
    --grey: #6E6E6E;
    --bg: #F5F6FA;
    --border: #E8E8E8;
    --main: #2272EB;
    --sub: #C3DBF9;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--bg);
  }
`;

export default GlobalStyles;
