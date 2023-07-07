import React from "react";
import ResultList from "./ResultList";
import Test from './Test'
const getAlternatives = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/score", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

const Result = async () => {
  const { data } = await getAlternatives();
  return (
    <div>
      <ResultList data={data} />
      <Test data={data} />
    </div>
  );
};

export default Result;
