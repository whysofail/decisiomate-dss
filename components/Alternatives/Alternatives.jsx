'use client'
import { React } from "react";
import AlternativeList from "./AlternativeList";
import AlternativeAdd from "./AlternativeAdd";


const Alternatives = () => {
  return (
    <div>
      <div className="py-4">  
      <AlternativeAdd />
      </div>
      <AlternativeList />
    </div>
  );
};

export default Alternatives;
