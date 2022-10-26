import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState, useEffect } from "react";
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
import { addUser, findIsSameTrue } from "redux/dataReducer";

interface Password {
  type: string;
  visible: boolean;
}

//styled-components

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const [pwType, setPwType] = useState<Password>({
    type: "password",
    visible: false,
  });
  const emailList: string[] = [];

  const onLoginClick = (e: any) => {
    const email = emailRef.current?.value;
    const pw = pwRef.current?.value;

    store.getState().data.users.forEach((user) => {
      emailList.push(user.email);
      if (user.email === email && user.password === pw) {
        dispatch(userAlreadyId(user));
        dispatch(isLogin(true));
        dispatch(findIsSameTrue(store.getState().userInfo.email));
      } else if (user.email === email && user.password !== pw) {
        alert("비밀번호를 확인해주세요 :)");
        e.preventDefault();
      }
    });
    console.log(emailList);
    if (email && pw && emailList.includes(email) === false) {
      dispatch(addEmail(email));
      dispatch(addPassword(pw));
      dispatch(isLogin(true));
      dispatch(addNickName(email));
      dispatch(addUser(store.getState().userInfo));
      dispatch(findIsSameTrue(store.getState().userInfo.email));
    }
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
            required
          />
        </div>
        <div className="login__password">
          <span>비밀번호</span>
          <input
            ref={pwRef}
            id="pw"
            type={pwType.type}
            placeholder="비밀번호를 입력하세요."
            required
          />
          <span onClick={handlePwType} className="login__password-visible">
            {pwType.visible ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
        <Link href={"/prod-list/[category]"} as="/prod-list/전체">
          <button onClick={onLoginClick}>로그인</button>
        </Link>
      </form>
    </>
  );
};

export default Login;
