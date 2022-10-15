import NavBar from "components/Nav_Bar";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import store from "redux/store";
import router from "next/router";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Title from "components/Title";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const globalData = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  console.log(globalData);

  useEffect(() => {}, []);

  return (
    <>
      <Title title="Home" />
      <NavBar />
      <header className="product-header">
        <h1>상품 목록</h1>
        <div className="product-list text-bold">
          <span>전체</span>
          <span className="product-list__bar"> </span>
          <Link href={"/prod-list/eco"}>
            <span>에코백</span>
          </Link>
          <span className="product-list__bar"> </span>
          <Link href={"/prod-list/shirts"}>
            <span>티셔츠</span>
          </Link>
          <span className="product-list__bar"> </span>
          <Link href={"/prod-list/etc"}>
            <span>기타물품</span>
          </Link>
        </div>
      </header>

      <main className="product-main">
        {/* 
        - div box 특성 제거해야함 
        - 상품 추가될 때마다 state, props 받아서 생성해주는 컴포넌트 만들기
        */}
        {/* {userData &&
          userData.users.map((user: UserInfoState<ProdListState>) => {
            user.uploadlist?.map((prod) => {
              return (
                <div key={prod.key} className={"product-info"}>
                  <Link
                    href={{
                      pathname: `/prod-details/[key]`,
                      query: { prodInfo: JSON.stringify(prod) },
                    }}
                    as={`/prod-details/${prod.key}`}
                  >
                    <Image
                      id={`${prod.key}`}
                      src={prod.src}
                      alt={prod.name}
                      width={274}
                      height={274}
                    />
                  </Link>
                  <span>{prod.category}</span>
                  <span>{prod.name}</span>
                  <span>{prod.price}원</span>
                </div>
              );
            });
          })} */}
      </main>
    </>
  );
};

export default Home;
