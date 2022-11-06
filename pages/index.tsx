import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import Title from "components/Title";

import {
  addEmail,
  addPassword,
  isLogin,
  addNickName,
  editAllUserState,
} from "redux/userReducer";
import store from "redux/store";
import { useAppDispatch } from "redux/hooks";
import { addUser, editUser, findIsSameTrue } from "redux/dataReducer";

import { Container } from "styles/styled-components/Container";
import { Button } from "styles/styled-components/Button";
import { Input } from "styles/styled-components/Input";
import { Span } from "styles/styled-components/Span";
import { Div } from "styles/styled-components/Div";

interface Password {
  type: string;
  visible: boolean;
}

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const [pwType, setPwType] = useState<Password>({
    type: "password",
    visible: false,
  });
  const [emailList, setEmailList] = useState<string[]>([]);

  const onLoginClick = (e: any) => {
    const email = emailRef.current?.value;
    const pw = pwRef.current?.value;

    if (email && pw) {
      if (emailList.includes(email) === true) {
        store.getState().data.users.forEach((user) => {
          if (user.email === email && user.password === pw) {
            dispatch(editAllUserState(user));
            dispatch(isLogin(true));
            dispatch(editUser(store.getState().userInfo));
            dispatch(findIsSameTrue(store.getState().userInfo.email));
          } else if (user.email === email && user.password !== pw) {
            alert("이미 가입된 아이디입니다. \n비밀번호를 확인해 주세요 :)");
            e.preventDefault();
          }
        });
      } else if (emailList.includes(email) === false) {
        dispatch(addEmail(email));
        dispatch(addPassword(pw));
        dispatch(isLogin(true));
        dispatch(addNickName(email));
        dispatch(addUser(store.getState().userInfo));
        dispatch(findIsSameTrue(store.getState().userInfo.email));
      }
    } else {
      alert("아이디 또는 비밀번호를 입력해주세요 :)");
      e.preventDefault();
    }
    console.log(emailList);
    console.log(store.getState());
  };

  // 비밀번호 보기/숨기기
  const handlePwType = () => {
    if (!pwType.visible) {
      setPwType({ type: "text", visible: true });
    } else {
      setPwType({ type: "password", visible: false });
    }
  };

  useEffect(() => {
    setEmailList([]);
    store.getState().data.users.forEach((user) => {
      setEmailList([...emailList, user.email]);
    });
  }, []);

  return (
    <>
      <Title title="Login" />
      <Container page="login">
        <Div purpose="login" className="login__header">
          <Image src="/tirrilee-logo.png" alt="logo" width={270} height={75} />
        </Div>
        <form>
          <Div purpose="login">
            <Span color="lightGray" size="fontSemiRegular" bold="500">
              아이디
            </Span>
            <Input
              ref={emailRef}
              id="id"
              type="email"
              placeholder="이메일 아이디를 입력하세요."
              required
            />
          </Div>
          <Div purpose="login">
            <Span color="lightGray" size="fontSemiRegular" bold="500">
              비밀번호
            </Span>
            <Input
              ref={pwRef}
              id="pw"
              type={pwType.type}
              placeholder="비밀번호를 입력하세요."
              required
            />
            <Span onClick={handlePwType} className="login__password-visible">
              {pwType.visible ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </Span>
          </Div>
          <Link href={"/prod-list/[category]"} as="/prod-list/전체">
            <Button onClick={onLoginClick} purpose="complete" color="bgBlue">
              로그인
            </Button>
          </Link>
        </form>
      </Container>
    </>
  );
};

export default Login;
