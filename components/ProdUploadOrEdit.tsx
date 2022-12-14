import { useEffect, useRef, useState } from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";

import store from "redux/store";
import {
  addSeller,
  addKey,
  addSrc,
  addCategory,
  addName,
  addPrice,
  addDescription,
  prodInfoReset,
  editAllProdState,
  addBeforeKey,
} from "redux/prodReducer";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addProd, editProduct } from "redux/dataReducer";
import { updateRecentProd } from "redux/etcReducer";

import { Container } from "styles/styled-components/Container";
import { Input, Textarea } from "styles/styled-components/Input";
import { Div } from "styles/styled-components/Div";
import { Button } from "styles/styled-components/Button";
import { Span } from "styles/styled-components/Span";

interface propsType {
  work: string;
}

const ProdUploadOrEdit = ({ work }: propsType) => {
  const [btnActive, setBtnActive] = useState<string>();
  const [render, setRender] = useState(false);
  const keyList: number[] = [];

  const nameInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const detailInput = useRef<HTMLTextAreaElement>(null);

  const categories = useAppSelector((state) => state.etc.categories.slice(1));
  const dispatch = useAppDispatch();

  const priceToUnit = (price: string) => {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (e: any) => {
    const {
      target: { className, value },
    } = e;
    if (className === "name" && nameInput.current) {
      nameInput.current.value = value;
    } else if (className === "price" && priceInput.current) {
      priceInput.current.value = value;
    } else if (className === "detail" && detailInput.current) {
      detailInput.current.value = value;
    }
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'lastModified')
    // ???????????? ???????????? ???????????? ?????? ????????? ????????? ??????????????? ????????? ????????? ??? ???????????? ??????
    // -> reader ????????? fileBlob prop??? ?????? ????????? ??????????????? ???????????? ??????
    if (reader && fileBlob) {
      dispatch(addKey(fileBlob.lastModified));
      reader.readAsDataURL(fileBlob);
      return new Promise<void>((resolve) => {
        reader.onload = () => {
          dispatch(addSrc(reader.result));
          dispatch(addSeller(store.getState().userInfo.email));
          setRender((prev) => !prev);
          resolve();
        };
      });
    }
  };

  const onClickCategory = (e: any) => {
    const {
      target: { textContent, value },
    } = e;
    dispatch(addCategory(textContent));
    setBtnActive(value); // ?????? ????????? ???????????????(?????????)
  };

  const onClickComplete = (e: any) => {
    if (
      keyList.includes(store.getState().prodInfo.key) === true &&
      work === "upload"
    ) {
      alert("?????? ????????? ???????????????.");
      e.preventDefault();
    } else {
      {
        nameInput.current && dispatch(addName(nameInput.current.value));
      }
      {
        priceInput.current &&
          dispatch(addPrice(priceToUnit(priceInput.current.value)));
      }
      {
        detailInput.current &&
          dispatch(addDescription(detailInput.current.value));
      }
      if (work === "edit") {
        dispatch(editProduct(store.getState().prodInfo));
        dispatch(updateRecentProd(store.getState().prodInfo));
      } else if (work === "upload") {
        dispatch(addProd(store.getState().prodInfo));
      }
      dispatch(prodInfoReset());
    }
  };

  store.getState().data.products.forEach((prod) => {
    keyList.push(prod.key);
  });

  useEffect(() => {
    if (work === "edit") {
      dispatch(editAllProdState(store.getState().etc.recentProd));
      if (nameInput.current) {
        nameInput.current.value = store.getState().prodInfo.name;
      }
      if (priceInput.current) {
        priceInput.current.value = store
          .getState()
          .prodInfo.price.replace(/,/g, "");
      }
      if (detailInput.current) {
        detailInput.current.value = store.getState().prodInfo.description;
      }
      setBtnActive(store.getState().prodInfo.category);
      dispatch(addSrc(store.getState().prodInfo.src));
      dispatch(addBeforeKey(store.getState().prodInfo.key));
    }
  }, []);

  return (
    <Container page="prodUpload">
      <Div purpose="prodUpload" className="prod-upload__header">
        <Div purpose="prodDetails" className="prod-details__back">
          <Image
            onClick={() => router.back()}
            src="/left.png"
            alt="back"
            width={45}
            height={45}
          />
        </Div>
        {work === "edit" ? (
          <Span size="fontMoreMedium" bold="700">
            ????????????
          </Span>
        ) : null}
      </Div>
      <Div purpose="prodUpload" className="prod-upload__main">
        <Div className="prod-upload__preview">
          <label htmlFor="file">
            {store.getState().prodInfo.src ? (
              <Image
                src={store.getState().prodInfo.src}
                alt="preview-img"
                width={500}
                height={500}
              />
            ) : (
              <Div className="preview-space">
                <Image
                  src="/camera.png"
                  alt="preview-img"
                  width={72}
                  height={72}
                />
              </Div>
            )}
          </label>
          <input
            id="file"
            className="hidden"
            type="file"
            onChange={(e: any) => {
              encodeFileToBase64(e.target.files[0]);
            }}
            accept="image/*"
            required
          />
        </Div>
        <Div className="prod-upload__info">
          <Div>
            <Div className="prod-upload__info-text">
              <Span size="fontSemiRegular" color="lightGray">
                ?????????
              </Span>
              <Input
                ref={nameInput}
                onChange={handleInputChange}
                className="prod-info name"
                type="text"
                placeholder="???????????? ??????????????????."
                required
              />
            </Div>
            <Div className="prod-upload__info-text">
              <Span size="fontSemiRegular" color="lightGray">
                ??????
              </Span>
              <Input
                ref={priceInput}
                onChange={handleInputChange}
                className="prod-info price"
                type="number"
                placeholder="????????? ??????????????????."
                required
              />
            </Div>
            <Div className="prod-upload__info-text">
              <Span size="fontSemiRegular" color="lightGray">
                ?????? ??????
              </Span>
              <Textarea
                ref={detailInput}
                onChange={handleInputChange}
                name="prodDetail"
                className="prod-info detail"
                placeholder="????????? ?????? ????????? ??????????????????."
                required
              ></Textarea>
            </Div>
          </Div>
          <Div className="prod-upload__info-category">
            <Span size="fontSemiRegular">????????????</Span>
            <Div className="prod-upload__info-category--button">
              {categories.map((category) => {
                return (
                  <Button
                    key={category}
                    value={category}
                    purpose="category"
                    color={`${category === btnActive ? "bgBlue" : "bgWhite"}`}
                    onClick={onClickCategory}
                  >
                    {category}
                  </Button>
                );
              })}
            </Div>
          </Div>
          <Div className="prod-upload__info-button">
            {work === "edit" ? (
              <Link
                href="/prod-details/[key]"
                as={`/prod-details/${store.getState().prodInfo.key}`}
              >
                <Button
                  purpose="complete"
                  color="bgBlue"
                  onClick={onClickComplete}
                >
                  ????????????
                </Button>
              </Link>
            ) : (
              <Link href="/prod-list/??????">
                <Button
                  purpose="complete"
                  color="bgBlue"
                  onClick={onClickComplete}
                >
                  ??????
                </Button>
              </Link>
            )}
          </Div>
        </Div>
      </Div>
    </Container>
  );
};

export default ProdUploadOrEdit;
