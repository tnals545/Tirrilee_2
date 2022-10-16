import NavBar from "components/Nav_Bar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";

const ProdDetails = () => {
  const prodDatail = useAppSelector((state) => state.data.nowProdInfo);
  // 내가 등록한 상품 삭제/수정 시 확인팝업 뜨기
  // const [edit, setEdit] = useState(true);
  return (
    <>
      <NavBar />
      <FontAwesomeIcon icon={faArrowLeftLong} />
      <Image
        src={prodDatail.src}
        alt={prodDatail.category}
        width={763}
        height={763}
      />
      <div className="prod-details__short-info">
        <span>{prodDatail.category}</span>
        <span>{prodDatail.name}</span>
        <span>{prodDatail.price}원</span>
      </div>
      <div className="prod-details__detail-info">
        <h4>상품 설명</h4>
        <span>{prodDatail.description}</span>
      </div>
      <div className="prod-details__seller">
        {prodDatail.seller}
        {/* 판매자 프로필 */}
      </div>
      {/* 내가 등록한 상품 ? 삭제/수정 버튼 : null */}
      {/* <ProdUploadOrEdit edit={edit} /> */}
    </>
  );
};

export default ProdDetails;
