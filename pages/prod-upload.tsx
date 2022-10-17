import { useEffect, useRef, useState } from "react";
import router from "next/router";
import Image from "next/image";

import NavBar from "components/Nav_Bar";
import store from "redux/store";
import {
  addSeller,
  addKey,
  addSrc,
  addCategory,
  addName,
  addPrice,
  addDescription,
  prodInfoReset,
} from "redux/prodReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addProd } from "redux/dataReducer";

interface Props {
  edit: boolean;
}

const ProdUploadOrEdit = () => {
  const categories: string[] = ["에코백", "티셔츠", "기타물품"];
  const [btnActive, setBtnActive] = useState();
  const [imageSrc, setImageSrc] = useState<any>("");

  const dataState = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const changePrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (e: any) => {
    const {
      target: { className, value },
    } = e;
    if (className === "name") {
      dispatch(addName(value));
    } else if (className === "price") {
      dispatch(addPrice(changePrice(value)));
    } else if (className === "detail") {
      dispatch(addDescription(value));
    }
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    dispatch(addKey(fileBlob.lastModified));
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        dispatch(addSrc(reader.result));
        setImageSrc(reader.result);
        dispatch(addSeller(dataState.userInfo.email));
        resolve();
      };
    });
  };

  const onCategoryClick = (e: any) => {
    const {
      target: { textContent, value },
    } = e;
    dispatch(addCategory(textContent));
    setBtnActive(value); // 버튼 활성화 추가해야됨(파란색)
  };

  const onCompleteClick = () => {
    dispatch(addProd(dataState.prodInfo));
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
            type="number"
            placeholder="숫자만 입력해주세요."
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
