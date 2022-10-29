import styled from "styled-components";

interface BtnStyle {
  textSize: string;
  textColor: string;
  btnSize: string;
  btnColor: string;
  border: boolean;
}

const Button = (
  children: React.ReactNode,
  { textSize, textColor, btnSize, btnColor, border }: BtnStyle
) => {
  return (
    <StyledButton
      textSize={textSize}
      textColor={textColor}
      btnSize={btnSize}
      btnColor={btnColor}
      border={border}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<BtnStyle>`
  border: none;
  cursor: pointer;
`;

export default Button;
