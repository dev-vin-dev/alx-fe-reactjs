import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile/details");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
        onClick={handleLogin}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Simulate Login
      </button>
    </div>
  );
}
