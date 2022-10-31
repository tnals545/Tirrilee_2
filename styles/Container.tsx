import styled from "styled-components";

interface Container {
  className: string;
}

export const Container = styled.div<Container>`
  ${(p) => p.theme.absoluteCenter}
  ${(p) => p.className === "delete-alert" && p.theme.divStyle.deleteAlert}

  width: ${(p) =>
    (p.className === "login" || p.className === "mypage") &&
    p.theme.widthLoginMypage};
  width: ${(p) => p.className === "width-large-prod" && p.theme.widthLargeProd};
`;
