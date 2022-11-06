import { useEffect, useState } from "react";
import Image from "next/image";
import router from "next/router";

import NavBar from "components/Nav_Bar";
import Title from "components/Title";
import IsDelete from "components/IsDelete";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import store from "redux/store";
import { isDelete } from "redux/etcReducer";

import { Container } from "styles/styled-components/Container";
import { Button } from "styles/styled-components/Button";
import { Div } from "styles/styled-components/Div";
import { Span } from "styles/styled-components/Span";

const ProdDetails = () => {
  const prodDetail = useAppSelector((state) => state.etc.recentProd);
  const dispatch = useAppDispatch();

  const [userIdx, setUserIdx] = useState<number>(0);
  const [prodSeller, setProdSeller] = useState<string>();
  const [isDel, setIsDel] = useState<boolean>();

  store.subscribe(() => {
    setIsDel(store.getState().etc.isDelete);
  });

  useEffect(() => {
    store.getState().data.users.map((user, index) => {
      if (user.email === prodDetail.seller) {
        setProdSeller(user.nickname);
        setUserIdx(index);
      }
    });
  }, []);

  return (
    <>
      <Title title="Product Detail" />
      <NavBar />
      {isDel && <IsDelete />}
      <Container page="prodDetails">
        <Div purpose="prodDetails" className="prod-details__back">
          <Image
            onClick={() => router.back()}
            src="/left.png"
            alt="back"
            width={45}
            height={45}
          />
        </Div>
        <Div purpose="prodDetails" className="prod-details__prod-image">
          <Image
            src={prodDetail.src}
            alt={prodDetail.category}
            width={1280}
            height={1024}
          />
        </Div>
        <Div purpose="prodDetails" className="prod-details__short-info">
          <Span purpose="prodInfo" color="blue" className="category">
            {prodDetail.category}
          </Span>
          <Span purpose="prodInfo" size="fontSemiMedium">
            {prodDetail.name}
          </Span>
          <Span purpose="prodInfo" size="fontMedium" bold="800">
            {prodDetail.price}원
          </Span>
        </Div>
        <Div purpose="prodDetails" className="prod-details__detail-info">
          <Span size="fontMiddle" bold="700">
            상품 설명
          </Span>
          <Span size="fontRegular" color="lightGray">
            {prodDetail.description}
          </Span>
        </Div>
        {prodDetail.isSame ? (
          <>
            <Div purpose="prodDetails" className="prod-details__button--edit">
              <Button
                onClick={() => dispatch(isDelete(true))}
                purpose="detail"
                color="bgWhite"
                size="fontRegular"
              >
                삭제하기
              </Button>
              <Button
                onClick={() => {
                  router.push("/prod-edit");
                }}
                purpose="detail"
                color="textBlue"
                size="fontRegular"
              >
                수정하기
              </Button>
            </Div>
          </>
        ) : (
          <>
            <Div
              purpose="prodDetails"
              key={prodDetail.key}
              className="prod-details__seller"
            >
              <Span size="fontMiddle" bold="700">
                판매자
              </Span>
              <Div purpose="prodDetails" className="prod-details__seller-info">
                <Image
                  className="profile-img__preview"
                  src={store.getState().data.users[userIdx].profileImg}
                  alt="preview-img"
                  width={50}
                  height={50}
                />
                <Span size="fontSemiRegular" color="lightGray">
                  {prodSeller}
                </Span>
              </Div>
            </Div>
          </>
        )}
      </Container>
    </>
  );
};

export default ProdDetails;
