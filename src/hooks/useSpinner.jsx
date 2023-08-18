import { useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function useSpinner() {
  const { state } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (state !== "idle") {
      setIsLoading(true);
    }
  }, [state]);

  return isLoading;
}
