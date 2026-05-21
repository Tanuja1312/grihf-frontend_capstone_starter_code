import React, { useState } from "react";

function ProfileCard() {
  const [editing, setEditing] = useState(false);

  return (
    <div>
      <h2>Profile</h2>

      {editing ? (
        <>
          <input placeholder="Name" /><br /><br />
          <input placeholder="Phone" /><br /><br />
          <button onClick={() => setEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <p>Name: Tanuja</p>
          <p>Phone: 1234567890</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default ProfileCard;