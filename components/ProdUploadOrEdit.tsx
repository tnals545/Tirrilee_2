import { useEffect, useRef, useState } from "react";
import router from "next/router";
import Image from "next/image";

import NavBar from "./Nav_Bar";
import store, { dispatch } from "redux/store";
import {
  prodSeller,
  prodKey,
  prodSrc,
  prodCategory,
  prodName,
  prodPrice,
  prodDescription,
} from "redux/prodReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { userUploadList } from "redux/userInfoReducer";
import Link from "next/link";

interface Props {
  edit: boolean;
}

const ProdUploadOrEdit = () => {
  const categories: string[] = ["에코백", "티셔츠", "기타물품"];
  const [btnActive, setBtnActive] = useState();
  const [imageSrc, setImageSrc] = useState<any>("");
  const [isRender, setIsRender] = useState(false);

  const handleInputChange = (e: any) => {
    const {
      target: { className, value },
    } = e;
    if (className === "name") {
      dispatch(prodName(value));
    } else if (className === "price") {
      dispatch(prodPrice(value));
    } else if (className === "detail") {
      dispatch(prodDescription(value));
    }
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    dispatch(prodKey(fileBlob.lastModified));
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        dispatch(prodSrc(reader.result));
        setImageSrc(reader.result);
        setIsRender((prev) => !prev);
        resolve();
      };
    });
  };

  const onCategoryClick = (e: any) => {
    const {
      target: { textContent, value },
    } = e;
    dispatch(prodCategory(textContent));
    setBtnActive(value); // 버튼 활성화 추가해야됨(파란색)
  };

  const onCompleteClick = () => {
    dispatch(prodSeller(store.getState().userInfo.nickname));
    dispatch(userUploadList(store.getState().prods));
  };
  return (
    <>
      <NavBar />
      <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeftLong} />
      {/* (수정하기 true/false props로 받아서 판단) */}
      {/* {edit ? <h1>수정하기</h1> : null} */}
      <input
        type="file"
        onChange={(e: any) => {
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <div className="preview">
        {imageSrc && (
          <Image src={imageSrc} alt="preview-img" width={500} height={500} />
        )}
      </div>
      <div className="prod-upload__info">
        <div className="prod-upload__info--text">
          <h4>제품명</h4>
          <input
            onChange={handleInputChange}
            className="name"
            type="text"
            placeholder="제품명을 입력해주세요."
          />
          <h4>가격</h4>
          <input
            onChange={handleInputChange}
            className="price"
            type="text"
            placeholder="0 원"
          />
          <h4>상세 설명</h4>
          <input
            onChange={handleInputChange}
            className="detail"
            type="text"
            placeholder="상세한 상품 설명을 입력해주세요."
          />
        </div>
        <div className="prod-upload__info--category">
          {categories.map((category, idx) => {
            return (
              <button
                key={category}
                value={idx}
                className={`btn ${idx == btnActive ? "active" : ""}`}
                onClick={onCategoryClick}
              >
                {category}
              </button>
            );
          })}
        </div>
        {/* edit ? 수정하기 : 완료 */}
        <Link href={"/prod-list/home"}>
          <button onClick={onCompleteClick}>완료</button>
        </Link>
      </div>
    </>
  );
};

export default ProdUploadOrEdit;
