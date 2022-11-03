import Image from "next/image";
import router from "next/router";
import store from "redux/store";
import { useAppDispatch } from "redux/hooks";
import { prodInfoReset } from "redux/prodReducer";
import { StyledSpan } from "styles/styled-components/Span";
import { StyledDiv } from "styles/styled-components/Div";

interface Props {
  menu?: string;
}

const NavBar = ({ menu }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <StyledDiv purpose="navBar">
      <div>
        <Image
          onClick={() => {
            if (store.getState().userInfo.isLogin) {
              router.push("/prod-list/전체");
            } else {
              router.push("/");
            }
          }}
          src="/tirrilee-logo.png"
          alt="logo"
          width={106}
          height={30}
        />
      </div>
      <div>
        <StyledSpan
          onClick={() => {
            router.push("/prod-upload");
            dispatch(prodInfoReset());
          }}
          purpose="menu"
        >
          <Image
            src={
              menu === "regist"
                ? "/square-plus-solid.svg"
                : "/square-plus-regular.svg"
            }
            alt="regist"
            width={25}
            height={25}
          />
          <StyledSpan color={menu === "regist" ? "blue" : "black"}>
            추가하기
          </StyledSpan>
        </StyledSpan>
        <StyledSpan onClick={() => router.push("/mypage/main")} purpose="menu">
          <Image
            src={menu === "mypage" ? "/user-solid.svg" : "/user-regular.svg"}
            alt="mypage"
            width={22}
            height={22}
          />
          <StyledSpan color={menu === "mypage" ? "blue" : "black"}>
            마이페이지
          </StyledSpan>
        </StyledSpan>
      </div>
    </StyledDiv>
  );
};

export default NavBar;
