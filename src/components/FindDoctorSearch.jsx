import React, { useState } from "react";

function FindDoctorSearch() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>Search Doctor</h2>
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Searching for: {search}</p>
    </div>
  );
}

export default FindDoctorSearch;