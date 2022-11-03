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

    &.login__header {
      position: relative;
      display: flex;
      justify-content: center;
      bottom: 50px;
    }

    span {
      margin-bottom: 16px;
    }
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
      object-fit: cover;
    }
  `,
  prodDetails: css`
    display: flex;

    &.prod-details__back {
      margin-bottom: 20px;
    }
    &.prod-details__prod-image {
      justify-content: center;

      img {
        object-fit: scale-down;
      }
    }
    &.prod-details__short-info {
      flex-direction: column;
      padding: 20px 0 8px 0;
      border-bottom: solid 1px #eff1f4;

      span {
        margin-bottom: 12px;
      }
    }
    &.prod-details__detail-info {
      flex-direction: column;
      margin: 32px 0;

      span {
        margin-bottom: 16px;
        line-height: 1.7;
        text-align: left;
      }
    }
    &.prod-details__button--edit {
      justify-content: flex-end;
      margin-bottom: 60px;
    }
  `,
  deleteAlert: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 372px;
    height: 194px;
    border-radius: 16px;
    background-color: white;

    &.isDelete__text {
      margin-top: 28px;

      span:first-child {
        margin-bottom: 20px;
      }
    }
    &.isDelete__button {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  `,
};

export const Div = styled.div<{ purpose?: string }>`
  ${(p) => p.purpose && `${PURPOSE[p.purpose]}`}
`;
