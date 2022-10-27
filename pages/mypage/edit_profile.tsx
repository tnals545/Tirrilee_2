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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

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
    if (newNickName !== store.getState().userInfo.nickname) {
      dispatch(addNickName(newNickName));
      dispatch(editUser(store.getState().userInfo));
    }
  };

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return await new Promise<void>((resolve) => {
      reader.onload = () => {
        dispatch(editProfileImg(reader.result));
        dispatch(editUser(store.getState().userInfo));
        setProfileImg(reader.result);
        resolve();
      };
    });
  };

  useEffect(() => {
    setNewNickName(store.getState().userInfo.nickname);
  }, []);

  return (
    <>
      <NavBar />
      <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeftLong} />
      <div className="profile-img">
        <Image
          className="profile-img__preview"
          src={profileImg}
          alt="preview-img"
          width={100}
          height={100}
        />
        <label htmlFor="file">
          <div className="profile-img__upload">사진 변경</div>
        </label>
        <div
          className="profile-img__delete"
          onClick={() => {
            dispatch(editProfileImg("/profile.png"));
            setProfileImg("/profile.png");
          }}
        >
          사진 삭제
        </div>
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
        <button onClick={onClickSave}>저장</button>
      </Link>
    </>
  );
};
export default EditProfile;
