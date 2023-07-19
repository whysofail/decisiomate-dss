import React from "react";
import ScoreInput from "@/components/ScoreInput/ScoreInput";

export const metadata = {
  title: "DecisioMate | Scores",
};
export const dynamic = "force-dynamic"

const Scores = () => {
  return (
    <>
      <div className="self-start">
        <h1 className="text-3xl font-semibold">
          Assign the criteria scores to each Alternatives
        </h1>
        <small>Add Score to be calculated.</small>
      </div>
      <div className="">
        <ScoreInput />
      </div>
    </>
  );
};

export default Scores;
