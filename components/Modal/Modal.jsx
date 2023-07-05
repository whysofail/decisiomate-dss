"use client";
import React from "react";

const Modal = (props) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => window.my_modal_2.showModal()}
      >
        {props.label}
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
          <button className="btn">Close</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
