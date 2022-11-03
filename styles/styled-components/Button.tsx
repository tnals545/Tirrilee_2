import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation;
}

interface FuncPropsType {
  size: string;
  variant: string;
  onClick?: (e?: any) => void;
  children: any;
}

interface StyledPropsType {
  sizeStyle: FlattenSimpleInterpolation;
  variantStyle: FlattenSimpleInterpolation;
}

const SIZES: StyleType = {
  category: css`
    width: auto;
    height: 40px;
    padding: 0 16px;
  `,
  detail: css`
    width: auto;
    height: 48px;
    padding: 0 12px;
    font-weight: bold;
  `,
  complete: css`
    width: 372px;
    height: 56px;
    padding: 0 12px;
    font-size: 18px;
    font-weight: bold;
  `,
  mypage: css`
    width: auto;
    height: 32px;
    padding: 0 12px;
  `,
};

const VARIANTS: StyleType = {
  bgBlue: css`
    color: white;
    background-color: #226bef;
  `,
  bgWhite: css`
    color: black;
    border: solid 1px #e4e6ea;
  `,
  textBlue: css`
    color: #226bef;
    border: solid 1px #226bef;
  `,
};

function Button({ size, variant, onClick, children }: FuncPropsType) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      onClick={onClick}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<StyledPropsType>`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;

export default Button;
