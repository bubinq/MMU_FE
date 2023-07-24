export const throttle = (func, delay) => {
  let prevTime = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prevTime > delay) {
      prevTime = now;

      return func(...args);
    }
  };
};

export const shouldNavShow = (scrollDown, isMenuOpened) => {
  const animation = { top: "0%" };

  if (scrollDown > 0 && !isMenuOpened) {
    animation.top = "-20%";
  }

  return animation;
};
