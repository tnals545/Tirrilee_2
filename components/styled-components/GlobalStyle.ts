import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap");
  
  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
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
`;

export default GlobalStyle;
