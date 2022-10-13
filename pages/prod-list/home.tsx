import NavBar from "components/Nav_Bar";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ProdListState, ProdState } from "redux/prodReducer";
import store from "redux/store";
import router from "next/router";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [prodInfo, setProdInfo] = useState<any>();
  const products: ProdListState = store.getState().userInfo.uploadlist;

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
        {/* 
        - div box 특성 제거해야함 
        - 상품 추가될 때마다 state, props 받아서 생성해주는 컴포넌트 만들기
        */}
        {products &&
          products.map((prod) => {
            return (
              <div key={prod.key} className={"product-info"}>
                <Link
                  href={{
                    pathname: `/prod-details/[key]`,
                    query: { prodInfo: JSON.stringify(prod) },
                  }}
                  as={`/prod-details/${prod.key}`}
                >
                  <Image
                    id={`${prod.key}`}
                    src={prod.src}
                    alt={prod.name}
                    width={274}
                    height={274}
                  />
                </Link>
                <span>{prod.category}</span>
                <span>{prod.name}</span>
                <span>{prod.price}원</span>
              </div>
            );
          })}
      </main>
    </>
  );
};

export default Home;
