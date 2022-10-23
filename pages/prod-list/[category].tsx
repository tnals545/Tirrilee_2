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

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<string>("전체");

  const prodData = useAppSelector((state) => state.data.products);
  const categories = useAppSelector((state) => state.data.categories);
  const dispatch = useAppDispatch();

  const onCategoryClick = (e: any) => {
    const {
      target: { textContent },
    } = e;
    setCategory(textContent);
  };

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
          {isLoading && <Skeleton />}
          {prodData.map((prod) => {
            if (category === "전체") {
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
            } else {
              if (prod.category === category) {
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
              }
            }
          })}
        </ul>
      </main>
    </>
  );
};

export default Category;
