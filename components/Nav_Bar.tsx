import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useDivClick } from "./useDivClick";
import { useRouter } from "next/router";

//styled-components

export default function NavBar() {
  const router = useRouter();
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
          <div
            onClick={() => router.push("/prod-upload")}
            className="nav-bar--menu__add"
          >
            <FontAwesomeIcon icon={faCirclePlus} className="add" />
            <span>추가하기</span>
          </div>
          <div
            onClick={() => router.push("/mypage")}
            className="nav-bar--menu__mypage"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>마이페이지</span>
          </div>
        </div>
      </div>
    </>
  );
}
