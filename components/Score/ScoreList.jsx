import ResultList from "../Results/ResultList";
import ScoreUpdate from "./ScoreUpdate";
import React from 'react'

const getScore = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}` + "/score", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  };

const ScoreList = async () => {
    const {data} = await getScore();
  return (
    <div>
        <ResultList data={data} inner={[ScoreUpdate]}/>
    </div>
  )
}

export default ScoreList