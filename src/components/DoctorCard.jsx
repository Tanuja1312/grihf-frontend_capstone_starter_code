import React, { useState } from "react";

function DoctorCard() {
  const [booked, setBooked] = useState(true);

  return (
    <div>
      <h3>Doctor Name</h3>
      {booked ? (
        <button onClick={() => setBooked(false)}>
          Cancel Appointment
        </button>
      ) : (
        <p>Appointment Cancelled</p>
      )}
    </div>
  );
}

export default DoctorCard;
