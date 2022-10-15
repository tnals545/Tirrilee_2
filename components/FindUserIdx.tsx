import { useAppSelector } from "redux/hooks";
import { useState } from "react";

const FindUserIdx = (email: string | undefined) => {
  const userData = useAppSelector((state) => state.users);
  const emailList: any[] = [];
  const [idx, setIdx] = useState<number | boolean>();

  // userData.forEach((user) => {
  //   emailList.push(user.user.email);
  //   if (emailList.includes(email)) {
  //     setIdx(emailList.indexOf(email));
  //   } else {
  //     setIdx(false);
  //   }
  // });
  return idx;
};

export default FindUserIdx;
