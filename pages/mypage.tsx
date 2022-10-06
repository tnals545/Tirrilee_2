import React, { useEffect, useState } from "react";
import { userNickName } from "redux/reducers";
import store, { dispatch } from "redux/store";
import router from "next/router";

const Profile = () => {
  const userNick = store.getState().users.nickname;
  const [newNickName, setNewNickName] = useState(userNick);
  const onLogOutClick = () => {
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
      dispatch(userNickName(newNickName));
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>{userNick}</h1>
        <input
          onChange={onChange}
          type="text"
          placeholder="NickName"
          value={newNickName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
