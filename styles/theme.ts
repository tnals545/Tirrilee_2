import { css } from "styled-components";

const divStyle = {
  deleteAlert: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: white;
    border: none;
    border-radius: 10px;
    width: 372px;
    height: 194px;
    text-align: center;
    color: black;
  `,
};

export const theme = {
  black: "#000000",
  white: "#FFFFFF",
  blue: "#226bef",

  border: "solid 1px #e4e6ea",
  borderRadius: "8px",

  widthLoginMypage: "372px",
  widthLargeProd: "763px",

  fontLarge: "48px",
  fontMedium: "28px",
  fontSemiMedium: "20px",
  fontRegular: "18px",
  fontSmall: "16px",
  fontMicro: "14px",

  weightBold: 700,
  weightSemiBold: 600,
  weightRegular: 400,

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  divStyle,
};

export type Theme = typeof theme;
