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
import { StyledSpan } from "styles/styled-components/Span";
import { StyledDiv } from "styles/styled-components/Div";

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
      <header className="product-header">
        <StyledSpan purpose="headerBold">상품 목록</StyledSpan>
        <StyledDiv purpose="prodCategory">
          {categories.map((cate, index) => {
            return (
              <div key={cate}>
                <Link href="/prod-list/[category]" as={`/prod-list/${cate}`}>
                  <span
                    className={`${category !== cate ? "opacity" : ""}`}
                    onClick={handleClickCategory}
                    style={{ cursor: "pointer" }}
                  >
                    {cate}
                  </span>
                </Link>
                {categories.length - 1 !== index && (
                  <StyledSpan purpose="bar">{"|"}</StyledSpan>
                )}
              </div>
            );
          })}
        </StyledDiv>
      </header>

      <main className="product-list">
        <ul className="product-list__skeleton">{isLoading && <Skeleton />}</ul>
        <CustomProdList ref={ref} category={category} prodData={prodData} />
      </main>
    </>
  );
};

export default Category;
