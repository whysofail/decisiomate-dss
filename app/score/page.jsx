import React from "react";
import Score from "@/components/Score/Score";

export const metadata = {
  title: "DecisioMate | Scores",
};

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
        <Score />
      </div>
    </>
  );
};

export default Scores;
