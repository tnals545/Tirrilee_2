import Image from "next/image";
import router from "next/router";
import { useState, useEffect } from "react";
import { delProd } from "redux/dataReducer";
import { isDelete } from "redux/etcReducer";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import store from "redux/store";
import { Button } from "styles/styled-components/Button";
import { Container } from "styles/styled-components/Container";
import { Div } from "styles/styled-components/Div";
import { Span } from "styles/styled-components/Span";

const IsDelete = () => {
  const prodDetail = useAppSelector((state) => state.etc.recentProd);
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
    <Container page="deleteAlert">
      <Div purpose="deleteAlert">
        <Div purpose="deleteAlert" className="isDelete__text">
          <Span size="fontSemiMedium" bold="700">
            정말 삭제하시겠습니까?
          </Span>
          <Span size="fontSemiRegular" color="lightGray">
            등록한 상품이 삭제됩니다.
          </Span>
        </Div>
        <Div purpose="deleteAlert" className="isDelete__button">
          <Button
            onClick={onClick}
            size="fontRegular"
            purpose="delete"
            color="bgWhite"
          >
            취소하기
          </Button>
          <Button
            onClick={onClick}
            size="fontRegular"
            purpose="delete"
            color="bgBlue"
          >
            삭제하기
          </Button>
        </Div>
      </Div>
    </Container>
  );
};

export default IsDelete;
