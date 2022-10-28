import Image from "next/image";
import router from "next/router";
import { useState, useEffect } from "react";
import { delProd } from "redux/dataReducer";
import { isDelete } from "redux/etcReducer";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import store from "redux/store";
import { StyledDiv } from "./styled-components/Styled";

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
    <StyledDiv className={store.getState().etc.alertClass}>
      <p className="isDelete__text--bold">정말 삭제하시겠습니까?</p>
      <p className="isDelete__text--gray">등록한 상품이 삭제됩니다.</p>
      <StyledDiv className="delete-alert__button">
        <button onClick={onClick} className="isDelete__cancel">
          취소하기
        </button>
        <button onClick={onClick} className="isDelete__delete">
          삭제하기
        </button>
      </StyledDiv>
    </StyledDiv>
  );
};

export default IsDelete;
