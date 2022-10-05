import NavBar from "./Nav_Bar";

interface Props {
  edit: boolean;
}

interface ProdInfo {
  user: string;
  key: string;
  src: string;
  category: string;
  name: string;
  price: string;
  description: string;
}

const ProdUploadOrEdit = ({ edit }: Props) => {
  return (
    <>
      <NavBar />
      {/* 뒤로가기 버튼 */}
      {/* (수정하기 true/false props로 받아서 판단) */}
      {edit ? <h1>수정하기</h1> : null}
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
        {/* edit ? 수정하기 : 완료 */}
        {edit ? <button>수정하기</button> : <button>완료</button>}
      </div>
    </>
  );
};

export default ProdUploadOrEdit;
