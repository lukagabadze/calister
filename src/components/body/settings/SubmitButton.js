import React from "react";

function SubmitButton({ formChanged }) {
  return (
    <button
      type="submit"
      className={`w-min px-3 border-2 border-black rounded-md ${
        formChanged
          ? "bg-green-400 hover:bg-green-300"
          : "bg-gray-300 opacity-50 cursor-default"
      }`}
    >
      Save
    </button>
  );
}

export default SubmitButton;
