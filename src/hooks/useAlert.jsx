import { useState, useEffect } from "react";

export default function useAlert(serverError, setServerError) {
  const [isAlertVisible, setisAlertVisible] = useState(false);

  useEffect(() => {
    let timerId;
    if (serverError) {
      setisAlertVisible(true);
      timerId = setTimeout(() => {
        setisAlertVisible(false);
        setServerError("");
      }, 5000);
    }
    return () => clearInterval(timerId);
  }, [serverError]);
  return { isAlertVisible };
}
