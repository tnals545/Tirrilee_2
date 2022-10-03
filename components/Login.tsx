import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface Password {
  value: string;
  type: string;
  visible: boolean;
}

//styled-components

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState<Password>({
    value: "",
    type: "password",
    visible: false,
  });
  const onChange = (e: any) => {
    const {
      target: { value, type },
    } = e;
    if (type === "email") {
      setEmail(value);
    } else if (type === "password") {
      setPassword({ value, type: password.type, visible: password.visible });
    }
  };
  // 비밀번호 보기/숨기기
  const handlePasswordType = () => {
    if (!password.visible) {
      setPassword({ value: password.value, type: "text", visible: true });
    } else {
      setPassword({ value: password.value, type: "password", visible: false });
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
            onChange={onChange}
            id="id"
            type="email"
            placeholder="이메일을 입력하세요."
          />
        </div>
        <div className="login__password">
          <span>비밀번호</span>
          <input
            onChange={onChange}
            id="pw"
            type={password.type}
            placeholder="비밀번호를 입력하세요."
          />
          <span
            onClick={handlePasswordType}
            className="login__password-visible"
          >
            {password.visible ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
        <Link href={"/prod-list/home"}>
          <button>로그인</button>
        </Link>
      </form>
    </>
  );
}
