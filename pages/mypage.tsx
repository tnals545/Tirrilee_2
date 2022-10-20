import React, { useRef, useState, useEffect } from "react";
import { userInfoReset, isLogin, addNickName } from "redux/userReducer";
import store from "redux/store";
import router from "next/router";
import NavBar from "components/Nav_Bar";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { allIsSameFalse, editUser } from "redux/dataReducer";

const Profile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const userNick = useAppSelector((state) => state.userInfo.nickname);
  const dispatch = useAppDispatch();

  const [newNickName, setNewNickName] = useState(userNick);
  const [isEdit, setIsEdit] = useState(false);

  const onLogOutClick = () => {
    dispatch(isLogin(false));
    dispatch(userInfoReset());
    dispatch(allIsSameFalse());
    router.push("/");
  };

  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setNewNickName(value);
  };

  const onClick = (e: any) => {
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
      <form onSubmit={(e) => e.preventDefault()}>
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
