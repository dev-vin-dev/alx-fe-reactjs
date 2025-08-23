import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-2">Welcome! Try navigating:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><Link to="/blog/1">Blog Post 1</Link></li>
        <li><Link to="/blog/2">Blog Post 2</Link></li>
        <li><Link to="/profile/details">Profile Details (Protected)</Link></li>
        <li><Link to="/profile/settings">Profile Settings (Protected)</Link></li>
      </ul>
    </div>
  );
}
