import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import { userEmail, userIsLogin, userPassword } from "redux/userInfoReducer";
import { dispatch } from "redux/store";

interface Password {
  type: string;
  visible: boolean;
}

//styled-components

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const [pwType, setPwType] = useState<Password>({
    type: "password",
    visible: false,
  });
  const onClick = () => {
    const emailValue = emailRef.current?.value;
    const pwValue = pwRef.current?.value;
    dispatch(userEmail(emailValue));
    dispatch(userPassword(pwValue));
    dispatch(userIsLogin(true));
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
          <button onClick={onClick}>로그인</button>
        </Link>
      </form>
    </>
  );
}
