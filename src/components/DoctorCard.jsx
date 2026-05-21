import React, { useState } from "react";

const DoctorCard = () => {
  const [booked, setBooked] = useState(true);

  // ✅ Cancel logic
  const handleCancel = () => {
    // 1. Update state
    setBooked(false);

    // 2. Remove data from localStorage ✅ IMPORTANT
    localStorage.removeItem("appointmentData");

    alert("Appointment cancelled successfully");
  };

  return (
    <div>
      <h3>Doctor Name: Dr. Smith</h3>
      <p>Specialty: Cardiologist</p>

      {booked ? (
        <button onClick={handleCancel}>
          Cancel Appointment
        </button>
      ) : (
        <p>No Appointment Booked</p>
      )}
    </div>
  );
};

export default DoctorCard;
