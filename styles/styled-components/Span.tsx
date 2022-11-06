import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { COLOR, SIZE } from "styles/theme";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation | string;
}

interface StyledPropsType {
  purpose?: string;
  color?: string;
  size?: string;
  bold?: string;
  opacity?: string;
}

const PURPOSE: StyleType = {
  logo: css`
    font-family: "Gowun Batang", serif;
    font-size: 70px;
  `,
  logoNavbar: css`
    font-family: "Gowun Batang", serif;
    font-size: 30px;
    cursor: pointer;
  `,
  menu: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    cursor: pointer;

    span {
      margin-left: 5px;
    }
  `,
  header: css`
    position: absolute;
    margin: 100px 190px 20px 62px;
  `,
  bar: css`
    opacity: 0.4;
    display: inline-block;
    padding: 10px;
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
  `,
};

export const Span = styled.span<StyledPropsType>`
  font-family: "Gothic A1", sans-serif;

  ${(p) => p.purpose && `${PURPOSE[p.purpose]}`};
  color: ${(p) => p.color && `${COLOR[p.color]}`};
  font-size: ${(p) => p.size && `${SIZE[p.size]}`};
  font-weight: ${(p) => (p.bold ? p.bold : 400)};
  opacity: ${(p) => p.opacity && p.opacity};

  &.login__password-visible {
    width: 18px;
    font-size: 18px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 320px;
    left: 330px;

    cursor: pointer;
  }
`;
