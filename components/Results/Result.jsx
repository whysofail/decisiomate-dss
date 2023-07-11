import React from "react";
import ResultList from "./ResultList";
import NormalizedList from './NormalizedList'
import WeghtedList from "./WeghtedList";
import SortedList from "./SortedList";
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
    <div className="flex flex-col gap-4">
      <div>
      <ResultList data={data} />
      </div>
      <div>
        <NormalizedList data={data}/>
      </div>
      <div>
        <WeghtedList data={data}/>
      </div>
      <div>
        <SortedList data={data}/>
      </div>
    </div>
  );
};

export default Result;
