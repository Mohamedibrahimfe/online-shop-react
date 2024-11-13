import { useState, useEffect } from "react";
import { CallApi } from "./CallApi";
const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await CallApi.get(endPoint);
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [endPoint]);
  return { data, loading, error };
};
export default useFetch;
