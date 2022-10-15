import NavBar from "components/Nav_Bar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { ProdState } from "redux/prodReducer";
import { useAppSelector } from "redux/hooks";
import FindIdx from "components/FindIdx";

const ProdDetails = ({ router: { query } }: any) => {
  const prodInfo: ProdState = JSON.parse(query.prodInfo);
  const [userNick, setUserNick] = useState<string>();

  const dataState = useAppSelector((state) => state.data);

  useEffect(() => {
    const isLoginIdx = FindIdx();
    setUserNick(dataState.users[isLoginIdx].nickname);
  }, []);
  // 내가 등록한 상품 삭제/수정 시 확인팝업 뜨기
  // const [edit, setEdit] = useState(true);
  return (
    <>
      <NavBar />
      <FontAwesomeIcon icon={faArrowLeftLong} />
      <Image
        src={prodInfo.src}
        alt={prodInfo.category}
        width={763}
        height={763}
      />
      <div className="prod-details__short-info">
        <span>{prodInfo.category}</span>
        <span>{prodInfo.name}</span>
        <span>{prodInfo.price}원</span>
      </div>
      <div className="prod-details__detail-info">
        <h4>상품 설명</h4>
        <span>{prodInfo.description}</span>
      </div>
      <div className="prod-details__seller">
        {dataState.products.map(
          (prod) =>
            prod.key === prodInfo.key && <h4 key={prod.key}>{userNick}</h4>
        )}
        {/* 판매자 프로필 */}
      </div>
      {/* 내가 등록한 상품 ? 삭제/수정 버튼 : null */}
      {/* <ProdUploadOrEdit edit={edit} /> */}
    </>
  );
};

export default withRouter(ProdDetails);
