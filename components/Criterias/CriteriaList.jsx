import { React } from "react";
import Table from "../Table/Table";
// import CriteriaDelete from "./CriteriaDelete"; 
import CriteriaUpdate from "./CriteriaUpdate";
import CriteriaMin from "./CriteriaMin";
import Link from "next/link";

const getCriterias = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/criterias", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const CriteriasList = async () => {
  const criterias = await getCriterias();
  return (
    <>
      <CriteriaMin {...criterias}  />
      {criterias.data.length == 0 ? (
        "Nothing found. Please add some."
      ) : (
        <Table {...criterias} inner={[CriteriaUpdate]} />
        // gajadi bisa delete
      )}
      <div>
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

export default CriteriasList;
