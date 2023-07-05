import { React } from "react";
import Table from "../Table/Table";
import AlternativeDelete from "./AlternativeDelete";
import AlternativeUpdate from "./AlternativeUpdate";

const getAlternatives = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/alternatives", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

const AlternativeList = async () => {
  const alternatives = await getAlternatives();
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
