import React from "react";

function AppointmentForm() {
  return (
    <div>
      <h2>Book Appointment</h2>
      <input placeholder="Name" /><br /><br />
      <input placeholder="Phone Number" /><br /><br />
      <input type="date" /><br /><br />
      <input type="time" /><br /><br />
      <button>Book</button>
    </div>
  );
}

export default AppointmentForm;
