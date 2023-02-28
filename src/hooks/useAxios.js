import { useCallback, useState } from "react";
import { toast } from "react-toastify";

const useAxios = (initialLoading = false) => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async (configObj, applyData) => {
    const p = configObj.config.param;
    setIsLoading(true);
    try {
      const response = await configObj.axiosInstance(configObj.config.url, {
        params: p,
      });
      applyData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(true);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { error, isLoading, fetchData };
};

export default useAxios;
