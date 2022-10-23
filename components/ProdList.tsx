import NavBar from "components/Nav_Bar";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import store from "redux/store";
import router from "next/router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Title from "components/Title";
import { editAllProdState } from "redux/prodReducer";

const ProdList = (category: any) => {
  const prodData = useAppSelector((state) => state.data.products);
  const dispatch = useAppDispatch();

  const list = () => {
    if (category === "전체") {
      return prodData.map((prod) => {
        return (
          <li key={prod.key} className="item">
            <div>
              <Link href="/prod-details/[key]" as={`/prod-details/${prod.key}`}>
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
      });
    } else if (category === "에코백") {
      return prodData.map((prod) => {
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
      });
    } else if (category === "티셔츠") {
      return prodData.map((prod) => {
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
      });
    } else if (category === "기타물품") {
      return prodData.map((prod) => {
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
      });
    }
  };

  return <>{list !== undefined && list}</>;
};

export default ProdList;
