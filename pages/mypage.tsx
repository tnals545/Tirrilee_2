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

const Profile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const userNick = useAppSelector((state) => state.userInfo.nickname);
  const dispatch = useAppDispatch();

  const [newNickName, setNewNickName] = useState(userNick);
  const [isEdit, setIsEdit] = useState(false);
  const [profileImg, setProfileImg] = useState<any>(
    store.getState().userInfo.profileImg
  );

  const onLogOutClick = () => {
    dispatch(isLogin(false));
    dispatch(editUser(store.getState().userInfo));
    dispatch(userInfoReset());
    dispatch(allIsSameFalse());
    router.push("/");
  };

  const onChangeNickname = (e: any) => {
    const {
      target: { value },
    } = e;
    setNewNickName(value);
  };

  const onClickNickname = (e: any) => {
    const {
      target: { value },
    } = e;
    if (value === "Execution") {
      dispatch(addNickName(newNickName));
      dispatch(editUser(store.getState().userInfo));
      setIsEdit(false);
    } else if (value === "Cancel") {
      setNewNickName(userNick);
      setIsEdit(false);
    } else {
      setIsEdit(true);
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
    {
      isEdit
        ? inputRef.current?.removeAttribute("disabled")
        : inputRef.current?.setAttribute("disabled", "true");
    }
  }, [isEdit]);
  return (
    <>
      <NavBar />
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
      <form onSubmit={(e) => e.preventDefault()}>
        {isEdit ? null : <h1>{newNickName}</h1>}
        <input
          ref={inputRef}
          onChange={onChangeNickname}
          type="text"
          placeholder="NickName"
          value={newNickName}
          disabled
        />
        {isEdit ? (
          <>
            <input onClick={onClickNickname} type="button" value="Execution" />
            <input onClick={onClickNickname} type="button" value="Cancel" />
          </>
        ) : (
          <input
            onClick={onClickNickname}
            type="button"
            value="Update NickName"
          />
        )}
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
