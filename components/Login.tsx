import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "./Nav_Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

//styled-components

export default function Login() {
  return (
    <div>
      <NavBar />
      <header>
        <Image src="/tirrilee-logo.png" alt="logo" width={180} height={50} />
      </header>
      <form>
        <span>이메일</span>
        <input id="id" type="email" placeholder="이메일을 입력하세요." />
        <span>비밀번호</span>
        <div className="input-password">
          <input id="pw" type="password" placeholder="비밀번호를 입력하세요." />
          <FontAwesomeIcon icon={faEye} />
          <FontAwesomeIcon icon={faEyeSlash} />
        </div>
        <Link href={"/prod-list/home"}>
          <button>로그인</button>
        </Link>
      </form>
    </div>
  );
}
