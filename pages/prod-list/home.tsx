import NavBar from "components/Nav_Bar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <header className="product-header">
        <h1>상품 목록</h1>
        <div className="product-list text-bold">
          <span>전체</span>
          <span className="product-list__bar"> </span>
          <Link href={"/prod-list/eco"}>
            <span>에코백</span>
          </Link>
          <span className="product-list__bar"> </span>
          <Link href={"/prod-list/shirts"}>
            <span>티셔츠</span>
          </Link>
          <span className="product-list__bar"> </span>
          <Link href={"/prod-list/etc"}>
            <span>기타물품</span>
          </Link>
        </div>
      </header>

      <main className="product-main">
        {/* div box 특성 제거해야함 */}
        <div className="product-info">
          <Image
            src="/ecobag/ecobag_0.png"
            alt="ecobag"
            width={274}
            height={274}
          />
          <span>에코백</span>
          <span>깔끔하고 이쁜 화이트 컬러 에코백</span>
          <span>10,000원</span>
        </div>
        <div className="product-info">
          <Image
            src="/t_shirts/t_shirts_0.jpg"
            alt="t-shirts"
            width={274}
            height={274}
          />
          <span>티셔츠</span>
          <span>네이비 컬러 티셔츠</span>
          <span>20,000원</span>
        </div>
        <div className="product-info">
          <Image src="/etc/etc_0.jpg" alt="ecobag" width={274} height={274} />
          <span>기타물품</span>
          <span>깔끔한 손목시계</span>
          <span>30,000원</span>
        </div>
      </main>
    </>
  );
}
