import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <nav className="mt-4 space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <div className="mt-6">
        {/* Nested route renders here */}
        <Outlet />
      </div>
    </div>
  );
}
