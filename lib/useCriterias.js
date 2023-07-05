import fetcher from "./fetcher";
import useSWR from "swr";

const useCriterias =  () => {
  const { data, error, isLoading, mutate } =  useSWR(
    `/api/criterias/`,
    fetcher
  );

  return {
    criterias: data,
    isLoading,
    isError: error,
    mutate,
  };
};

export default useCriterias;
