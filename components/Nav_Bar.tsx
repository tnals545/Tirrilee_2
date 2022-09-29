import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

//styled-components

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <Image
          className="nav-bar__logo"
          src="/tirrilee-logo.png"
          alt="logo"
          width={180}
          height={50}
        />
        <div className="nav-bar--menu">
          <div className="nav-bar--menu">
            <FontAwesomeIcon icon={faCirclePlus} />
            <span className="nav-bar--menu__add">추가하기</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <span className="nav-bar--menu__mypage">마이페이지</span>
          </div>
        </div>
      </div>
    </>
  );
}
