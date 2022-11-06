import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import router from "next/router";

import NavBar from "components/Nav_Bar";
import Title from "components/Title";
import Skeleton from "components/Skeleton";
import { CustomProdList } from "components/CustomProdList";

import { useAppSelector } from "redux/hooks";

import { Span } from "styles/styled-components/Span";
import { Div } from "styles/styled-components/Div";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<string>("");

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
      if (router.router?.query.category) {
        setCategory(String(router.router?.query.category));
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
        <Span bold="800" size="fontSemiLarge" purpose="header">
          상품 목록
        </Span>
        <Div purpose="prodCategory">
          {categories.map((cate, index) => {
            return (
              <div key={cate}>
                <Link href="/prod-list/[category]" as={`/prod-list/${cate}`}>
                  <Span
                    className={`${category !== cate && "opacity"} pointer bold`}
                    onClick={handleClickCategory}
                  >
                    {cate}
                  </Span>
                </Link>
                {categories.length - 1 !== index && (
                  <Span size="fontSmall" purpose="bar">
                    {"|"}
                  </Span>
                )}
              </div>
            );
          })}
        </Div>
      </header>

      <main>
        <ul className="product-list__skeleton">{isLoading && <Skeleton />}</ul>
        <CustomProdList ref={ref} category={category} prodData={prodData} />
      </main>
    </>
  );
};

export default Category;
