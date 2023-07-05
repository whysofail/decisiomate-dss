"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const AlternativeUpdate = (props) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  const handleUpdate = (e) => {
    const updateData = async () => {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/alternatives/${props.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
        }),
      });
    };
    updateData();
    setName('')
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
          <h3 className="font-bold text-lg">
            Update Alternative {props.id}
          </h3>
          <p className="py-4">
            Update Alternatives
            <b>&nbsp;{props.name}</b>?
          </p>
          <label htmlFor="name" className="label">Edit alternatives</label>
          <input
            id="name"
            type="text"
            value={name}
            min={1}
            onChange={(e) => setName(e.target.value)}
            className="input w-full input-bordered"
            placeholder="Enter alternatives name"
          />
          <div className="flex gap-3 pt-4">
            <button type="button"className="btn" onClick={() => setShow(false)}>Close</button>
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

export default AlternativeUpdate;
