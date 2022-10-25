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
  ProdState,
} from "redux/prodReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addProd, editProduct } from "redux/dataReducer";

interface propsType {
  work: string;
}

const ProdUploadOrEdit = ({ work }: propsType) => {
  const [btnActive, setBtnActive] = useState();
  const [render, setRender] = useState(false);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [detail, setDetail] = useState<string>("");

  const categories = useAppSelector((state) => state.data.categories.slice(1));
  const dispatch = useAppDispatch();

  const priceToUnit = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (e: any) => {
    const {
      target: { className, value },
    } = e;
    if (className === "name") {
      setName(value);
    } else if (className === "price") {
      setPrice(value);
    } else if (className === "detail") {
      setDetail(value);
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
        setRender((prev) => !prev);
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

  const onCompleteClick = () => {
    dispatch(addName(name));
    dispatch(addPrice(priceToUnit(price)));
    dispatch(addDescription(detail));
    if (work === "edit") {
      dispatch(editProduct(store.getState().prodInfo));
    } else if (work === "upload") {
      dispatch(addProd(store.getState().prodInfo));
    }
    dispatch(prodInfoReset());
  };

  useEffect(() => {
    if (work === "edit") {
      setName(store.getState().prodInfo.name);
      setPrice(parseInt(store.getState().prodInfo.price.replace(/,/g, "")));
      setDetail(store.getState().prodInfo.description);
    }
  }, [work]);

  return (
    <>
      <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeftLong} />
      {work === "edit" ? <h1>수정하기</h1> : null}
      <input
        type="file"
        onChange={(e: any) => {
          encodeFileToBase64(e.target.files[0]);
        }}
        accept="image/*"
        required
      />
      <div className="preview">
        {store.getState().prodInfo.src && work === "upload" && (
          <Image
            src={store.getState().prodInfo.src}
            alt="preview-img"
            width={500}
            height={500}
          />
        )}
        {work === "edit" && (
          <Image
            src={store.getState().prodInfo.src}
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
            value={name}
            required
          />
          <h4>가격</h4>
          <input
            onChange={handleInputChange}
            className="price"
            type="number"
            placeholder="숫자만 입력해주세요."
            value={price}
            required
          />
          <h4>상세 설명</h4>
          <input
            onChange={handleInputChange}
            className="detail"
            type="text"
            placeholder="상세한 상품 설명을 입력해주세요."
            value={detail}
            required
          />
        </div>
        <div className="prod-upload__info--category">
          {categories.map((category) => {
            return (
              <button
                key={category}
                value={category}
                className={`btn ${category === btnActive ? "active" : ""}`}
                onClick={onCategoryClick}
              >
                {category}
              </button>
            );
          })}
        </div>
        <Link href={"/prod-list/전체"}>
          {work === "edit" ? (
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
