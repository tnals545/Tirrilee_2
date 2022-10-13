import Link from "next/link";
import { useEffect, useRef } from "react";
import { ProdListState, ProdState } from "redux/prodReducer";
import store from "redux/store";

export const useDivClick = (products: ProdListState) => {
  const prodRef = useRef<HTMLDivElement>(null);
  let prodInfo = {};
  const onClick = () => {
    products.map((prod) => {
      if (Number(prodRef.current?.classList[1]) === prod.key) {
        prodInfo = prod;
        console.log(prodInfo);
      } else {
        console.log(prodRef.current?.classList[1]);
      }
    });
  };
  useEffect(() => {
    if (prodRef.current) {
      prodRef.current.addEventListener("click", onClick);
    }
    return () => {
      if (prodRef.current) {
        prodRef.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return { prodRef, prodInfo };
};
