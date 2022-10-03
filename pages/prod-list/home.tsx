import NavBar from "../../components/Nav_Bar";
import store from "../../redux/store";

export default function Home() {
  return (
    <>
      <NavBar />
      <h2>상품 목록</h2>
      <div className="product-list">
        <span>전체</span>
        <span className="product-list__bar"> </span>
        <span>에코백</span>
        <span className="product-list__bar"> </span>
        <span>티셔츠</span>
        <span className="product-list__bar"> </span>
        <span>기타물품</span>
      </div>

      <div className="product-info">
        {/* 제품 사진, 카테고리, 이름, 가격 */}
      </div>
    </>
  );
}
