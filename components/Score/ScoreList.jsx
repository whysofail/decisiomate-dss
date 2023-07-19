import ResultList from "../Results/ResultList";
import ScoreUpdate from "./ScoreUpdate";
import React from 'react'
import Link from "next/link";

const getScore = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}` + "/score", {
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  };

const ScoreList = async () => {
    const {data} = await getScore();
  return (
    <div className="flex flex-col">
        {!data.length > 0 ?'Data empty' : 
        <ResultList data={data} inner={[ScoreUpdate]}/>
        }
        <div className="place-self-end pt-5">
        <Link href={'/results'} className="btn btn-neutral">Calculate</Link>
        </div>
    </div>
  )
}

export default ScoreList