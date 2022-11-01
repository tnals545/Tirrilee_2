import NavBar from "components/Nav_Bar";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import store from "redux/store";
import router from "next/router";
import { useAppSelector } from "redux/hooks";
import Title from "components/Title";
import Skeleton from "components/Skeleton";
import { CustomProdList } from "components/CustomProdList";
import Container from "styles/styled-components/Container";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<string>("");

  // Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  // 해결못함
  const ref = useRef<HTMLUListElement>(null);

  const prodData = useAppSelector((state) => state.data.products);
  const categories = useAppSelector((state) => state.etc.categories);

  const handleClickCategory = (e: any) => {
    const {
      target: { textContent },
    } = e;
    setCategory(textContent);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      if (router.router?.query.category === "전체") {
        setCategory("전체");
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    setIsLoading(true);
    ref.current?.classList.add("hidden");

    let timer = setTimeout(() => {
      setIsLoading(false);
      ref.current?.classList.remove("hidden");
    }, 1500);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      clearTimeout(timer);
    };
  }, [category]);

  return (
    <>
      <Title title={category} />
      <NavBar />
      <Container page="productMain">
        <header className="product-header">
          <span className="headerText">상품 목록</span>
          <div className="product-list text-bold">
            {categories.map((cate) => {
              return (
                <div key={cate}>
                  <span className="product-list__bar"> </span>
                  <Link href="/prod-list/[category]" as={`/prod-list/${cate}`}>
                    <span
                      className={`${category !== cate ? "opacity" : ""}`}
                      onClick={handleClickCategory}
                    >
                      {cate}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </header>

        <main className="product-list">
          <ul className="product-list__skeleton">
            {isLoading && <Skeleton />}
          </ul>
          <CustomProdList ref={ref} category={category} prodData={prodData} />
        </main>
      </Container>
    </>
  );
};

export default Category;
