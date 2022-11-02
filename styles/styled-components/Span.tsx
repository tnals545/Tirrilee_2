import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation;
}

interface FuncPropsType {
  purpose: string;
  variant: string;
  children: any;
  onClick?: (e?: any) => void;
}

interface StyledPropsType {
  purposeStyle: FlattenSimpleInterpolation;
  variantStyle: FlattenSimpleInterpolation;
}

const PURPOSE: StyleType = {
  menu: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    cursor: pointer;
    span {
      font-weight: 700;
      margin-left: 5px;
    }
  `,
  headerBold: css`
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
};

const VARIANTS: StyleType = {
  blue: css`
    color: #226bef;
    background-color: white;
  `,
  black: css`
    color: black;
    background-color: white;
  `,
};

const Span = ({ purpose, variant, onClick, children }: FuncPropsType) => {
  const purposeStyle = PURPOSE[purpose];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledSpan
      onClick={onClick}
      purposeStyle={purposeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledSpan>
  );
};

const StyledSpan = styled.span<StyledPropsType>`
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;

  ${(p) => p.purposeStyle}
  ${(p) => p.variantStyle}
`;

export default Span;
