import { useState, useEffect, useRef } from "react";
import { throttle } from "../utils";

const useWindowScroll = () => {
  const [scroll, setScroll] = useState(0);
  const prevScroll = useRef(scroll);

  useEffect(() => {
    const updateWindowScroll = throttle(() => {
      setScroll(window.scrollY);
    }, 100);

    const updatePrevScrollPos = throttle(() => {
      prevScroll.current = window.scrollY;
    }, 300);

    window.addEventListener("scroll", updateWindowScroll);
    window.addEventListener("scroll", updatePrevScrollPos);
    updateWindowScroll();
    updatePrevScrollPos();

    return () => {
      window.removeEventListener("scroll", updateWindowScroll);
      window.removeEventListener("scroll", updatePrevScrollPos);
    };
  }, []);
  return { scroll, prevScroll };
};
export default useWindowScroll;
