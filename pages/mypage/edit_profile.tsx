import React, { useRef, useState, useEffect } from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";

import NavBar from "components/Nav_Bar";
import Title from "components/Title";

import { addNickName, editProfileImg, UserInfoState } from "redux/userReducer";
import store from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { editUser } from "redux/dataReducer";

import { Button } from "styles/styled-components/Button";
import { Container } from "styles/styled-components/Container";
import { Span } from "styles/styled-components/Span";
import { Div } from "styles/styled-components/Div";
import { Input } from "styles/styled-components/Input";

const EditProfile = () => {
  const nickInputRef = useRef<HTMLInputElement>(null);
  const userInfo = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();

  const [newNickName, setNewNickName] = useState(userInfo.nickname);
  const [profileImg, setProfileImg] = useState<any>(
    store.getState().userInfo.profileImg
  );

  const onChangeNickname = (e: any) => {
    const {
      target: { value },
    } = e;
    setNewNickName(value);
  };

  const onClickSave = () => {
    dispatch(addNickName(newNickName));
    dispatch(editProfileImg(profileImg));
    dispatch(editUser(store.getState().userInfo));
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    if (reader && fileBlob) {
      reader.readAsDataURL(fileBlob);
      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setProfileImg(reader.result);
          resolve();
        };
      });
    }
  };

  useEffect(() => {
    setNewNickName(store.getState().userInfo.nickname);
  }, []);

  return (
    <>
      <Title title="Edit Profile" />
      <NavBar menu="mypage" />
      <Container page="profileEdit">
        <Div purpose="prodDetails" className="prod-details__back">
          <Image
            onClick={() => router.back()}
            src="/left.png"
            alt="back"
            width={32}
            height={32}
          />
        </Div>
        <Span size="fontMoreMedium" bold="700">
          프로필 수정
        </Span>
        <Div purpose="profileEdit" className="profile-img">
          <Image
            className="profile-img__preview"
            src={profileImg}
            alt="preview-img"
            width={200}
            height={200}
          />
          <Div purpose="profileEdit">
            <Button purpose="mypage" color="bgBlue">
              <label htmlFor="file">사진 변경</label>
            </Button>
            <Button
              onClick={() => {
                dispatch(editProfileImg("/profile.png"));
                setProfileImg("/profile.png");
              }}
              purpose="mypage"
              color="bgBlue"
            >
              사진 삭제
            </Button>
          </Div>
          <input
            id="file"
            className="hidden"
            type="file"
            name="file"
            onChange={(e: any) => {
              encodeFileToBase64(e.target.files[0]);
            }}
          />
        </Div>
        <Div purpose="profileEdit" className="profile-info">
          <Span color="lightGray">닉네임</Span>
          <Input
            ref={nickInputRef}
            onChange={onChangeNickname}
            type="text"
            placeholder="NickName"
            value={newNickName}
          />
          <Span color="lightGray">아이디</Span>
          <Input type="text" value={userInfo.email} disabled />
        </Div>
        <Link href="/mypage/main">
          <Button onClick={onClickSave} purpose="complete" color="bgBlue">
            저장
          </Button>
        </Link>
      </Container>
    </>
  );
};
export default EditProfile;
