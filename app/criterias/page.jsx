import React from "react";
import Criteria from "@/components/Criterias/Criteria";

export const dynamic = "force-dynamic"

export const metadata = {
  title: 'DecisioMate | Criteria'
}
const Criterias = () => {
  return (
    <>
      <div className="self-start">
        <h1 className="text-3xl font-semibold">Criteria</h1>
        <small>Criteria details</small>
      </div>
      <div className="flex flex-col">
        <Criteria />
      </div>
    </>
  );
};

export default Criterias;
