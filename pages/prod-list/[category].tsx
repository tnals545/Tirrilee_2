import NavBar from "components/Nav_Bar";
import Image from "next/image";
import Link from "next/link";
import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  createRef,
} from "react";
import store from "redux/store";
import router from "next/router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Title from "components/Title";
import { editAllProdState } from "redux/prodReducer";
import Skeleton from "components/Skeleton";
import { CustomProdList } from "components/CustomProdList";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<string>("");

  // Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  const ref = useRef<HTMLUListElement>(null);

  const prodData = useAppSelector((state) => state.data.products);
  const categories = useAppSelector((state) => state.data.categories);
  const dispatch = useAppDispatch();

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

    setTimeout(() => {
      setIsLoading(false);
      ref.current?.classList.remove("hidden");
    }, 1500);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [category]);

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
        <ul className="product-list__skeleton">{isLoading && <Skeleton />}</ul>
        {/* <ul ref={ref} className="product-list__wrapper">
          {prodData.map((prod) => {
            if (category === "전체") {
              return (
                <li key={prod.key} className="product-list__item">
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
                  <div className="product-list__item--info">
                    <p>{prod.category}</p>
                    <p>{prod.name}</p>
                    <strong>
                      <p>{prod.price}원</p>
                    </strong>
                  </div>
                </li>
              );
            } else {
              if (prod.category === category) {
                return (
                  <li key={prod.key} className="product-list__item">
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
                    <div className="product-list__item--info">
                      <p>{prod.category}</p>
                      <p>{prod.name}</p>
                      <strong>
                        <p>{prod.price}원</p>
                      </strong>
                    </div>
                  </li>
                );
              }
            }
          })}
        </ul> */}
        <CustomProdList ref={ref} category={category} prodData={prodData} />
      </main>
    </>
  );
};

export default Category;
