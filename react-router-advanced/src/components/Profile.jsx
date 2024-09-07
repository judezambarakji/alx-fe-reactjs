import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile Home</Link>
          </li>
          <li>
            <Link to="/profile/details">Profile Details</Link>
          </li>
          <li>
            <Link to="/profile/settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<ProfileHome />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

function ProfileHome() {
  return <h3>Welcome to your Profile</h3>;
}

function ProfileDetails() {
  return (
    <div>
      <h3>Profile Details</h3>
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div>
      <h3>Profile Settings</h3>
      <p>Change your profile settings here.</p>
    </div>
  );
}

export default Profile;
