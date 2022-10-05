import NavBar from "components/Nav_Bar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProdUploadOrEdit from "components/ProdUploadOrEdit";
export default function ProdDetails() {
  // 내가 등록한 상품 삭제/수정 시 확인팝업 뜨기
  // const [edit, setEdit] = useState(true);
  return (
    <>
      <NavBar />
      <FontAwesomeIcon icon={faArrowLeftLong} />
      <Image src="/ecobag/ecobag_0.png" alt="ecobag" width={763} height={763} />
      <div className="prod-details__short-info">
        <span>에코백</span>
        <span>깔끔하고 이쁜 화이트 컬러 에코백</span>
        <span>10,000원</span>
      </div>
      <div className="prod-details__detail-info">
        <h4>상품 설명</h4>
        <span>
          안녕하세요. 티릴리 온보딩 시스템을 위한 디자인입니다. 상품에 대한
          자세한 설명을 적어주세요. 상품에 대한 설명이 나타나는 공간입니다. 설명
          내용이 나타납니다.
          <br />
          티릴리 온보딩 시스템을 위한 디자인입니다. 상품에 대한 자세한 설명을
          적어주세요. 티릴리 온보딩 시스템을 위한 디자인입니다. 상품에 대한
          자세한 설명을 적어주세요. 티릴리 온보딩 시스템을 위한 디자인입니다.
          상품에 대한 자세한 설명을 적어주세요.
        </span>
      </div>
      <div className="prod-details__seller">
        <h4>판매자</h4>
        {/* 판매자 프로필 */}
      </div>
      {/* 내가 등록한 상품 ? 삭제/수정 버튼 : null */}
      {/* <ProdUploadOrEdit edit={edit} /> */}
    </>
  );
}
