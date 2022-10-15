import { useAppSelector } from "redux/hooks";
import { useState } from "react";

const FindIdx = () => {
  const data = useAppSelector((state) => state.data);
  const [isLoginIdx, setIsLoginIdx] = useState<number>(-1);

  data.users.forEach((user, index) => {
    if (user.isLogin === true) {
      setIsLoginIdx(index);
    }
  });
  return isLoginIdx;
};

export default FindIdx;
