import React from "react";
import CriteriasList from "./CriteriaList";
import CriteriaAdd from "./CriteriaAdd";

const Criteria = () => {
  return (
    <div>
      <div className="py-4">
        <CriteriaAdd />
      </div>

      <CriteriasList />
    </div>
  );
};

export default Criteria;
