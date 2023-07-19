import React from "react";
import ScoreList from "@/components/Score/ScoreList";
const Score = () => {
  return (
    <>
      <div className="self-start">
        <h1 className="text-3xl font-semibold">Score</h1>
        <small>Score details</small>
      </div>
      <div className="flex flex-col">
        <ScoreList />
      </div>
    </>
  );
};

export default Score;
