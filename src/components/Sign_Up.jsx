import React from "react";

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>

      <select>
        <option>Select Role</option>
        <option>Patient</option>
        <option>Doctor</option>
      </select><br /><br />

      <input type="text" placeholder="Name" /><br /><br />
      <input type="email" placeholder="Email" /><br /><br />
      <input type="tel" placeholder="Phone" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button>Register</button>
    </div>
  );
}

export default SignUp;