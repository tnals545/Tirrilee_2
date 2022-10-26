import Image from "next/image";
import { forwardRef, ForwardedRef } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { editAllProdState, ProdState } from "redux/prodReducer";

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
          if (prod.category === props.category) {
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
    </ul>
  );
};

export const CustomProdList = forwardRef(CustomUl);
