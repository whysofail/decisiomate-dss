import React from "react";
import Criteria from "@/components/Criterias/Criteria";
import Link from "next/link";
const Criterias = () => {
  return (
    <>
      <div className="self-start">
        <h1 className="text-3xl font-semibold">Add your Criteria</h1>
        <small>Add Criteria to be calculated.</small>
      </div>
      <div className="flex flex-col">
        <Criteria />
        <div className="flex pt-4 justify-between">
          <Link href="/alternative" prefetch={false}>
            <button className="btn btn-neutral max-w-xs">Back</button>
          </Link>
          <Link href="/score" prefetch={false}>
            <button className="btn btn-neutral max-w-xs">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Criterias;
