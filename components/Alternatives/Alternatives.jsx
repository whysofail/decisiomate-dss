import { React } from "react";
import AlternativeList from "./AlternativeList";
import AlternativeAdd from "./AlternativeAdd";


export const dynamic = 'force-dynamic';

const getAlternatives = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/alternatives", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Alternatives = async () => {
  const alternatives = await getAlternatives();
  return (
    <div>
      <div className="py-4">  
      <AlternativeAdd />
      </div>
      <AlternativeList alternatives={alternatives}/>
    </div>
  );
};

export default Alternatives;
