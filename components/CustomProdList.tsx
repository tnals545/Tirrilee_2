import Image from "next/image";
import { forwardRef, ForwardedRef } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { editAllProdState, ProdState } from "redux/prodReducer";
import { StyledLi } from "styles/styled-components/StyledLi";
import { StyledSpan } from "styles/styled-components/Span";
import { StyledDiv } from "styles/styled-components/Div";

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
            <StyledLi key={prod.key} className="product-list">
              <StyledDiv purpose="prodList">
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
                <StyledSpan
                  purpose="prodInfo"
                  color="blue"
                  className="category"
                >
                  {prod.category}
                </StyledSpan>
                <StyledSpan purpose="prodInfo" color="gray" className="name">
                  {prod.name}
                </StyledSpan>
                <StyledSpan purpose="prodInfo" className="price">
                  {prod.price}원
                </StyledSpan>
              </StyledDiv>
            </StyledLi>
          );
        } else {
          if (prod.category === props.category) {
            return (
              <StyledLi key={prod.key} className="product-list">
                <StyledDiv purpose="prodList">
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
                  <StyledSpan
                    purpose="prodInfo"
                    color="blue"
                    className="category"
                  >
                    {prod.category}
                  </StyledSpan>
                  <StyledSpan purpose="prodInfo" className="name">
                    {prod.name}
                  </StyledSpan>
                  <StyledSpan purpose="prodInfo" className="price">
                    {prod.price}원
                  </StyledSpan>
                </StyledDiv>
              </StyledLi>
            );
          }
        }
      })}
    </ul>
  );
};

export const CustomProdList = forwardRef(CustomUl);
