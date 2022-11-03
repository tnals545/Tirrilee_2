import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface Type {
  [key: string]: FlattenSimpleInterpolation;
}

const PURPOSE: Type = {
  navBar: css`
    width: 100%;
    height: 56px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: solid 1px #eff1f4;
    background-color: #fff;
    z-index: 99;

    div {
      display: flex;
      justify-content: space-between;
      margin-left: 62px;
      margin-right: 62px;
    }
  `,
  login: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;
  `,
  prodCategory: css`
    position: absolute;
    display: flex;
    padding: 170px 190px 20px 62px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span:first-child {
      font-size: 20px;
      font-weight: 700;
    }
  `,
  prodList: css`
    display: flex;
    flex-direction: column;

    img {
      border-radius: 8px;
    }
  `,
};

export const StyledDiv = styled.div<{ purpose?: string }>`
  ${(p) => p.purpose && `${PURPOSE[p.purpose]}`}

  &.login__header {
    position: relative;
    bottom: 90px;
  }
`;
