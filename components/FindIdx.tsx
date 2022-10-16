import { useAppSelector } from "redux/hooks";
import { useEffect, useState } from "react";

const FindIdx = () => {
  const data = useAppSelector((state) => state.data);
  const [isLoginIdx, setIsLoginIdx] = useState<number>(-1);

  useEffect(() => {
    data.users.forEach((user, index) => {
      if (user.isLogin === true) {
        setIsLoginIdx(index);
      } else {
        return;
      }
    });
  }, []);
  return isLoginIdx;
};

export default FindIdx;
