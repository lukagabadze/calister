import React from "react";

function DescriptionSettings({ description, onChangeHandler }) {
  return (
    <div>
      <p>Description:</p>
      <textarea
        value={description}
        onChange={(e) => onChangeHandler(e)}
        className="w-full h-28 text-sm resize-none border-2 border-black rounded-sm"
      />
    </div>
  );
}

export default DescriptionSettings;
