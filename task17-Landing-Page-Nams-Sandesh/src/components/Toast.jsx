import toast, { Toaster } from "react-hot-toast";
import { Toast } from "react-hot-toast";

import React from "react";

function Toast() {
  const Notify = () => {
    Toast(
      "We are excited that you are interested in Captain Underpant's College"
    );
  };
  return (
    <div>
      <button className="bg-blue-500 text-black" onClick={Notify}>
        Hello
      </button>
      <Toaster />
    </div>
  );
}

export default Toast;
