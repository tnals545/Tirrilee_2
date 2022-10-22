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

const ProdList = (cateType: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<string>();

  const prodData = useAppSelector((state) => state.data.products);
  const categories = useAppSelector((state) => state.data.categories);
  const dispatch = useAppDispatch();

  const onCategoryClick = async (e: any) => {
    const {
      target: { textContent },
    } = await e;
    if (textContent === "에코백") {
      setCategory("eco");
    } else if (textContent === "티셔츠") {
      setCategory("tshirts");
    } else {
      setCategory("etc");
    }
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return (
    <>
      <header className="product-header">
        <h1>상품 목록</h1>
        <div className="product-list text-bold">
          <div>
            <Link href="/prod-list/[category]" as={`/prod-list/all`}>
              <span className="all">전체</span>
            </Link>
          </div>
          {categories.map((cate) => {
            return (
              <div key={cate}>
                <span className="product-list__bar"> </span>
                <Link
                  href="/prod-list/[category]"
                  as={`/prod-list/${category}`}
                >
                  <span
                    className={`${category === cateType ? "active" : ""}`}
                    onClick={onCategoryClick}
                  >
                    {cate}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </header>

      <main className="product-main">
        <ul className="contentWrapper">
          {isLoading ? (
            <Skeleton />
          ) : (
            prodData.length > 0 &&
            prodData.map((prod) => {
              return (
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
            })
          )}
        </ul>
      </main>
    </>
  );
};

export default ProdList;
