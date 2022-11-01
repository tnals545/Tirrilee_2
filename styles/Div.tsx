import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface StyleType {
  [key: string]: FlattenSimpleInterpolation;
}

interface FuncPropsType {
  className: string;
  children: any;
}

interface StyledPropsType {
  classStyle: FlattenSimpleInterpolation;
}

const CLASS: StyleType = {
  navbar: css``,
};

const Div = ({ className, children }: FuncPropsType) => {
  const classStyle = CLASS[className];

  return <StyledDiv classStyle={classStyle}>{children}</StyledDiv>;
};

const StyledDiv = styled.div<StyledPropsType>`
  ${(p) => p.classStyle}
`;

export default Div;
