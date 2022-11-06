import router from "next/router";
import Image from "next/image";
import Link from "next/link";

import NavBar from "components/Nav_Bar";
import Title from "components/Title";

import { userInfoReset, isLogin } from "redux/userReducer";
import store from "redux/store";
import { useAppDispatch } from "redux/hooks";
import { allIsSameFalse, editUser } from "redux/dataReducer";

import { Button } from "styles/styled-components/Button";
import { Container } from "styles/styled-components/Container";
import { Div } from "styles/styled-components/Div";
import { Span } from "styles/styled-components/Span";

const Mypage = () => {
  const dispatch = useAppDispatch();

  const onClickLogOut = () => {
    dispatch(isLogin(false));
    dispatch(editUser(store.getState().userInfo));
    dispatch(userInfoReset());
    dispatch(allIsSameFalse());
    router.push("/");
  };

  return (
    <>
      <Title title="MyPage" />
      <NavBar menu="mypage" />
      <Container page="mypage">
        <Div purpose="mypage" className="main-profile">
          <Image
            className="profile__img"
            src={store.getState().userInfo.profileImg}
            alt="profile__img"
            width={72}
            height={72}
          />
          <Div className="main-profile__text">
            <Span size="fontRegular" bold="700">
              {store.getState().userInfo.nickname}
            </Span>
            <Span size="fontSemiRegular" color="lightGray">
              {store.getState().userInfo.email}
            </Span>
          </Div>
          <Button
            onClick={() => router.push("/mypage/edit_profile")}
            purpose="mypage"
            color="bgBlue"
          >
            수정하기
          </Button>
        </Div>
        <Div
          purpose="mypage"
          className="main-my_prod_list"
          onClick={() => router.push("/mypage/my_products_list")}
        >
          <Div>
            <Div>
              <Image
                className="gift-icon"
                src="/gift.png"
                alt="gift"
                width={20}
                height={20}
              />
              <Span bold="500">등록한 상품 목록</Span>
            </Div>
            <Image
              className="right-icon"
              src="/angle-right.png"
              alt="right"
              width={20}
              height={20}
            />
          </Div>
        </Div>
        <Div purpose="mypage" className="main-logout">
          <Link href="/">
            <Div onClick={onClickLogOut}>
              <Image
                className="left-icon"
                src="/left.png"
                alt="left"
                width={20}
                height={20}
              />
              <Span bold="500">로그아웃</Span>
            </Div>
          </Link>
        </Div>
        <Div purpose="mypage" className="main-signout">
          <Div>
            <Image
              className="signout-icon"
              src="/sign-out.png"
              alt="signout"
              width={20}
              height={20}
            />
            <Span color="darkWhite">탈퇴하기</Span>
          </Div>
        </Div>
      </Container>
    </>
  );
};
export default Mypage;
