import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation;
}

interface FuncPropsType {
  page: string;
  children: any;
}

interface StyledPropsType {
  pageStyle: FlattenSimpleInterpolation;
}

const PAGES: StyleType = {
  navbar: css`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px #eff1f4;
    background-color: #fff;
    z-index: 1;
  `,
};

const Container = ({ page, children }: FuncPropsType) => {
  const pageStyle = PAGES[page];

  return <StyledContainer pageStyle={pageStyle}>{children}</StyledContainer>;
};

const StyledContainer = styled.div<StyledPropsType>`
  ${(p) => p.theme.absoluteCenter}
  ${(p) => p.pageStyle}
`;

export default Container;
