import { useEffect, useRef } from "react";
import store from "redux/store";
import NavBar from "./Nav_Bar";
import { dispatch } from "redux/store";
import { prodInfo } from "redux/prodReducer";

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
  const prodInfoObj: ProdInfo = {
    seller: "",
    key: 0,
    src: "",
    category: "",
    name: "",
    price: "",
    description: "",
  };

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
    reader.onloadend = (readerEvent) => {
      prodInfoObj.src = JSON.stringify(readerEvent.target?.result);
    };
    reader.readAsDataURL(theFile);
    prodInfoObj.key = theFile.lastModified;
  };

  const onCategoryClick = (e: any) => {
    const {
      target: { textContent },
    } = e;
    prodInfoObj.category = textContent;
    if (textContent === "에코백") {
      // 버튼 활성화(파란색)
    } else if (textContent === "티셔츠") {
      // 버튼 활성화(파란색)
    } else if (textContent === "기타상품") {
      // 버튼 활성화(파란색)
    }
  };

  const onCompleteClick = () => {
    prodInfoObj.seller = store.getState().userInfo.nickname;
    dispatch(prodInfo(prodInfoObj));
  };
  return (
    <>
      <NavBar />
      {/* 뒤로가기 버튼 */}
      {/* (수정하기 true/false props로 받아서 판단) */}
      {/* {edit ? <h1>수정하기</h1> : null} */}
      <div className="prod-upload__img">
        {/* 등록할 상품 이미지 preview */}
        <input onChange={onFileChange} type="file" accept="image/*" />
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
          <button onClick={onCategoryClick}>에코백</button>
          <button onClick={onCategoryClick}>티셔츠</button>
          <button onClick={onCategoryClick}>기타상품</button>
        </div>
        {/* edit ? 수정하기 : 완료 */}
        <button onClick={onCompleteClick}>완료</button>
      </div>
    </>
  );
};

export default ProdUploadOrEdit;
