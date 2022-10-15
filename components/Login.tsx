import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import {
  userAlreadyId,
  userEmail,
  userIsLogin,
  userPassword,
} from "redux/userInfoReducer";
import store from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { userAdd } from "redux/userReducer";
import FindUserIdx from "components/FindUserIdx";

interface Password {
  type: string;
  visible: boolean;
}

//styled-components

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const userData = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const [pwType, setPwType] = useState<Password>({
    type: "password",
    visible: false,
  });
  const [idx, setIdx] = useState<number | boolean>();

  const onLoginClick = () => {
    const email = emailRef.current?.value;
    const pw = pwRef.current?.value;

    // const emailList: any[] = [];

    // userData.forEach((user) => {
    //   emailList.push(user.user.email);
    //   console.log(emailList);
    // });

    // if (emailList.includes(email)) {
    //   setIdx(emailList.indexOf(email));
    // } else {
    //   setIdx(false);
    // }

    // console.log(idx);

    // userData.forEach((_, index) => {
    //   if (idx === index) {
    //     dispatch(userAlreadyId(userData[idx].user));
    //   } else if (idx === false) {
    //     dispatch(userAdd());
    //     dispatch(userEmail(email));
    //     dispatch(userPassword(pw));
    //     dispatch(userIsLogin(true));
    //   } else {
    //     console.log("error");
    //   }
    // });
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
}
