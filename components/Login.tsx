import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

//styled-components

export default function Login() {
  const [emailValue, setEmailValue] = useState();
  const [pwValue, setPwValue] = useState();
  const onChange = (e: any) => {
    const {
      target: { value, type },
    } = e;
    if (type === "email") {
      setEmailValue(value);
    } else if (type === "password") {
      setPwValue(value);
    }
  };
  return (
    <>
      <header>
        <Image src="/tirrilee-logo.png" alt="logo" width={180} height={50} />
      </header>
      <form>
        <div className="login-input__email">
          <span>이메일</span>
          <input
            onChange={onChange}
            id="id"
            type="email"
            placeholder="이메일을 입력하세요."
          />
        </div>
        <div className="login-input__password">
          <span>비밀번호</span>
          <input
            onChange={onChange}
            id="pw"
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
          <FontAwesomeIcon icon={faEye} />
          <FontAwesomeIcon icon={faEyeSlash} />
        </div>
        <Link href={"/prod-list/home"}>
          <button>로그인</button>
        </Link>
      </form>
    </>
  );
}
