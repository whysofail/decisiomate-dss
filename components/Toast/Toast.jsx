"use client";
import React from "react";
const Toast = ({message,type}) => {
  return (
    <>
      <div className="toast">
        <div className={`alert alert-${type}`}>
          <span>
            {message}
          </span>
        </div>
      </div>
    </>
  );
};

export default Toast;
