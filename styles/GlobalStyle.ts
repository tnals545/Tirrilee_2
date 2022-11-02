import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  .hidden{
    display:none;
  }
  .text-bold {
    font-size: 18px;
    font-weight: 700;
  }
  .active {
    color: blue;
    background-color: blue;
  }
  .opacity {
    opacity: 0.3;
  }
`;

export default GlobalStyle;
