import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import {
  addEmail,
  addPassword,
  isLogin,
  addNickName,
  userAlreadyId,
  userInfoReset,
} from "redux/userReducer";
import store from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Title from "components/Title";
import { addUser } from "redux/dataReducer";

interface Password {
  type: string;
  visible: boolean;
}

//styled-components

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const dataState = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const [pwType, setPwType] = useState<Password>({
    type: "password",
    visible: false,
  });
  const [emailList, setEmailList] = useState<Array<string>>([]);

  const handleEmailList = () => {
    dataState.users.forEach((user) => {
      setEmailList((prev) => [...prev, user.email]);
    });
  };

  const onLoginClick = () => {
    const email = emailRef.current?.value;
    const pw = pwRef.current?.value;

    handleEmailList();

    if (email && emailList.includes(email)) {
      const exitUserIdx = emailList.indexOf(email);
      dataState.users.forEach((user, index) => {
        if (exitUserIdx === index) {
          dispatch(userAlreadyId(user));
          dispatch(isLogin(true));
        }
      });
    } else if (email && pw) {
      dispatch(addEmail(email));
      dispatch(addPassword(pw));
      dispatch(isLogin(true));
      dispatch(addNickName(email));
    }
    dispatch(addUser(store.getState().userInfo));
    console.log(store.getState().data);
  };

  // 비밀번호 보기/숨기기
  const handlePwType = () => {
    if (!pwType.visible) {
      setPwType({ type: "text", visible: true });
    } else {
      setPwType({ type: "password", visible: false });
    }
  };

  return (
    <>
      <Title title="Login" />
      <header>
        <Image src="/tirrilee-logo.png" alt="logo" width={180} height={50} />
      </header>
      <form>
        <div className="login__email">
          <span>이메일</span>
          <input
            ref={emailRef}
            id="id"
            type="email"
            placeholder="이메일을 입력하세요."
          />
        </div>
        <div className="login__password">
          <span>비밀번호</span>
          <input
            ref={pwRef}
            id="pw"
            type={pwType.type}
            placeholder="비밀번호를 입력하세요."
          />
          <span onClick={handlePwType} className="login__password-visible">
            {pwType.visible ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
        <Link href={"/prod-list/home"}>
          <button onClick={onLoginClick}>로그인</button>
        </Link>
      </form>
    </>
  );
};

export default Login;
