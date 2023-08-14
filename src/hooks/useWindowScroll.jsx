import { useState, useEffect, useRef } from "react";
import { throttle } from "../utils";

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState(0);
  const prevScroll = useRef(scroll);

  useEffect(() => {
    const updateWindowScroll = throttle(() => {
      setScroll(window.scrollY);
      if (Math.abs(prevScroll.current - scroll) >= 1) {
        prevScroll.current = scroll;
      }
    }, 5);

    window.addEventListener("scroll", updateWindowScroll);

    updateWindowScroll();

    return () => {
      window.removeEventListener("scroll", updateWindowScroll);
    };
  }, [scroll]);
  return { scroll, prevScroll };
};
