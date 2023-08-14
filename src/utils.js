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
    animation.top = "-10%";
  }

  return animation;
};

export const requestExecuter = async (request) => {
  let data;
  try {
    data = await request;
  } catch (error) {
    throw new Error(
      "Server Error: Keep refreshing this page. We will be back soon!"
    );
  }

  return data;
};
