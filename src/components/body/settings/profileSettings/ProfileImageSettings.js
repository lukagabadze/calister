import React from "react";

function ProfileImageSettings({
  mediaUrl,
  originalMediaUrl,
  revertImage,
  onChangeHandler,
}) {
  return (
    <div className="flex flex-col">
      <p className="mb-2 border-b-2 border-black">Profile picture:</p>
      <div className="w-32">
        {mediaUrl !== originalMediaUrl ? (
          <div
            className="absolute transform -translate-x-2 bg-gray-800 rounded-full text-white hover:bg-red-600 cursor-pointer"
            onClick={() => revertImage()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        ) : null}
        <label htmlFor="image" className="cursor-pointer">
          <img
            className="mt-2 rounded-md border-2 border-black hover:border-red-500"
            src={mediaUrl}
            alt=""
          />
        </label>
      </div>
      <input
        type="file"
        id="image"
        className="w-0 h-0 opacity-0"
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
}

export default ProfileImageSettings;
