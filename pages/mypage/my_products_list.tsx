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
          setCountProd(countProd + 1);
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
      <NavBar />
      <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeftLong} />
      <h1>등록한 상품 목록</h1>
      <h3>
        총 <span>{countProd}개</span>의 상품
      </h3>

      <div className="my_products_list">
        <ul className="product-list__skeleton">{isLoading && <Skeleton />}</ul>
        <ul className="product-list__wrapper">
          {prodData.map((prod) => {
            if (prod.seller === userData.email) {
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
          })}
        </ul>
      </div>
    </>
  );
};
export default MyProductsList;
