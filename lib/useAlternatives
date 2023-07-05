import fetcher from "./fetcher";
import useSWR from "swr";

const useAlternatives =  () => {
  const { data, error, isLoading, mutate } =  useSWR(
    `/api/alternatives/`,
    fetcher
  );

  return {
    alternatives: data,
    isLoading,
    isError: error,

  };
};

export default useAlternatives;
