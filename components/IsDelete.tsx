import Image from "next/image";
import { useState, useEffect } from "react";

function ToastNotification(props) {
  useEffect(() => {
    let timer = setTimeout(() => {
      props.setToastState(false); // 2초 뒤, toastState가 false가 되면서 알림창이 사라진다
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="toast-alert">
      <Image alt="" src="img/alert.png" />
      <p>입력하지 않은 칸이 있습니다!</p>
    </div>
  );
}

export default ToastNotification;
