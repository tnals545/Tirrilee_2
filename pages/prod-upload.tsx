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
  isSameSeller,
  prodInfoReset,
  editAllProdState,
} from "redux/prodReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addRecentProdInfo, addProd, editProduct } from "redux/dataReducer";

const ProdUploadOrEdit = () => {
  const categories: string[] = ["에코백", "티셔츠", "기타물품"];
  const [btnActive, setBtnActive] = useState();

  const [rendering, setRendering] = useState(false);
  const dispatch = useAppDispatch();

  const priceToString = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = async (e: any) => {
    const {
      target: { className, value },
    } = await e;
    if (className === "name") {
      dispatch(addName(value));
    } else if (className === "price") {
      dispatch(addPrice(priceToString(value)));
    } else if (className === "detail") {
      dispatch(addDescription(value));
    }
  };

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    dispatch(addKey(fileBlob.lastModified));
    reader.readAsDataURL(fileBlob);
    return await new Promise<void>((resolve) => {
      reader.onload = () => {
        dispatch(addSrc(reader.result));
        dispatch(addSeller(store.getState().userInfo.email));
        setRendering((prev) => !prev);
        resolve();
      };
    });
  };

  const onCategoryClick = async (e: any) => {
    const {
      target: { textContent, value },
    } = await e;
    dispatch(addCategory(textContent));
    setBtnActive(value); // 버튼 활성화 추가해야됨(파란색)
  };

  const onCompleteClick = async (e: any) => {
    const {
      target: { textContent },
    } = await e;
    if (textContent === "수정하기") {
      dispatch(editProduct(store.getState().prodInfo));
      dispatch(addRecentProdInfo(store.getState().prodInfo));
      dispatch(isSameSeller(false));
    } else if (textContent === "완료") {
      dispatch(addProd(store.getState().prodInfo));
      dispatch(prodInfoReset());
      console.log(store.getState());
    }
  };

  useEffect(() => {
    if (store.getState().data.recentProdInfo.isSame) {
    }
  }, []);

  return (
    <>
      <NavBar />
      <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeftLong} />
      {store.getState().data.recentProdInfo.isSame ? <h1>수정하기</h1> : null}
      <input
        type="file"
        onChange={(e: any) => {
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <div className="preview">
        {store.getState().prodInfo.src &&
          store.getState().data.recentProdInfo.isSame === false && (
            <Image
              src={store.getState().prodInfo.src}
              alt="preview-img"
              width={500}
              height={500}
            />
          )}
        {store.getState().data.recentProdInfo.isSame && (
          <Image
            src={store.getState().data.recentProdInfo.src}
            alt="preview-img"
            width={500}
            height={500}
          />
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
            value={store.getState().prodInfo.name}
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
        <Link href={"/prod-list/home"}>
          {store.getState().data.recentProdInfo.isSame ? (
            <button onClick={onCompleteClick}>수정하기</button>
          ) : (
            <button onClick={onCompleteClick}>완료</button>
          )}
        </Link>
      </div>
    </>
  );
};

export default ProdUploadOrEdit;
