"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const ScoreUpdate = (props) => {
  const router = useRouter();
  const [scores, setScores] = useState([props]);

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  const handleUpdate = (e) => {
    const updateData = async () => {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/criterias/${props.id}`, {
        method: "PUT",
        body: JSON.stringify({}),
      });
    };
    showModal();
    router.refresh();
  };
  return (
    <div>
      <button className="btn btn-success" onClick={() => showModal()}>
        <FontAwesomeIcon icon={faEdit} color="white" />
      </button>
      <dialog
        id="my_modal_3"
        className="modal modal-bottom sm:modal-middle"
        open={show}
      >
        <form method="dialog" className="modal-box" onSubmit={handleUpdate}>
          <h3 className="font-bold text-lg">
            Update Score {props.alternative.name}
          </h3>
          <p className="py-4">
            Update Score
            <b>&nbsp;{props.name}</b>?
          </p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(props.scores).map(([key, value], i) => (
              <div key={i} className="flex-1">
                <label htmlFor={value.name} className="">
                  {value.name}
                </label>
                <input
                  type="text"
                  value={value.score}
                  className="input input-bordered"
                  onChange={(e) =>setScores(e.target.value)
                  }
                />
              </div>
            ))}
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

export default ScoreUpdate;
