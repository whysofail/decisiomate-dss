"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const CriteriaUpdate = (props) => {
  const router = useRouter();
  const [name, setName] = useState(props.name);
  const [type, setType] = useState(props.type);
  const [weight, setWeight] = useState(props.weight);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  const handleUpdate = (e) => {
    const updateData = async () => {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/criterias/${props.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          type: type,
          weight: Number(weight),
        }),
      });
    };
    updateData();
    showModal()
    router.refresh();
  };
  return (
    <div>
      <button className="btn btn-success" onClick={() => showModal()}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <dialog
        id="my_modal_3"
        className="modal  modal-bottom sm:modal-middle"
        open={show}
      >
        <form method="dialog" className="modal-box" onSubmit={handleUpdate}>
            {JSON.stringify(type)}
          <h3 className="font-bold text-lg">Update Alternative {props.id}</h3>
          <p className="py-4">
            Update Alternatives
            <b>&nbsp;{props.name}</b>?
          </p>
          <div className="flex flex-col gap-3">
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
                className="select select-bordered w-full max-w-xs join-item"
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
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="btn"
              onClick={() => setShow(false)}
            >
              Close
            </button>
            <button className="btn btn-success" type="submit">
              Ok
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CriteriaUpdate;
