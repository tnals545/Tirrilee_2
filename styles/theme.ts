import { css, FlattenSimpleInterpolation } from "styled-components";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation | string;
}

export const theme = {
  black: "#000000",
  white: "#FFFFFF",
  blue: "#226bef",

  border: "solid 1px #e4e6ea",
  borderRadius: "8px",

  widthLoginMypage: "372px",
  widthLargeProd: "763px",

  weightBold: 700,
  weightSemiBold: 600,
  weightRegular: 400,

  cursor: "pointer",

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export const SIZE: StyleType = {
  fontLarge: "48px",
  fontSemiLarge: "30px",
  fontMoreMedium: "28px",
  fontMedium: "24px",
  fontSemiMedium: "20px",
  fontMiddle: "18px",
  fontRegular: "16px",
  fontSemiRegular: "14px",
  fontSmall: "12px",
  fontMicro: "10px",
};

export const COLOR: StyleType = {
  black: "#000000",
  white: "#FFFFFF",
  blue: "#226bef",
  gray: "#3b3f4a",
  lightGray: "#5a5e6a",
  darkWhite: "#bec1c7",
};

export type Theme = typeof theme;
