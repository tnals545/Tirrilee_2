import NavBar from "components/Nav_Bar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import store from "redux/store";
import router from "next/router";
import Title from "components/Title";
import { delProd } from "redux/dataReducer";
import IsDelete from "components/IsDelete";
import { isDelete } from "redux/etcReducer";
import { StyledDiv } from "styles/Styled";
import Container from "styles/styled-components/Container";
import Button from "styles/styled-components/Button";

const ProdDetails = () => {
  const prodDetail = useAppSelector((state) => state.prodInfo);
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
  }, [prodDetail.seller]);
  // 내가 등록한 상품 삭제/수정 시 확인팝업 뜨기
  // const [edit, setEdit] = useState(true);
  return (
    <>
      <Title title="Product Detail" />
      <NavBar />
      <Container page="prod-details width-large-prod">
        <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeftLong} />
        <Image
          src={prodDetail.src}
          alt={prodDetail.category}
          width={763}
          height={763}
        />
        <StyledDiv className="prod-details__short-info">
          <span>{prodDetail.category}</span>
          <span>{prodDetail.name}</span>
          <span>{prodDetail.price}원</span>
        </StyledDiv>
        <StyledDiv className="prod-details__detail-info">
          <h4>상품 설명</h4>
          <span>{prodDetail.description}</span>
        </StyledDiv>
        {prodDetail.isSame ? (
          <>
            <StyledDiv key={prodDetail.key} className="prod-details__seller">
              <Image
                className="profile-img__preview"
                src={store.getState().data.users[userIdx].profileImg}
                alt="preview-img"
                width={100}
                height={100}
              />
              {prodSeller}
            </StyledDiv>
            <StyledDiv className="prod-details__button--edit">
              <Button
                onClick={() => dispatch(isDelete(true))}
                size={"detail"}
                variant={"bgWhite"}
              >
                삭제하기
              </Button>
              <Button
                onClick={() => {
                  router.push("/prod-edit");
                }}
                size={"detail"}
                variant={"textBlue"}
              >
                수정하기
              </Button>
            </StyledDiv>
          </>
        ) : (
          <>
            <StyledDiv key={prodDetail.key} className="prod-details__seller">
              <Image
                className="profile-img__preview"
                src={store.getState().data.users[userIdx].profileImg}
                alt="preview-img"
                width={100}
                height={100}
              />
              {prodSeller}
            </StyledDiv>
          </>
        )}
        <StyledDiv className="prod-details__delete">
          {isDel && <IsDelete />}
        </StyledDiv>
      </Container>
    </>
  );
};

export default ProdDetails;
