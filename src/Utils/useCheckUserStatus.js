import { useEffect, useState } from "react";

const useCheckUserStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = () => {
    window.addEventListener("online", () => setStatus(true));
    window.addEventListener("offline", () => setStatus(false));
  };
  return status;
};

export default useCheckUserStatus;
