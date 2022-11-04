import Image from "next/image";
import { forwardRef, ForwardedRef } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { editAllProdState, ProdState } from "redux/prodReducer";
import { Li } from "styles/styled-components/Li";
import { Span } from "styles/styled-components/Span";
import { Div } from "styles/styled-components/Div";
import { updateRecentProd } from "redux/etcReducer";

interface Props {
  category: string;
  prodData: ProdState[];
}

const CustomUl = (props: Props, ref: ForwardedRef<HTMLUListElement>) => {
  const dispatch = useAppDispatch();

  return (
    <ul ref={ref} className="product-list__wrapper">
      {props.prodData.map((prod) => {
        if (props.category === "전체") {
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
                <Span purpose="prodInfo" color="blue" className="category">
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
        } else {
          if (prod.category === props.category) {
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
                      onClick={() => dispatch(editAllProdState(prod))}
                      width={274}
                      height={274}
                    />
                  </Link>
                  <Span purpose="prodInfo" color="blue" className="category">
                    {prod.category}
                  </Span>
                  <Span purpose="prodInfo" size="fontRegular" color="gray">
                    {prod.name}
                  </Span>
                  <Span
                    purpose="prodInfo"
                    size="fontSemiMedium"
                    className="price"
                  >
                    {prod.price}원
                  </Span>
                </Div>
              </Li>
            );
          }
        }
      })}
    </ul>
  );
};

export const CustomProdList = forwardRef(CustomUl);
