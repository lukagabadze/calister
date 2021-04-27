import React from "react";

function UsernameSettings({ username, setFormHandler }) {
  return (
    <div className="flex space-x-2">
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        className="border-2 border-black rounded-sm"
        placeholder="Username..."
        value={username}
        onChange={(e) => setFormHandler(e)}
      />
    </div>
  );
}

export default UsernameSettings;
