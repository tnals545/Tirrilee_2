import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import router from "next/router";
import store from "redux/store";
import { useAppDispatch } from "redux/hooks";
import { prodInfoReset } from "redux/prodReducer";
import { StyledDiv } from "./styled-components/Styled";

//styled-components

export default function NavBar() {
  const dispatch = useAppDispatch();

  return (
    <StyledDiv className="nav-bar">
      <Image
        onClick={() => {
          if (store.getState().userInfo.isLogin) {
            router.push("/prod-list/전체");
          } else {
            router.push("/");
          }
        }}
        className="nav-bar__logo"
        src="/tirrilee-logo.png"
        alt="logo"
        width={180}
        height={50}
      />
      <div className="nav-bar--menu">
        <span
          onClick={() => {
            router.push("/prod-upload");
            dispatch(prodInfoReset());
          }}
          className="nav-bar--menu__add"
        >
          <FontAwesomeIcon icon={faCirclePlus} className="add" />
          <span>추가하기</span>
        </span>
        <span
          onClick={() => router.push("/mypage/main")}
          className="nav-bar--menu__mypage"
        >
          <FontAwesomeIcon icon={faUser} />
          <span>마이페이지</span>
        </span>
      </div>
    </StyledDiv>
  );
}
