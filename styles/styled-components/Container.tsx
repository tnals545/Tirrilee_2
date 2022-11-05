import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation;
}

interface StyledPropsType {
  page?: string;
}

const PAGES: StyleType = {
  login: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  prodDetails: css`
    height: 80vh;
    display: flex;
    flex-direction: column;
  `,
  deleteAlert: css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3000px;
    height: 3000px;
    z-index: 100;

    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(1px);
  `,
  prodUpload: css`
    padding-top: 150px;
  `,
  mypage: css`
    width: 372px;
    height: 80vh;
  `,
};

export const Container = styled.div<StyledPropsType>`
  ${(p) => p.theme.absoluteCenter}
  ${(p) => p.page && PAGES[p.page]}
`;
