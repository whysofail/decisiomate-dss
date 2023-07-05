"use client";
import React from "react";
import CriteriaMin from "@/components/Criterias/CriteriaMin";
const Test = () => {
  const myObject = {
    0: { id: 53, name: 'Test' },
    1: { id: 54, name: 'Oke dech' },
    2: { id: 55, name: 'oke' },
    3: { id: 56, name: 'boleh' }
  };
  
  const mappedArray = Object.values(myObject).map(value => ({
    id: value.id,
    name: value.name
  }));
  
  console.log(mappedArray);
  return(
    <div>
      <CriteriaMin />
  </div>
  )
};

export default Test;
