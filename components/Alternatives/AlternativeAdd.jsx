"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "../Toast/Toast";
const AlternativeAdd = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [toast, setToast] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const setData = async () => {
      try {
        await fetch(process.env.NEXT_PUBLIC_API_URL + "/alternatives", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
          }),
        });
      } catch (error) {}
    };
    setData();
    setName("");
    setToast(true);
    router.refresh();
    setTimeout(() => {
      setToast(false);
    }, 2000);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="join w-full">
          <button type="button" className="btn join-item">Alternative</button>
          <input
            type="text"
            value={name}
            min={1}
            onChange={(e) => setName(e.target.value)}
            className="input w-full input-bordered join-item"
            placeholder="Enter alternatives name"
          />
        </div>
      </form>

      {!toast ? name : <Toast message="Alternative added" type="success" />}
    </div>
  );
};

export default AlternativeAdd;
