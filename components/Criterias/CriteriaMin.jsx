"use client";
import React from "react";
const CriteriaMin = (data, { isValid, setValid }) => {
  const sumOfWeights = data.data.reduce((sum, obj) => sum + obj.weight, 0);
  return (
    <div>
      {sumOfWeights == 100 ? (
        ""
      ) : (
        <div className="py-2">
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              <b>Warning! Sum of the weights doesnt add up to 100</b>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CriteriaMin;
