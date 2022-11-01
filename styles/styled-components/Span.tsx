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
    span {
      font-weight: bold;
      margin-left: 5px;
    }
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
  ${(p) => p.purposeStyle}
  ${(p) => p.variantStyle}

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;

export default Span;
