import Alternatives from "@/components/Alternatives/Alternatives";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate ='0'

export const metadata = {
  title: "DecisioMate | Alternatives",
  description: "Add your alternatives",
};
const Alternative = () => {
  return (
    <>
      <div className="self-start">
        <h1 className="text-3xl font-semibold">Add your alternatives</h1>
        <small>Add alternatives to be calculated.</small>
      </div>
      <div className="flex flex-col">
        <Alternatives />
        <div className="pt-4  self-end">
          <Link href="/criterias">
            <button className="btn btn-neutral max-w-xs">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Alternative;
