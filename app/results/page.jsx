import React from "react";
import Result from "@/components/Results/Result";
const Results = () => {
  return (
    <div className="w-full sm:w-[50%] self-center">
      <div className="self-start">
        <h1 className="text-3xl font-semibold">Here&apos;s your Results</h1>
        <small>Add Score to be calculated.</small>
      </div>
      <div className="">
        <Result />
      </div>
    </div>
  );
};

export default Results;
