import { useEffect, useRef, useState } from "react";
import router from "next/router";
import Image from "next/image";

import store from "redux/store";
import NavBar from "./Nav_Bar";
import { dispatch } from "redux/store";
import { prodInfo } from "redux/prodReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

interface Props {
  edit: boolean;
}

interface ProdInfo {
  seller: string;
  key: number;
  src: string;
  category: string;
  name: string;
  price: string;
  description: string;
}

const ProdUploadOrEdit = () => {
  const categories: string[] = ["에코백", "티셔츠", "기타물품"];
  const contents = [
    {
      head: "제품명",
      className: "name",
      placeholder: "제품명을 입력해주세요.",
    },
    { head: "가격", className: "price", placeholder: "0 원" },
    {
      head: "상세 설명",
      className: "detail",
      placeholder: "상세한 상품 설명을 입력해주세요.",
    },
  ];
  const prodInfoObj: ProdInfo = {
    seller: "",
    key: 0,
    src: "",
    category: "",
    name: "",
    price: "",
    description: "",
  };
  const [btnActive, setBtnActive] = useState();
  const [imageSrc, setImageSrc] = useState<any>();

  const handleInputChange = (e: any) => {
    const {
      target: { className, value },
    } = e;
    if (className === "name") {
      prodInfoObj.name = value;
    } else if (className === "price") {
      prodInfoObj.price = value;
    } else if (className === "detail") {
      prodInfoObj.description = value;
    }
  };

  const onFileChange = (e: any) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    prodInfoObj.key = theFile.lastModified;
    reader.readAsDataURL(theFile);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        setImageSrc(reader.result);
        // prodInfoObj.src = JSON.stringify(readerEvent.target?.result);
      };
    });
  };

  const onCategoryClick = (e: any) => {
    const {
      target: { textContent, value },
    } = e;
    prodInfoObj.category = textContent;
    setBtnActive(value); // 버튼 활성화 추가해야됨(파란색)
  };

  const onCompleteClick = () => {
    prodInfoObj.seller = store.getState().userInfo.nickname;
    dispatch(prodInfo(prodInfoObj));
  };
  return (
    <>
      <NavBar />
      <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeftLong} />
      {/* (수정하기 true/false props로 받아서 판단) */}
      {/* {edit ? <h1>수정하기</h1> : null} */}
      <div className="prod-upload__img">
        <input onChange={onFileChange} type="file" accept="image/*" />
        {prodInfoObj.src && <Image src={imageSrc} alt="preview-img" />}
      </div>
      <div className="prod-upload__info">
        <div className="prod-upload__info--text">
          {contents.map((content, idx) => {
            return (
              <>
                <h4>{content.head}</h4>
                <input
                  onChange={handleInputChange}
                  className={content.className}
                  type="text"
                  placeholder={content.placeholder}
                />
              </>
            );
          })}
        </div>
        <div className="prod-upload__info--category">
          {categories.map((category, idx) => {
            return (
              <>
                <button
                  value={idx}
                  className={`btn ${idx == btnActive ? "active" : ""}`}
                  onClick={onCategoryClick}
                >
                  {category}
                </button>
              </>
            );
          })}
        </div>
        {/* edit ? 수정하기 : 완료 */}
        <button onClick={onCompleteClick}>완료</button>
      </div>
    </>
  );
};

export default ProdUploadOrEdit;
