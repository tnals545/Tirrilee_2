import NavBar from "components/Nav_Bar";
import Link from "next/link";

export default function Shirts() {
  return (
    <>
      <NavBar />
      <h1>상품 목록</h1>
      <div className="product-list text-bold">
        <Link href={"/prod-list/home"}>
          <span>전체</span>
        </Link>
        <span className="product-list__bar"> </span>
        <Link href={"/prod-list/eco"}>
          <span>에코백</span>
        </Link>
        <span className="product-list__bar"> </span>
        <span>티셔츠</span>
        <span className="product-list__bar"> </span>
        <Link href={"/prod-list/etc"}>
          <span>기타물품</span>
        </Link>
      </div>

      <div className="product-info">
        {/* 제품 사진, 카테고리, 이름, 가격 */}
      </div>
    </>
  );
}
