import React, { useRef, useState, useEffect } from "react";
import router from "next/router";
import NavBar from "components/Nav_Bar";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "components/Skeleton";
import { editAllProdState } from "redux/prodReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Title from "components/Title";
import { Div } from "styles/styled-components/Div";
import { Span } from "styles/styled-components/Span";
import { Container } from "styles/styled-components/Container";
import { Li } from "styles/styled-components/Li";
import { updateRecentProd } from "redux/etcReducer";

const MyProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countProd, setCountProd] = useState<number>(0);

  // Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  // 해결못함
  const ref = useRef<HTMLUListElement>(null);

  const userData = useAppSelector((state) => state.userInfo);
  const prodData = useAppSelector((state) => state.data.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCountProd(0);
    setIsLoading(true);
    ref.current?.classList.add("hidden");

    let timer = setTimeout(() => {
      setIsLoading(false);
      prodData.forEach((prod) => {
        if (prod.seller === userData.email) {
          setCountProd((countProd) => countProd + 1);
        }
      });
      ref.current?.classList.remove("hidden");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Title title="My Product List" />
      <NavBar menu="mypage" />
      <Div purpose="myProdList">
        <Div purpose="myProdList" className="my-products__header">
          <Div purpose="prodDetails" className="prod-details__back">
            <Image
              onClick={() => router.back()}
              src="/left.png"
              alt="back"
              width={32}
              height={32}
            />
          </Div>
          <Span bold="800" size="fontSemiLarge">
            등록한 상품 목록
          </Span>
          <Span bold="800" size="fontSemiMedium">
            총{" "}
            <Span bold="800" size="fontSemiMedium" color="blue">
              {countProd}개
            </Span>
            의 상품
          </Span>
        </Div>

        <Div purpose="myProdList" className="my-products__list">
          <ul className="product-list__skeleton">
            {isLoading && <Skeleton />}
          </ul>
          <ul ref={ref} className="product-list__wrapper">
            {prodData.map((prod) => {
              if (prod.seller === userData.email) {
                return (
                  <Li key={prod.key} className="product-list">
                    <Div purpose="prodList">
                      <Link
                        href="/prod-details/[key]"
                        as={`/prod-details/${prod.key}`}
                      >
                        <Image
                          src={prod.src}
                          alt={prod.name}
                          onClick={() => dispatch(updateRecentProd(prod))}
                          width={274}
                          height={274}
                        />
                      </Link>
                      <Span
                        purpose="prodInfo"
                        color="blue"
                        className="category"
                      >
                        {prod.category}
                      </Span>
                      <Span purpose="prodInfo" size="fontRegular" color="gray">
                        {prod.name}
                      </Span>
                      <Span purpose="prodInfo" size="fontSemiMedium" bold="800">
                        {prod.price}원
                      </Span>
                    </Div>
                  </Li>
                );
              }
            })}
          </ul>
        </Div>
      </Div>
    </>
  );
};
export default MyProductsList;
