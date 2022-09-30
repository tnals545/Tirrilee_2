import { useEffect, useRef } from "react";

export const useDivClick = (onClick: any) => {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
      console.log(element.current);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};
