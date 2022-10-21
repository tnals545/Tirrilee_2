import NavBar from "components/Nav_Bar";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import store from "redux/store";
import router from "next/router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Title from "components/Title";
import { editAllProdState } from "redux/prodReducer";
import Skeleton from "components/Skeleton";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const prodData = useAppSelector((state) => state.data.products);
  const dispatch = useAppDispatch();

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <>
      <Title title="Home" />
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
        <ul className="contentWrapper">
          {prodData.length > 0 &&
            prodData.map((prod) => {
              return isLoading ? (
                <Skeleton key={prod.key} />
              ) : (
                <li key={prod.key} className="item">
                  <div>
                    <Link
                      href="/prod-details/[key]"
                      as={`/prod-details/${prod.key}`}
                    >
                      <Image
                        src={prod.src}
                        alt={prod.name}
                        onClick={() => dispatch(editAllProdState(prod))}
                        width={274}
                        height={274}
                      />
                    </Link>
                  </div>
                  <div className="info">
                    <p>{prod.category}</p>
                    <p>{prod.name}</p>
                    <strong>
                      <p>{prod.price}원</p>
                    </strong>
                  </div>
                </li>
              );
            })}
        </ul>
      </main>
    </>
  );
};

export default Home;
