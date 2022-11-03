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
    display: flex;
    flex-direction: column;
    margin-top: 250px;
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
};

export const Container = styled.div<StyledPropsType>`
  ${(p) => p.theme.absoluteCenter}
  ${(p) => p.page && PAGES[p.page]}
`;
