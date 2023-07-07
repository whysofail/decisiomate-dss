import { React } from "react";
import Table from "../Table/Table";
import AlternativeDelete from "./AlternativeDelete";
import AlternativeUpdate from "./AlternativeUpdate";



const AlternativeList =  ({alternatives}) => {
  return (
    <>
      {alternatives.data.length == 0 ? (
        "Nothing found. Please add some."
      ) : (
        <Table
          {...alternatives}
          inner={[AlternativeUpdate, AlternativeDelete]}
        />
      )}
    </>
  );
};

export default AlternativeList;
