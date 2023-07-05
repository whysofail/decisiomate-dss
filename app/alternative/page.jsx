import Alternatives from "@/components/Alternatives/Alternatives";


export const metadata = {
  title: "DecisioMate | Alternatives",
  description: "Add your alternatives",
}
const Alternative = () => {
  return (
    <div className="flex flex-col flex-wrap min-h-screen pt-28 sm:pt-12 bg-white">
      <div className="w-full sm:w-[50%] self-center">
        <div className="self-start">
          <h1 className="text-3xl font-semibold">Add your alternatives</h1>
          <small>Add alternatives to be calculated.</small>
        </div>
        <div className="">
         <Alternatives/>    
        </div>
        
       
      </div>
    </div>
  );
};

export default Alternative;
