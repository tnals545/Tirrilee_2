import React, { useRef, useState, useEffect } from "react";
import {
  userInfoReset,
  isLogin,
  addNickName,
  editProfileImg,
} from "redux/userReducer";
import store from "redux/store";
import router from "next/router";
import NavBar from "components/Nav_Bar";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { allIsSameFalse, editUser } from "redux/dataReducer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "styles/styled-components/Button";
import { Container } from "styles/styled-components/Container";

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
      <NavBar menu="mypage" />
      <Container page="mypage">
        <div className="profile">
          <Image
            className="profile__img"
            src={store.getState().userInfo.profileImg}
            alt="profile__img"
            width={100}
            height={100}
          />
          <span>{store.getState().userInfo.nickname}</span>
          <span>{store.getState().userInfo.email}</span>
          <Button
            onClick={() => router.push("/mypage/edit_profile")}
            purpose="mypage"
            color="bgBlue"
          >
            수정하기
          </Button>
        </div>
        <div className="my-prod-list">
          <div>
            {/* 선물상자 icon */}
            <p onClick={() => router.push("/mypage/my_products_list")}>
              등록한 상품 목록
            </p>
          </div>
          <div>{/* 오른쪽 화살표 icon */}</div>
        </div>
        <div>
          <Link href="/">
            {/* 왼쪽 화살표 icon */}
            <p onClick={onClickLogOut}>로그아웃</p>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default Mypage;
