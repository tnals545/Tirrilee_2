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
import ProdList from "components/ProdList";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<string>("전체");

  const categories = useAppSelector((state) => state.data.categories);

  const onCategoryClick = (e: any) => {
    const {
      target: { textContent },
    } = e;
    setCategory(textContent);
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return (
    <>
      <Title title={category} />
      <NavBar />
      <header className="product-header">
        <h1>상품 목록</h1>
        <div className="product-list text-bold">
          {categories.map((cate) => {
            return (
              <div key={cate}>
                <span className="product-list__bar"> </span>
                <Link href="/prod-list/[category]" as={`/prod-list/${cate}`}>
                  <span
                    className={`${category === cate ? "strong" : ""}`}
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
          {isLoading ? <Skeleton /> : <ProdList category={category} />}
        </ul>
      </main>
    </>
  );
};

export default Category;
