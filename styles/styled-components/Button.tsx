import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { SIZE } from "styles/theme";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation;
}

interface StyledPropsType {
  purpose?: string;
  color?: string;
  size?: string;
}

const PURPOSE: StyleType = {
  category: css`
    width: auto;
    height: 40px;
    padding: 0 16px;
  `,
  detail: css`
    width: 180px;
    height: 50px;
    padding: 0 12px;
    font-weight: 700;
    margin-left: 20px;
  `,
  delete: css`
    width: 156px;
    height: 48px;
    margin: 0 10px;
    font-weight: 600;
  `,
  complete: css`
    width: 372px;
    height: 56px;
    padding: 0 12px;
    font-size: 18px;
    font-weight: 600;
  `,
  mypage: css`
    width: auto;
    height: 32px;
    padding: 0 12px;
  `,
};

const COLOR: StyleType = {
  textBlue: css`
    color: #226bef;
    border: solid 1px #226bef;
  `,
  bgBlue: css`
    color: white;
    background-color: #226bef;
    border: solid 1px #226bef;
  `,
  bgWhite: css`
    color: #3b3f4a;
    border: solid 1px #e4e6ea;
  `,
};

export const Button = styled.button<StyledPropsType>`
  ${(p) => p.purpose && PURPOSE[p.purpose]}
  ${(p) => p.color && COLOR[p.color]}
  font-size: ${(p) => p.size && `${SIZE[p.size]}`};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;
