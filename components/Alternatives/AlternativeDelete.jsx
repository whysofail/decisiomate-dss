"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const AlternativeDelete = (props) => {
  const router = useRouter()
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };
  const handleDelete = (id) => {
    const deleteData = async (id) => {
        await fetch(process.env.NEXT_PUBLIC_API_URL+`/alternatives/${id}`,{
            method: 'DELETE',
            cache: 'no-store'
        })
        
    }
    deleteData(id)
    router.refresh()
  }
 
  return (
    <div>
      <button className="btn btn-error" onClick={() => showModal()}>
      <FontAwesomeIcon icon={faTrash} color="white" />
      </button>
      <dialog
        id="my_modal_2"
        className="modal  modal-bottom sm:modal-middle"
        open={show}
      >
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Deleting Alternative {props.id}</h3>
          <p className="py-4">
            Delete Alternatives
            <b>&nbsp;{props.name}</b>?
          </p>
          <div className="flex gap-3">
          <button className="btn">Close</button>
          <button className="btn btn-error" onClick={() => handleDelete(props.id)}>Ok</button>
          </div>

        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AlternativeDelete;
