import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInWithGoogle } = useAuth(); // make sure this is included
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard"); // or "/"
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl mb-4">Login</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}

      <label className="block mb-2">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-4">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700"
      >
        Login
      </button>

      <button
        type="button"
        onClick={async () => {
          try {
            await signInWithGoogle();
            navigate("/dashboard");
          } catch (err) {
            setError(err.message);
          }
        }}
        className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Sign in with Google
      </button>

      <div className="text-center mt-4">
        <span className="text-gray-600">or, </span>
        <Link
          to="/register"
          className="text-blue-600 hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default Login;
