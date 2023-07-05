"use client";
import React from "react";
const Toast = ({message}) => {
  return (
    <>

      <div className="toast">
        <div className={`alert`}>
          <span>
            {message}
          </span>
        </div>
      </div>
    </>
  );
};

export default Toast;
