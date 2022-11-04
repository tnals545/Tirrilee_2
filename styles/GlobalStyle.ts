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
  body {
    overflow: overlay;
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
  ul {
    position: absolute;
    padding-top: 230px;
    z-index: -1;
  }
  
  .hidden{
    display:none;
  }
  .opacity {
    opacity: 0.3;
  }
  .pointer {
    cursor: pointer;
  }
`;

export default GlobalStyle;
