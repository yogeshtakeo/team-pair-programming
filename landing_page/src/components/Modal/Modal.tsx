import React from "react";
import { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal bg-blue-800 rounded text-white">
        Get Enrolled
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Application Detail</h2>
            <div className="felx flex-col">
              <input className="mr-5 p-1" type="text" placeholder="Name" />
              <input className="p-1" type="email" placeholder="Email" />
            </div>

            <p className="mt-5">Deadline for application : June 21st 2023</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
