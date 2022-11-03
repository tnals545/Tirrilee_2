import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation | string;
}

interface StyledPropsType {
  purpose?: string;
  color?: string;
}

const PURPOSE: StyleType = {
  menu: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    cursor: pointer;

    span {
      font-size: 16px;
      font-weight: 700;
      margin-left: 5px;
    }
  `,
  header: css`
    position: absolute;
    margin: 100px 190px 20px 62px;
    font-size: 28px;
    font-weight: 800;
  `,
  bar: css`
    opacity: 0.4;
    display: inline-block;
    font-size: 12px;
    padding: 10px;
  `,
  login: css`
    margin-bottom: 16px;
    font-weight: 500;
  `,
  prodInfo: css`
    margin-bottom: 12px;
    &.category {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 60px;
      height: 24px;
      font-size: 12px;
      font-weight: 500;
      margin-top: 12px;
      border-radius: 8px;
      background-color: #e8f0fe;
    }
    &.name {
      font-size: 14px;
    }
    &.price {
      font-size: 18px;
      font-weight: 800;
    }
  `,
};

const COLOR: StyleType = {
  black: "#000000",
  white: "#FFFFFF",
  blue: "#226bef",
  gray: "#3b3f4a",
};

export const StyledSpan = styled.span<StyledPropsType>`
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;

  ${(p) => p.purpose && `${PURPOSE[p.purpose]}`};
  color: ${(p) => p.color && `${COLOR[p.color]}`};

  &.login__password-visible {
    width: 18px;
    font-size: 18px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 255px;
    left: 330px;
  }
`;
