import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .hidden{
    display:none;
  }
  .text-bold {
    font-size: 18px;
    font-weight: 700;
  }
  .active {
    background-color: blue;
  }
`;

export default GlobalStyle;
