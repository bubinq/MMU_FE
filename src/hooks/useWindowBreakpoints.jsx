import { useEffect, useState } from "react";

export default function useWindowBreakpoints(breakpoints) {
  const [steps, setSteps] = useState(
    window.innerWidth < breakpoints.tablet ? 1 : window.innerWidth < breakpoints.desktop ? 2 : 3
  );
  useEffect(() => {
    const mobileQuery = window.matchMedia(`screen and (max-width: ${breakpoints.tablet - 1}px)`);
    const tabletQuery = window.matchMedia(
      `screen and (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`
    );
    const desktopQuery = window.matchMedia(`screen and (min-width: ${breakpoints.desktop}px)`);

    const handleMobileMatch = (event) => {
      if (event.matches) {
        setSteps(1);
      }
    };
    const handleTabletMatch = (event) => {
      if (event.matches) {
        setSteps(2);
      }
    };
    const handleDesktopmatch = (event) => {
      if (event.matches) {
        setSteps(3);
      }
    };
    handleMobileMatch(mobileQuery);
    handleTabletMatch(tabletQuery);
    handleDesktopmatch(desktopQuery);

    mobileQuery.addListener(handleMobileMatch);
    tabletQuery.addListener(handleTabletMatch);
    desktopQuery.addListener(handleDesktopmatch);

    return () => {
      mobileQuery.removeListener(handleMobileMatch);
      tabletQuery.removeListener(handleTabletMatch);
      desktopQuery.removeListener(handleDesktopmatch);
    };
  }, []);
  return steps;
}
