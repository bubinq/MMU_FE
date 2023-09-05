import { useEffect, useState } from "react";

export default function useWindowBreakpoints() {
  const [steps, setSteps] = useState(
    window.innerWidth < 768 ? 1 : window.innerWidth < 1088 ? 2 : 3
  );
  useEffect(() => {
    const mobileQuery = window.matchMedia("screen and (max-width: 767px)");
    const tabletQuery = window.matchMedia(
      "screen and (min-width: 768px) and (max-width: 1087px)"
    );
    const desktopQuery = window.matchMedia("screen and (min-width: 1088px)");

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
