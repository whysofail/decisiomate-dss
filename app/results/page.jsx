import React from "react";
import Result from "@/components/Results/Result";

export const metadata = {
  title: 'DecisioMate | Results'
}
const Results = () => {
  return (
    <>
      <div className="self-start">
        <h1 className="text-3xl font-semibold">Here&apos;s your Results</h1>
        <small></small>
      </div>
      <div className="">
        <Result />
      </div>
    </>
    
  );
};

export default Results;
