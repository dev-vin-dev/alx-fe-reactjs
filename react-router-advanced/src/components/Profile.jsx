import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>

      <nav className="mt-4 space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes defined here */}
      <div className="mt-6">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
}
