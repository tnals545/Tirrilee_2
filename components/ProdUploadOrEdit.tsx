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
  addBeforeKey,
} from "redux/prodReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addProd, editProduct } from "redux/dataReducer";
import { Container } from "styles/Container";

interface propsType {
  work: string;
}

const ProdUploadOrEdit = ({ work }: propsType) => {
  const [btnActive, setBtnActive] = useState<string>();
  const [render, setRender] = useState(false);
  const [keyList, setKeyList] = useState<number[]>([]);
  const [beforeProdInfo, seBeforeProdInfo] = useState<ProdState>(
    store.getState().prodInfo
  );

  const nameInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const detailInput = useRef<HTMLInputElement>(null);

  const categories = useAppSelector((state) => state.etc.categories.slice(1));
  const dispatch = useAppDispatch();

  const priceToUnit = (price: string) => {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (e: any) => {
    const {
      target: { className, value },
    } = e;
    if (className === "name" && nameInput.current) {
      nameInput.current.value = value;
    } else if (className === "price" && priceInput.current) {
      priceInput.current.value = value;
    } else if (className === "detail" && detailInput.current) {
      detailInput.current.value = value;
    }
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'lastModified')
    // 이미지를 업로드한 상태에서 파일 업로드 버튼을 클릭했다가 취소를 눌렀을 때 발생하는 에러
    // -> reader 변수와 fileBlob prop이 있을 때에만 실행하도록 작성하여 해결
    if (reader && fileBlob) {
      dispatch(addKey(fileBlob.lastModified));
      reader.readAsDataURL(fileBlob);
      return new Promise<void>((resolve) => {
        reader.onload = () => {
          dispatch(addSrc(reader.result));
          dispatch(addSeller(store.getState().userInfo.email));
          setRender((prev) => !prev);
          resolve();
        };
      });
    }
  };

  const onClickCategory = (e: any) => {
    const {
      target: { textContent, value },
    } = e;
    dispatch(addCategory(textContent));
    setBtnActive(value); // 버튼 활성화 추가해야됨(파란색)
  };

  const onClickComplete = (e: any) => {
    if (
      keyList.includes(store.getState().prodInfo.key) === true &&
      work === "upload"
    ) {
      alert("이미 등록된 상품입니다.");
      e.preventDefault();
    } else {
      {
        nameInput.current && dispatch(addName(nameInput.current.value));
      }
      {
        priceInput.current &&
          dispatch(addPrice(priceToUnit(priceInput.current.value)));
      }
      {
        detailInput.current &&
          dispatch(addDescription(detailInput.current.value));
      }
      if (work === "edit") {
        dispatch(editProduct(store.getState().prodInfo));
      } else if (work === "upload") {
        dispatch(addProd(store.getState().prodInfo));
      }
      dispatch(prodInfoReset());
    }
  };

  useEffect(() => {
    store.getState().data.products.forEach((prod) => {
      setKeyList([...keyList, prod.key]);
    });

    if (work === "edit") {
      if (nameInput.current) {
        nameInput.current.value = store.getState().prodInfo.name;
      }
      if (priceInput.current) {
        priceInput.current.value = store
          .getState()
          .prodInfo.price.replace(/,/g, "");
      }
      if (detailInput.current) {
        detailInput.current.value = store.getState().prodInfo.description;
      }
      setBtnActive(store.getState().prodInfo.category);
      seBeforeProdInfo(store.getState().prodInfo);
      dispatch(addBeforeKey(store.getState().prodInfo.key));
    }

    router.beforePopState(() => {
      dispatch(editAllProdState(beforeProdInfo));
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, []);

  return (
    <Container className="">
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
        {store.getState().prodInfo.src && (
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
            ref={nameInput}
            onChange={handleInputChange}
            className="name"
            type="text"
            placeholder="제품명을 입력해주세요."
            required
          />
          <h4>가격</h4>
          <input
            ref={priceInput}
            onChange={handleInputChange}
            className="price"
            type="number"
            placeholder="숫자만 입력해주세요."
            required
          />
          <h4>상세 설명</h4>
          <input
            ref={detailInput}
            onChange={handleInputChange}
            className="detail"
            type="text"
            placeholder="상세한 상품 설명을 입력해주세요."
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
                onClick={onClickCategory}
              >
                {category}
              </button>
            );
          })}
        </div>
        <Link href="/prod-list/전체">
          {work === "edit" ? (
            <button onClick={onClickComplete}>수정하기</button>
          ) : (
            <button onClick={onClickComplete}>완료</button>
          )}
        </Link>
      </div>
    </Container>
  );
};

export default ProdUploadOrEdit;
