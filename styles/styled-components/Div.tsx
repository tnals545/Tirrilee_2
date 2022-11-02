import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation;
}

interface FuncPropsType {
  purpose: string;
  children: any;
}

interface StyledPropsType {
  purposeStyle: FlattenSimpleInterpolation;
}

const PURPOSE: StyleType = {
  navBar: css`
    width: 100%;
    height: 56px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: solid 1px #eff1f4;
    background-color: #fff;
    z-index: 1;

    div {
      display: flex;
      justify-content: space-between;
      margin-left: 62px;
      margin-right: 62px;
    }
  `,
  prodCategory: css`
    position: absolute;
    display: flex;
    margin: 170px 190px 20px 62px;

    div {
      display: flex;
      align-items: center;
    }

    span:first-child {
      font-size: 20px;
      font-weight: 600;
    }
  `,
};

const Div = ({ purpose, children }: FuncPropsType) => {
  const purposeStyle = PURPOSE[purpose];

  return <StyledDiv purposeStyle={purposeStyle}>{children}</StyledDiv>;
};

const StyledDiv = styled.div<StyledPropsType>`
  ${(p) => p.purposeStyle}
`;

export default Div;
