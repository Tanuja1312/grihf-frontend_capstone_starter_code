import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/Sign_Up";
import Notification from "./components/Notification";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentFormIC from "./components/AppointmentFormIC";
import ProfileCard from "./components/ProfileCard";
import GiveReviews from "./components/GiveReviews";
import DoctorCard from "./components/DoctorCard";
import FindDoctorSearch from "./components/FindDoctorSearch";

function App() {
  return (
    <div>
      <Navbar />
      <Notification />
      <Login />
      <SignUp />
      <AppointmentForm />
      <AppointmentFormIC />
      <ProfileCard />
      <GiveReviews />
      <DoctorCard />
      <FindDoctorSearch />
    </div>
  );
}

export default App;
