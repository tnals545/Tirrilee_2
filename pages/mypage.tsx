import React, { useRef, useState, useEffect } from "react";
import { userInfoReset, isLogin, addNickName } from "redux/userReducer";
import store from "redux/store";
import router from "next/router";
import NavBar from "components/Nav_Bar";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const Profile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const userNick = store.getState().userInfo.nickname;
  const userData = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [newNickName, setNewNickName] = useState(userNick);
  const [isEdit, setIsEdit] = useState(false);

  const onLogOutClick = () => {
    dispatch(isLogin(false));
    dispatch(userInfoReset());
    router.push("/");
  };

  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setNewNickName(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (userNick !== newNickName) {
      dispatch(addNickName(newNickName));
    }
  };

  const onClick = (e: any) => {
    const {
      target: { value },
    } = e;
    if (value === "Execution") {
      dispatch(addNickName(newNickName));
      setIsEdit(false);
    } else if (value === "Cancel") {
      setNewNickName(userNick);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
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
      <form onSubmit={onSubmit}>
        {isEdit ? null : <h1>{newNickName}</h1>}
        <input
          ref={inputRef}
          onChange={onChange}
          type="text"
          placeholder="NickName"
          value={newNickName}
          disabled
        />
        {isEdit ? (
          <>
            <input onClick={onClick} type="button" value="Execution" />
            <input onClick={onClick} type="button" value="Cancel" />
          </>
        ) : (
          <input onClick={onClick} type="button" value="Update NickName" />
        )}
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
