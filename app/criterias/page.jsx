import React from "react";
import Criteria from "@/components/Criterias/Criteria";
import Link from "next/link";

export const metadata = {
  title: 'DecisioMate | Criteria'
}
const Criterias = () => {
  return (
    <>
      <div className="self-start">
        <h1 className="text-3xl font-semibold">Add your Criteria</h1>
        <small>Add Criteria to be calculated.</small>
      </div>
      <div className="flex flex-col">
        <Criteria />
      </div>
    </>
  );
};

export default Criterias;
