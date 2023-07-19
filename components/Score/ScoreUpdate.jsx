'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const ScoreUpdate = (props) => {
  const router = useRouter();
  const [scores, setScores] = useState({ ...props.scores });

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  const handleUpdate =  (e) => {
    e.preventDefault();

    const updateData = async () => {
     try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/score/${props.alternative.id}`, {
        method: "PUT",
        body: JSON.stringify(scores),
        headers: {
          "Content-Type": "application/json",
        },
      });
     } catch (error) {
      console.error(error);
     } 
    };
    
    updateData();
    showModal();
    router.refresh();
  };

  const handleScoreChange = (id, updatedScore) => {
    setScores((prevScores) => ({
      ...prevScores,
      [id]: updatedScore,
    }));
  };

  return (
    <div className="">
      <button className="btn btn-success" onClick={() => showModal()}>
        <FontAwesomeIcon icon={faEdit} color="white" />
      </button>
      <dialog
        id="my_modal_3"
        className="modal modal-bottom sm:modal-middle"
        open={show}
      >
        <form method="dialog" className="modal-box h-full"  onSubmit={handleUpdate}>
          <h3 className="font-bold text-lg">
            Update Score {props.alternative.name}
          </h3>
          <p className="py-4">
            Update Score
            <b>&nbsp;{props.alternative.name}</b>?
          </p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(scores).map(([id, score]) => (
              <div key={id} className="flex-1">
                <label htmlFor={`score-${id}`} className="">
                  {score.name}
                </label>
                <input
                  type="text"
                  id={`score-${id}`}
                  value={score.score}
                  className="input input-bordered"
                  onChange={(e) =>
                    handleScoreChange(id, {
                      ...score,
                      score: e.target.value,
                    })
                  }
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" className="btn" onClick={() => setShow(false)}>
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
