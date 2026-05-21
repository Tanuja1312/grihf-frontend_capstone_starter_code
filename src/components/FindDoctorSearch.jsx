import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FindDoctorSearch = () => {
  const [specialty, setSpecialty] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (specialty) {
      // ✅ Navigate to search results page
      navigate(`/doctors?specialty=${specialty}`);
    } else {
      alert("Please select a specialty");
    }
  };

  return (
    <div>
      <h2>Find a Doctor</h2>

      {/* ✅ Specialty Dropdown */}
      <select
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      >
        <option value="">Select Specialty</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Pediatrician">Pediatrician</option>
      </select>

      {/* ✅ Search Button */}
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FindDoctorSearch;
