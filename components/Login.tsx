import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "./Nav_Bar";

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
          <Image
            className="eye"
            alt=""
            src="/eye-regular.svg"
            width={25}
            height={25}
          />
          <Image
            className="eye-slash hidden"
            alt=""
            src="/eye-slash-regular.svg"
            width={26}
            height={26}
          />
        </div>
        <Link href={"/prod-list/eco-bag"}>
          <button>로그인</button>
        </Link>
      </form>
    </div>
  );
}
