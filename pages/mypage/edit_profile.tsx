import React, { useRef, useState, useEffect } from "react";
import {
  userInfoReset,
  isLogin,
  addNickName,
  editProfileImg,
  UserInfoState,
  editAllUserState,
} from "redux/userReducer";
import store from "redux/store";
import router from "next/router";
import NavBar from "components/Nav_Bar";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { allIsSameFalse, editUser } from "redux/dataReducer";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Button from "styles/Button";

const EditProfile = () => {
  const nickInputRef = useRef<HTMLInputElement>(null);
  const userInfo = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();

  const [newNickName, setNewNickName] = useState(userInfo.nickname);
  const [profileImg, setProfileImg] = useState<any>(
    store.getState().userInfo.profileImg
  );
  const [beforeUserInfo, setBeforeUserInfo] = useState<UserInfoState>(
    store.getState().userInfo
  );

  const onChangeNickname = (e: any) => {
    const {
      target: { value },
    } = e;
    setNewNickName(value);
  };

  const onClickSave = () => {
    if (newNickName !== store.getState().userInfo.nickname) {
      dispatch(addNickName(newNickName));
      dispatch(editProfileImg(profileImg));
      dispatch(editUser(store.getState().userInfo));
    }
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
    setBeforeUserInfo(store.getState().userInfo);

    // next의 routing이 아닌, 사용자가 히스토리를 직접 조작하는 행위 (뒤로가기, 앞으로가기 등)가 일어날 경우 해당 메소드가 호출된다.
    // 만약 false를 리턴할 경우, Router는 popState를 처리하지 않는다.
    router.beforePopState(() => {
      dispatch(editAllUserState(beforeUserInfo));
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, []);

  return (
    <>
      <NavBar />
      <FontAwesomeIcon
        onClick={() => {
          router.back();
        }}
        icon={faArrowLeftLong}
      />
      <div className="profile-img">
        <Image
          className="profile-img__preview"
          src={profileImg}
          alt="preview-img"
          width={100}
          height={100}
        />
        <Button size="mypage" variant="bgBlue">
          <label htmlFor="file">사진 변경</label>
        </Button>
        <Button
          onClick={() => {
            dispatch(editProfileImg("/profile.png"));
            setProfileImg("/profile.png");
          }}
          size="mypage"
          variant="bgBlue"
        >
          사진 삭제
        </Button>
        <input
          id="file"
          className="hidden"
          type="file"
          name="file"
          onChange={(e: any) => {
            encodeFileToBase64(e.target.files[0]);
          }}
        />
      </div>
      <form>
        <p>닉네임</p>
        <input
          ref={nickInputRef}
          onChange={onChangeNickname}
          type="text"
          placeholder="NickName"
          value={newNickName}
        />
        <p>아이디</p>
        <input type="text" value={userInfo.email} disabled />
      </form>
      <Link href="/mypage/main">
        <Button onClick={onClickSave} size="complete" variant="bgBlue">
          저장
        </Button>
      </Link>
    </>
  );
};
export default EditProfile;
