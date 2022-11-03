import Image from "next/image";
import router from "next/router";
import { useState, useEffect } from "react";
import { delProd } from "redux/dataReducer";
import { isDelete } from "redux/etcReducer";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import store from "redux/store";
import Button from "styles/styled-components/Button";
import Container from "styles/styled-components/Container";

const IsDelete = () => {
  const prodDetail = useAppSelector((state) => state.prodInfo);
  const dispatch = useAppDispatch();

  const onClick = (e: any) => {
    const {
      target: { textContent },
    } = e;
    if (textContent === "삭제하기") {
      dispatch(delProd(prodDetail.key));
      dispatch(isDelete(false));
      router.back();
    } else {
      dispatch(isDelete(false));
    }
  };

  return (
    <Container page="delete-alert">
      <div className="delete-alert__text">
        <p className="isDelete__text--bold">정말 삭제하시겠습니까?</p>
        <p className="isDelete__text--gray">등록한 상품이 삭제됩니다.</p>
      </div>
      <div className="delete-alert__button">
        <Button onClick={onClick} size={"detail"} variant={"bgWhite"}>
          취소하기
        </Button>
        <Button onClick={onClick} size={"detail"} variant={"bgBlue"}>
          삭제하기
        </Button>
      </div>
    </Container>
  );
};

export default IsDelete;
