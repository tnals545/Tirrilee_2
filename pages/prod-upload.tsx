import NavBar from "components/Nav_Bar";

export default function ProdUpload() {
  return (
    <>
      <NavBar />
      <div className="prod-upload__img">{/* 등록할 상품 이미지 */}</div>
      <div className="prod-upload__info">
        <div className="prod-upload__info--text">
          <h4>제품명</h4>
          <input type="text" placeholder="제품명을 입력해주세요." />
          <h4>가격</h4>
          <input type="text" placeholder="0 원" />
          <h4>상세 설명</h4>
          <input type="text" placeholder="상세한 상품 설명을 입력해주세요." />
        </div>
        <div className="prod-upload__info--category">
          <button>에코백</button>
          <button>티셔츠</button>
          <button>기타상품</button>
        </div>
        <button>완료</button>
      </div>
    </>
  );
}
