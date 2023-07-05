import { React } from "react";
import Table from "../Table/Table";
import CriteriaDelete from "./CriteriaDelete";
import CriteriaUpdate from "./CriteriaUpdate";
import CriteriaMin from "./CriteriaMin";

const getCriterias = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/criterias", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};

const CriteriasList = async () => {
  const criterias = await getCriterias();
  return (
    <>
    <CriteriaMin {...criterias}/>
      {criterias.data.length == 0 ? (
        "Nothing found. Please add some."
      ) : (
        <Table
          {...criterias}
          inner={[CriteriaUpdate, CriteriaDelete]}
        />
      )}

    </>
  );
};

export default CriteriasList;
