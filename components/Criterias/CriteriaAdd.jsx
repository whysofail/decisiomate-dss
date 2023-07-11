"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const CriteriaAdd = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [type, setType] = useState("Cost");
  const [weight, setWeight] = useState(Number);
  const handleSubmit = (e) => {
    e.preventDefault();
    const addData = async () => {
      try {
        await fetch(process.env.NEXT_PUBLIC_API_URL + "/criterias", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            type: type,
            weight: weight,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    };
    addData();
    setName("");
    setWeight(0);
    router.refresh();
  };
  return (
    <div>
      <form
        className="form flex flex-col sm:flex-row gap-3 justify-between"
        onSubmit={handleSubmit}
      >
        <div className="join w-full">
          <button type="button" className="btn join-item">
            Criteria
          </button>
          <input
            type="text"
            value={name}
            min={1}
            onChange={(e) => setName(e.target.value)}
            className="input w-full input-bordered join-item"
            placeholder="Enter criteria name"
          />
        </div>
        <div className="join w-full">
          <button type="button" className="btn join-item">
            Type
          </button>
          <select
            className="select select-bordered w-full join-item"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Cost">Cost</option>
            <option value="Benefit">Benefit</option>
          </select>
        </div>
        <div className="join w-full">
          <button type="button" className="btn join-item">
            Weight
          </button>
          <input
            type="number"
            value={weight}
            min={1}
            onChange={(e) => setWeight(e.target.value)}
            className="input w-full input-bordered join-item"
            placeholder="Enter Weight"
          />
        </div>
        {/* No button cause form cant be submitted */}
        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
};

export default CriteriaAdd;
